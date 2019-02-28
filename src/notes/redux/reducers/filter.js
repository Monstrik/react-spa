import {VISIBILITY_FILTERS} from "../../constants";
import {SET_FILTER} from '../actionTypes';

const initialState = VISIBILITY_FILTERS.CURRENT;
const filter = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return action.payload.filter;
        }
        default: {
            return state;
        }
    }
};

export default filter



