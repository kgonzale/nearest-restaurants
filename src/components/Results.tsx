import React from "react";

interface IProps {
  history: any;
  location: any;
  match: any; 
}

const Results = (props: IProps) => {
  const params = new URLSearchParams(props.location.search)
  const food_choice = params.get('choice')
  const lat = params.get('lat')
  const long = params.get('long')

  return <p>{`${long} + ${lat} + ${food_choice}`}</p>;
};

export default Results;
