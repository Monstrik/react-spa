import React, { Component } from "react";
import { FuncComponent } from "./FuncComponent";

class Message extends Component {

    render() {
        return <strong>
            {this.props.text}        <FuncComponent />
        </strong>;
    }
    
}


export default Message;