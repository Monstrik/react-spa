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
import HelTempCalcPagepPage from  "./components/pages/TempCalcPage";

import LoginControl from "./components/controls/LoginControl";

import MyClock from "./components/boxes/MyClock";
import TempCalcPage from './components/pages/TempCalcPage';



class App extends Component {
  render() {
    return (
      <HashRouter>
     <div>
      <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/term">Terminal</NavLink></li>
        <li><NavLink to="/help">Help</NavLink></li>
        <li><NavLink to="/tCalc">TempCalc</NavLink></li>
        <li> </li>
        <li> </li>
        <li> </li>
        <li> </li>
        <li> </li>
        <li> </li>
        <li> </li>
        <li> <MyClock color="white" /></li>
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
          <Route path="/tCalc" component={TempCalcPage} />
          
      </div>
    </div>
    </HashRouter>
        );
  }
}

export default App;
