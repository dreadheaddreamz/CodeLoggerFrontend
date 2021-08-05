import React, {Component} from 'react'
import {addLog} from '../actions/logActions'
import { connect } from 'react-redux'
class LogForm extends Component {

    state = {
        date: " ",
        language: " ",
        length: " ",
        notes: " "
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addLog(this.state)

        this.setState({
            date: " ",
            language: " ",
            length: " ",
            notes: " "
        })
        this.props.history.push("/trackers")
    }

    render() {
        console.log("form props", this.props)
        return (
            <div className="logForm">
            <form onSubmit={this.handleSubmit}>
            <fieldset><legend>New Log</legend>
            <label for="field1"><span> Date: </span></label>
                <input type="date" name="date" placeholder="Date" value={this.state.date} onChange={this.handleOnChange} />
                <br />
                <br />
                <label for="field2"><span>Language: </span></label>
                <input type="text" name="language" value={this.state.language} onChange={this.handleOnChange} />
                <br />
                <br />
                <label for="field3"><span>Length: </span></label>
                <input type="text" name="length" value={this.state.length} onChange={this.handleOnChange} />
                <br />
                <br />
                <label for="field4"><span>Notes: </span></label>
                <input type="textarea" name="notes" value={this.state.notes} onChange={this.handleOnChange} />
                <br />
                <label><span> </span><input type="submit" value="Add Log" /></label>
                </fieldset>
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        logs: state.logReducer.logs
    }
}


export default connect(mapStateToProps, {addLog})(LogForm)