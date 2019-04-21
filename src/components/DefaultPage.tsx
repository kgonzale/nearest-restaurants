import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';


interface IProps extends RouteComponentProps {
    onClick?: () => null;
}


const DefaultPage = (props: IProps) => { 
    const [value, setValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.history.push('/results');
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
