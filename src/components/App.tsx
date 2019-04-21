import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DefaultPage from './DefaultPage';
import Results from './Results';

const App = () => {

    return (
    <Router>
        <Route exact path="/" component={DefaultPage}/>
        <Route exact path="/results" component={Results} />
    </Router>
    );
    
}

export default App;