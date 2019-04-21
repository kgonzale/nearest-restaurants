import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, RouteComponentProps } from 'react-router-dom';
import Results from './Results';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";



interface IProps extends RouteComponentProps<{}> {
    onClick?: () => null;
}


const DefaultPage = (props: IProps) => { 
    const [value, setValue] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.history.push(`/results?choice=${value}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setValue(e.target.value)} value={value} ></input>
                <input type="submit" value="submit"></input>
            </form>   
        </div>
    )
}

export default DefaultPage;
