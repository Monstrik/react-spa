import React from "react";
import {addNote} from "../redux/actions";
import {connect} from "react-redux";

class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ""};
    }

    updateInput = input => {
        console.log('AddNote updateInput invoked',input);
        this.setState({input});
    };

    handleAddNote = () => {
        console.log('AddNote handleAddNote invoked', this.state.input);
        this.props.addNote(this.state.input);
        this.setState({input: ""});
    };

    render() {
        return (
            <div>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                />
                <button onClick={this.handleAddNote}>Save</button>
            </div>
        );
    }
}

export default connect(null, {addNote})(AddNote);
// export default AddNote
