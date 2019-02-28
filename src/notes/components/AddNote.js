import React from "react";
import {addNote} from "../redux/actions";
import {connect} from "react-redux";

class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ""};
    }

    updateInput = input => {
        // console.log('AddNote updateInput invoked',input);
        this.setState({input});
    };

    handleAddNote = () => {
        this.setState({input: ""});
        this.props.addNote(this.state.input);
    };

    render() {
        return (
            <div>
                <input value={this.state.input}
                       onChange={e => this.updateInput(e.target.value)}/>

                <button onClick={this.handleAddNote}>Save</button>
            </div>
        );
    }
}

export default connect(null, {addNote})(AddNote); // export default AddNote
