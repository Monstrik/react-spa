import {ADD_NOTE, TOGGLE_NOTE} from '../actionTypes'

const initialState = {
    allIds: [],
    byIds: {}
};

const notes = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE: {
            let {id, content} = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            };
        }
        case TOGGLE_NOTE: {
            let noteId = action.payload.id;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [noteId]: {
                        ...state.byIds[noteId],
                        completed: !state.byIds[noteId].completed
                    }
                }
            };
        }
        default:
            return state
    }
};

export default notes;



