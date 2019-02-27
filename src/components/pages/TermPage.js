import React, {Component} from "react";

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../../todos/reducers'

import VisibleTodoList from "../../todos/containers/VisibleTodoList";
import AddTodo from "../../todos/containers/AddTodo";
import Footer from "../../todos/components/Footer";



class TermPage extends Component {

    constructor(props) {
        super(props);
        // this.state = {isToggleOn: true};
        this.store = createStore(rootReducer)
        // // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
    }

    // // binded handleClick
    // handleClick() {
    //   this.setState(state => ({
    //     isToggleOn: !state.isToggleOn
    //   }));
    // }

    // handleClick = () => {
    //     this.setState(state => ({
    //         isToggleOn: !state.isToggleOn
    //     }));
    // }

    render() {
        return (
            <div>
                <Provider store={this.store}>
                    <AddTodo />
                    <VisibleTodoList />
                    <Footer />
                </Provider>,
                {/*<h2>Terminal</h2>*/}
                {/*<hr/>*/}
                {/*<Button variant="contained" color="primary" size="small"*/}
                        {/*onClick={this.handleClick}>*/}
                    {/*{this.state.isToggleOn ? 'ON' : 'OFF'}*/}
                {/*</Button>*/}
                {/*<hr/>*/}
                {/*<NickNameForm/>*/}

            </div>
        );
    }


}

export default TermPage;