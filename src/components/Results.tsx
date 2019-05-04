import React, { useState, useEffect } from "react";

const axios = require("axios");

interface Restaurant {
  restaurant : any;
}


type RestaurantResults = {
  results_found ?: number;
  results_start ?: number;
  results_shown ?: number;
  restaurants : Restaurant[];
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
  const [resp, setResp] = useState<RestaurantResults>({ restaurants: [] });
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

  // console.log(resp);

  // let apiResponse = Object.values(resp)[3]
  // console.log(apiResponse)

  const apiResponse = resp.restaurants || [];
  console.log(apiResponse)


  

  return (
    <div>
      <button className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded" onClick={() => setSortChoice(1)} />
      <button className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded" onClick={() => setSortChoice(2)} />
      <button className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded" onClick={() => setSortChoice(3)} />

      {apiResponse && apiResponse.map(i => {

        //border-top: 4px solid rgb(55, 188, 155);

      return (<div className="max-w-sm rounded overflow-hidden shadow-lg custom-border ">
      {/* <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" >
          <img src={'https://tailwindcss.com/img/card-left.jpg'} />
      </div> */}
      <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-black font-bold text-xl mb-2">
            {i.restaurant.name}
          </div>
          <p className="text-grey-darker text-base">
           Average cost for two: {i.restaurant.average_cost_for_two}
          </p>
          <p className="text-grey-darker text-base">
           User Rating: {i.restaurant.user_rating.aggregate_rating}
          </p>
        </div>
      </div>
    </div>)
      })}

      
    </div>
  );
};

export default Results;
