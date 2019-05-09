import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DefaultPage from "./DefaultPage";
import Results from "./Results";

const App = () => {
  return (
    <div className="container mx-auto px-4">
      <Router>
        <Route exact path="/" component={DefaultPage} />
        <Route exact path="/results" component={Results} />
      </Router>
    </div>
  );
};

export default App;
