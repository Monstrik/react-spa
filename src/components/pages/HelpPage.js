import React, { Component } from "react";
 

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


class HelpPage extends Component {
  render() {
    return (
      <div>
        <h2>Help</h2>
        <hr />
        <Greeting isLoggedIn={false} />
      </div>
    );
  }
}
 
export default HelpPage;