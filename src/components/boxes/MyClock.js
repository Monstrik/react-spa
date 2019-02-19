import React, { Component } from "react";

class MyClock extends Component {

    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }

    render() {
        return <strong>     
           {this.state.date.toLocaleTimeString()}
        </strong>;
    }

}

export default MyClock;