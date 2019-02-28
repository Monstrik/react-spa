import { VISIBILITY_FILTERS } from "../constants";

export const getNotesState = store => store.notes;

export const getNotesList = store =>
    getNotesState(store) ? getNotesState(store).allIds : [];

export const getNoteById = (store, id) =>
    getNotesState(store) ? { ...getNotesState(store).byIds[id], id } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getNotes = store =>
    getNotesList(store).map(id => getNoteById(store, id));

export const getNotesByVisibilityFilter = (store, filter) => {
    const allNotes = getNotes(store);
    switch (store.filter) {
        case VISIBILITY_FILTERS.ARCHIVED:
            return allNotes.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.CURRENT:
            return allNotes.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allNotes;
    }
};
