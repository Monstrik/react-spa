import React, { Component } from "react";
import Welcome from  "../boxes/Welcome";
import Message from  "../boxes/Message";



class HomePage extends Component {
  render() {
    return (
      <div>
         <h2>Home</h2>         
         <Welcome name="Alex"/>
         <Message text="Hi "/>
         
      </div>
    );
  }
}
 
export default HomePage;