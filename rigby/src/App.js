import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/Home.js';
import Abilities from './components/Abilities/Abilities.js';
import JobHistory from './components/JobHistory/JobHistory.js';
import Contact from './components/Contact/Contact.js';
import { NavLink } from "react-router-dom";
import './reset.css';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul className="navbar">
              <li className="navbar__item"><NavLink exact to="/" activeClassName="navlink__active">Home</NavLink></li>
              <li className="navbar__item"><NavLink to="/abilities" activeClassName="navlink__active">Abilities</NavLink></li>
              <li className="navbar__item"><NavLink to="/job-history" activeClassName="navlink__active">Job History</NavLink></li>
              <li className="navbar__item"><NavLink to="/contact" activeClassName="navlink__active">Contact</NavLink></li>
            </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/abilities" component={Abilities} />
          <Route path="/job-history" component={JobHistory} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
