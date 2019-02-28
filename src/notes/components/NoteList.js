import React from "react";
import {connect} from "react-redux";
import Note from "./Note";
// import { getNotes } from "../redux/selectors";
import {getNotesByVisibilityFilter} from "../redux/selectors";
import {VISIBILITY_FILTERS} from "../constants";

const NoteList = ({notes}) => (
    <div>
        Notes
        <hr/>
        <ul>
            {notes && notes.length
                ? notes.map((note, index) => {
                    return <Note key={`note-${note.id}`} note={note}/>;
                }) : "No notes!"}
        </ul>
        <hr/>
    </div>
);

// const mapStateToProps = state => {
//   const { byIds, allIds } = state.todos || {};
//   const todos =
//     allIds && state.todos.allIds.length
//       ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//       : null;
//   return { todos };
// };

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const notes = getNotesByVisibilityFilter(state, visibilityFilter);
    return { notes };
};

// export default NoteList;
export default connect(mapStateToProps)(NoteList);
