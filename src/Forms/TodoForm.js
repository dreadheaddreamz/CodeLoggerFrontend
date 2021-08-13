import React, {Component} from 'react'
import { addTodo } from '../actions/todoActions'
import { connect } from 'react-redux'

class TodoForm extends Component {
    state = {
        title: " ",
        priority: " ",
        context: " ",
        completeBy: " "
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state)

        this.setState({
            title: " ",
            priority: " ",
            context: " ",
            completeBy: " "
        })
        this.props.history.push("/todos")
    }

    render() {
        return (
            <div className="todoForm">
            <form onSubmit={this.handleSubmit}>
            <fieldset><legend>New Task</legend>
            <label for="field1"><span>Title: </span></label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} />
                <br />
                <br />
                <label for="field2"><span>Priority: </span></label>
                <input type="number" name="priority" min="1" max="10" value={this.state.priority} onChange={this.handleOnChange} />
                <br />
                <br />
                <label for="field3"><span> Goal Date: </span></label>
                <input type="date" name="completeBy" value={this.state.completeBy} onChange={this.handleOnChange} />
                <br />
                <br />
                <label for="field4"><span> Context: </span></label>
                <input type="textarea" name="context" value={this.state.context} onChange={this.handleOnChange} />
                <br />
                <label><span> </span><input type="submit" value="Add Task" /></label>
                </fieldset>
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todoReducer.todos
    }
}


export default connect(mapStateToProps, {addTodo})(TodoForm)