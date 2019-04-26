import React, { useState, useEffect } from "react";

const axios = require('axios');

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
  const [resp, setResp] = useState(null);
  const [sortChoice, setSortChoice] = useState(0);

  const params = new URLSearchParams(props.location.search)
  const food_choice = params.get('choice')
  const lat = params.get('lat')
  const lon = params.get('long')


  useEffect(() => {
    const choiceList = ['', '&sort=cost', '&sort=rating', '&sort=real_distance']

   const res = async () => {
    axios({
      method: "get",
      url:
        `https://developers.zomato.com/api/v2.1/search?q=${food_choice}&lat=${lat}&lon=${lon}${choiceList[sortChoice]}`,
      responseType: "json",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "user-key": `${process.env.REACT_APP_ZOMATO_API_KEY}`
      }
    }).then(function(response: IResponse) {
      setResp(response.data);
    });    
   }
   res();


  }, [sortChoice])

  console.log(resp);
  
  
  return (
    <div>
      <p>{`${lon} + ${lat} + ${food_choice} `}</p>

      <button onClick={() => setSortChoice(1)} />
      <button onClick={() => setSortChoice(2)} />
      <button onClick={() => setSortChoice(3)} />
    </div>
  
  )
};

export default Results;
