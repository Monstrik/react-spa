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
import LoginControl from "./components/controls/LoginControl";

import MyClock from "./components/boxes/MyClock";



class App extends Component {
  render() {
    return (
      <HashRouter>
     <div>
      <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/term">Terminal</NavLink></li>
        <li><NavLink to="/help">Help</NavLink></li>
        <li> </li>
        <li> </li>
        <li> </li>
        <li> </li>
        <li> </li>
        <li> </li>
        <li> </li>
        <li> <MyClock/></li>
        <li> </li>
        <li> </li>
        <li> </li>
        <li> </li>
        <li> </li>
        <li> </li>
        
        <li> <LoginControl/></li>


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
