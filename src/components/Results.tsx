import React from "react";

const axios = require('axios');

interface IProps {
  history: any;
  location: any;
  match: any; 
}



const Results = (props: IProps) => {
  const params = new URLSearchParams(props.location.search)
  const food_choice = params.get('choice')
  const lat = params.get('lat')
  const lon = params.get('long')


  axios({
    method: "get",
    url:
      `https://developers.zomato.com/api/v2.1/search?q=${food_choice}&lat=${lat}&lon=${lon}`,
    responseType: "json",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "user-key": `${process.env.REACT_APP_ZOMATO_API_KEY}`
    }
  }).then(function(response: any) {
    console.log(response);
  });




  return <p>{`${lon} + ${lat} + ${food_choice} `}</p>;
};

export default Results;
