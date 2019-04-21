import React from "react";
import { RouteComponentProps } from 'react-router-dom'

interface IProps extends RouteComponentProps {
}

const Results = (props: IProps) => {
  const params = new URLSearchParams(props.location.search)
  const choice = params.get('choice')

  return <p>{choice}</p>;
};

export default Results;
