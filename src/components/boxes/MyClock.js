import React, {Component} from "react";
import '../app/App.css';

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
        return <span>
         
          {/* {this.props.color==="white" &&  
           <strong className="whiteColor">   
            {this.state.date.toLocaleTimeString()}
            </strong>
          }

          {this.props.color!=="white" &&  
           <strong >   
            {this.state.date.toLocaleTimeString()}
            </strong>
          } */}

            {this.props.color === "white" ? (
                <strong className="whiteColor">{this.state.date.toLocaleTimeString()}</strong>
            ) : (
                <strong>{this.state.date.toLocaleTimeString()}</strong>
            )}

         
        </span>;
    }

}

export default MyClock;