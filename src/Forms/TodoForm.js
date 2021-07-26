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
                <label>Title: </label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} />
                <br />
                <br />
                <label>Priority: </label>
                <input type="text" name="priority" value={this.state.priority} onChange={this.handleOnChange} />
                <br />
                <br />
                <label>Goal Date: </label>
                <input type="text" name="completeBy" value={this.state.completeBy} onChange={this.handleOnChange} />
                <br />
                <br />
                <label>context: </label>
                <input type="text" name="context" value={this.state.context} onChange={this.handleOnChange} />
                <br />
                <input type="submit" value="Add Task" />
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