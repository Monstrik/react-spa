import React, {Component} from "react";
import Button from '@material-ui/core/Button';


function LoginButton(props) {
    return (
        <Button onClick={props.onClick}
                variant="contained" color="primary">
            Login
        </Button>
    );
}

function LogoutButton(props) {
    return (
        <Button onClick={props.onClick}
                variant="contained" color="secondary">
            Logout
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
          {/* <Greeting isLoggedIn={isLoggedIn} /> */}
                {button}
        </span>
        );
    }
}

export default LoginControl;