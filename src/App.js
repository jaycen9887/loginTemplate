import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import $ from 'jquery';
import Home from './components/pages/home';
import Profile from './components/pages/profile';
 
function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
