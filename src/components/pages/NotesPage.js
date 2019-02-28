import React, {Component} from "react";
import {createStore} from 'redux'
import {Provider} from "react-redux";

import AddNote from "../../notes/components/AddNote";
import Filters from "../../notes/components/Filters";
import NoteList from "../../notes/components/NoteList";
import rootReducer from '../../notes/redux/reducers'
import store from "../../notes/redux/store";


class NotesPage extends Component {
    constructor(props) {
        super(props);
        console.log('NotesPage constructor invoked');
    }

    render() {
        return (
            <div>
                <Provider store={store}>
                    <h2>Notes</h2>
                    <AddNote/>
                    <NoteList/>
                    <Filters/>
                </Provider>
            </div>
        );
    }
}

export default NotesPage;
