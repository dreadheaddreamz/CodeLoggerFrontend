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
    }

    render() {
        return (
            <div className="logForm">
            <form onSubmit={this.handleSubmit}>
                <label>Date: </label>
                <input type="text" name="date" placeholder="Date" value={this.state.date} onChange={this.handleOnChange} />
                <br />
                <br />
                <label>Language: </label>
                <input type="text" name="language" value={this.state.language} onChange={this.handleOnChange} />
                <br />
                <br />
                <label>Length: </label>
                <input type="text" name="length" value={this.state.length} onChange={this.handleOnChange} />
                <br />
                <br />
                <label>Notes: </label>
                <input type="text" name="notes" value={this.state.notes} onChange={this.handleOnChange} />
                <br />
                <input type="submit" value="Add Log" />
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        logs: state.logReducer.logs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addLog: (logs) => dispatch(addLog(logs))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogForm)