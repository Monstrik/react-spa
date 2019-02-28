import {ADD_NOTE, TOGGLE_NOTE, SET_FILTER} from "./actionTypes";

let nextNoteId = 0;

// action creators
export const addNote = content => ({
    type: ADD_NOTE,
    payload: {
        id: ++nextNoteId,
        content
    }
});

export const toggleNote = id => ({
    type: TOGGLE_NOTE,
    payload: {id}
});

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: {filter}
});


