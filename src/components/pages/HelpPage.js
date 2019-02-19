import React, {Component} from "react";


function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}


class HelpPage extends Component {


    render() {
        const numbers = [10, 20, 30, 40, 50];
        const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
        const todoItems = numbers.map((number, index) =>
            // Only do this if items have no stable IDs
            <li key={index}>{number}</li>
        );


        return (
            <div>
                <h2>Help</h2>
                <hr/>
                <Greeting isLoggedIn={false}/>
                <ul>{listItems}</ul>
                <ul>{todoItems}</ul>
                <ul>
                    {numbers.map((number) =>
                        <li key={number.toString()}>{number}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default HelpPage;