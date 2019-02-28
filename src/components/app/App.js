import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import ChatPage from "../pages/ChatPage";
import TermPage from "../pages/TermPage";
import NotesPage from "../pages/NotesPage";

import HelpPage from "../pages/HelpPage";
import TempCalcPage from "../pages/TempCalcPage";

import LoginControl from "../controls/LoginControl";

import MyClock from "../boxes/MyClock";


class App extends Component {
    render() {
        return (
            <HashRouter>

                {/*<Nav activeKey="/home">*/}
                {/*<Nav.Item>*/}
                {/*/!*<NavLink exact to="/">Home</NavLink>*!/*/}
                {/*<Nav.Link href="/">Home</Nav.Link>*/}
                {/*</Nav.Item>*/}
                {/*<Nav.Item>*/}
                {/*<Nav.Link href="/chat">Chat</Nav.Link>*/}
                {/*/!*<NavLink exact to="/chat">chat</NavLink>*!/*/}
                {/*/!*<Nav.Link href="/">Home</Nav.Link>*!/*/}
                {/*</Nav.Item>*/}
                {/*<Nav.Item>*/}
                {/*<NavLink exact to="/chat">Chat 1</NavLink>*/}
                {/*</Nav.Item>*/}


                {/*</Nav>*/}
                <div>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink exact to="/chat">Chat</NavLink></li>
                        <li><NavLink to="/term">Terminal</NavLink></li>
                        <li><NavLink to="/notes">Notes</NavLink></li>
                        <li><NavLink to="/help">Help</NavLink></li>
                        <li><NavLink to="/tCalc">TempCalc</NavLink></li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>

                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                        <li><LoginControl/></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/chat" component={ChatPage}/>
                        <Route path="/term" component={TermPage}/>
                        <Route path="/help" component={HelpPage}/>
                        <Route path="/tCalc" component={TempCalcPage}/>
                        <Route path="/notes" component={NotesPage}/>

                    </div>
                    <MyClock/>
                    {/*<MyClock color="white"/>*/}
                </div>
            </HashRouter>
        );
    }
}

export default App;
