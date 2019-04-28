import React, { useState, useEffect } from "react";

const axios = require("axios");

type RestaurantResults = {
  results_found ?: number;
  results_start ?: number;
  results_shown ?: number;
  restaurants ?: [];
}

interface IProps {
  history: any;
  location: any;
  match: any;
}

interface IResponse {
  data: any;
  status: number;
  statusText: string;
  header: any;
  config: any;
}

const Results = (props: IProps) => {
  const [resp, setResp] = useState<RestaurantResults>({});
  const [sortChoice, setSortChoice] = useState(0);

  const params = new URLSearchParams(props.location.search);
  const food_choice = params.get("choice");
  const lat = params.get("lat");
  const lon = params.get("long");

  useEffect(() => {
    const choiceList = [
      "",
      "&sort=cost",
      "&sort=rating",
      "&sort=real_distance"
    ];

    const res = async () => {
      axios({
        method: "get",
        url: `https://developers.zomato.com/api/v2.1/search?q=${food_choice}&lat=${lat}&lon=${lon}${
          choiceList[sortChoice]
        }`,
        responseType: "json",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "user-key": `${process.env.REACT_APP_ZOMATO_API_KEY}`
        }
      }).then(function(response: IResponse) {
        setResp(response.data);
      });
    };
    res();
  }, [sortChoice]);

  console.log(resp);

  let apiResponse = Object.values(resp)[3]
  console.log(apiResponse)

  return (
    <div>
      <p>{`${lon} + ${lat} + ${food_choice} `}</p>


      <button onClick={() => setSortChoice(1)} />
      <button onClick={() => setSortChoice(2)} />
      <button onClick={() => setSortChoice(3)} />

      {/* {apiResponse.map(i => {
        
      })} */}

      <div className="max-w-md w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" />
        <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-black font-bold text-xl mb-2">
              Can coffee make you a better developer?
            </div>
            <p className="text-grey-darker text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
