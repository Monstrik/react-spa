import React, {Component} from 'react';
import {DropdownButton, Dropdown, SplitButton} from 'react-bootstrap';

class ThemeSwitcher extends Component {

    state = {theme: null}

    chooseTheme = (theme, evt) => {
        evt.preventDefault();
        if (theme.toLowerCase() === 'reset') {
            theme = null
        }
        this.setState({theme});
    };

    render() {

        const {theme} = this.state;
        const themeClass = theme ? theme.toLowerCase() : 'default';
        return (
            <div>
                <DropdownButton id="SplitButton"
                                size="large"
                                bsstyle={themeClass}
                                title={`${theme || 'Default'} Theme`}>
                    <Dropdown.Item eventKey="Primary" onSelect={this.chooseTheme}>Primary Theme</Dropdown.Item>
                    <Dropdown.Item eventKey="Danger" onSelect={this.chooseTheme}>Danger Theme</Dropdown.Item>
                    <Dropdown.Item eventKey="Success" onSelect={this.chooseTheme}>Success Theme</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item eventKey="Reset" onSelect={this.chooseTheme}>Default Theme</Dropdown.Item>
                </DropdownButton>

                <span className={`h1 center-block text-center text-${theme ? themeClass : 'muted'}`}>
                    {theme || 'Default'} Theme
                </span>
            </div>
        );

    }

}

export default ThemeSwitcher;