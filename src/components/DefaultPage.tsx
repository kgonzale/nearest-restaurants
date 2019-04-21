import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const axios = require('axios');


const DefaultPage = () => { 
    const [value, setValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setValue(e.target.value)} value={value} ></input>
                <Router>
                    <button>
                        <Link to='/new/location/' type="submit">Click Me</Link>
                    </button>
                </Router>

            </form>  
        </div>
    )
}

export default DefaultPage;