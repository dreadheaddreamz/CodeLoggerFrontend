import React, {Component} from 'react'
import Todos from '../components/Todos'
import { connect } from 'react-redux'


class TodoContainer extends Component {
    render() {
        return (
            <div className="Todo-container">
                <Todos />
                <a href="http://localhost:3000/todos/new">
                <button>Add Task</button>
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