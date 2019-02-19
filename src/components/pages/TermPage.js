import React, { Component } from "react";
import Button from '@material-ui/core/Button';
class TermPage extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
  }

  // // binded handleClick
  // handleClick() {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }));
  // }

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
 
  render() {
    return (
      <div>
        <h2>Terminal</h2>
        <hr/>
        <Button variant="contained" color="primary" size="small"
         onClick={this.handleClick}>
         {this.state.isToggleOn ? 'ON' : 'OFF'}
        </Button>

      </div>
    );
  }

 
}
 
export default TermPage;