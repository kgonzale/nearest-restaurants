import React, { useState } from 'react';
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();
const location = history.location;


const DefaultPage = (props: any) => { 
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
