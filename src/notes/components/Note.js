import React from "react";
import {connect} from "react-redux";
import cx from "classnames";
import {toggleNote} from "../redux/actions";

const Note = ({ note, toggleNote}) => (
    <div className="todo-item">
        {note && note.completed ? "📁" : "📝"}{" "}
        <span
            className={cx("note-item__text",
                note && note.completed && "note-item__text--completed"
            )}>
          {note.content}
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="blueColor" role="img" onClick={() => toggleNote(note.id)}>
            {note && !note.completed ? "⏬ Archive" : "⏫ Restore"}{" "}
        </span>
    </div>
);

// export default Note;
export default connect(null, {toggleNote})(Note);
