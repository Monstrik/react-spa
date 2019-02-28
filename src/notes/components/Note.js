import React from "react";
import {connect} from "react-redux";
import cx from "classnames";
import {toggleNote} from "../redux/actions";

const Note = ({ note, toggleNote}) => (
    <div className="note-item">
        {note && note.completed ? "📁" : "📝"}{" "}
        <span
            className={cx(
                "note-item",
                note && note.completed && "note-item-text-completed"
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
