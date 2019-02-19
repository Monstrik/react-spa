import React, {Component} from "react";

class Welcome extends Component {
    render() {
        return <h3>Hello, {this.props.name}</h3>;
    }
}


export default Welcome;