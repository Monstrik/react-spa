import React, { Component } from 'react';
import './App.css';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import HomePage from  "./components/pages/HomePage";
import TermPage from "./components/pages/TermPage";
import HelpPage from  "./components/pages/HelpPage";



class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
      {/* <h1>SPA</h1> */}
      <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/term">Terminal</NavLink></li>
        <li><NavLink to="/help">Help</NavLink></li>
      </ul>
      <div className="content">
          <Route exact path="/" component={HomePage}/>
          <Route path="/term" component={TermPage} />
          <Route path="/help" component={HelpPage} />
      </div>
    </div>
    </HashRouter>
        );
  }
}

export default App;
