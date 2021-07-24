import React, {Component} from 'react'
import Todos from '../components/Todos'
import { connect } from 'react-redux'


class TodoContainer extends Component {
    render() {
        return (
            <div className="todo-container">
                <Todos todos = {this.props.todos} />
                <a href="http://localhost:3000/todos/new">
                <button className="button">Add Task</button>
                </a>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todoReducer.todos
    }
}

export default connect(mapStateToProps)(TodoContainer) 