import React, {Component} from "react";
// import Button from '@material-ui/core/Button';
import Button from 'react-bootstrap/Button';
import './LoginControl.css';

function LoginButton(props) {
    return (
        <Button onClick={props.onClick}

                variant="success"
                size="sm"

        >
            Sign-in
        </Button>
    );
}

function LogoutButton(props) {
    return (
        <Button onClick={props.onClick}
                variant="danger" size="sm">
            Sign-out
        </Button>
    );
}

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }

        return (
            <span>
                {button} &nbsp;&nbsp;&nbsp;
                <Greeting isLoggedIn={isLoggedIn}/>

            </span>
        );
    }
}


function UserGreeting(props) {
    return <strong className="whiteColor">Welcome back User! </strong>;
}

function GuestGreeting(props) {
    return <strong className="whiteColor">Please sign up.</strong>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}

export default LoginControl;