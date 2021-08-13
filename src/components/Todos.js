import React, { Component } from "react";
import {connect} from 'react-redux'
import {deleteTodo} from '../actions/todoActions'


class Todos extends Component {
    handleOnClick = (id) => {
        console.log("props from todo function", this.props.todos.id)
        this.props.deleteTodo(id)
    }


 render() {
     return (
        <h1>Todo Section </h1>,
        <div className="todo-box">
            <li>
        {this.props.todos.map((todo, id) =>
        <div className="tbox" key={id}>
        {console.log("props in todos", this.props.todos)}
        <h3>Title:{todo.title}</h3>
        <h3>Priority:{todo.priority}</h3>
        <h3>Goal Date:{todo.completeBy}</h3>
        <h3>Context:{todo.context}</h3>
        <button onClick={() => this.handleOnClick(todo.id)} className="delete"> <i className="fa fa-trash"> </i> Delete Task</button>
        </div>
        )}
        </li>
    </div>
     )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (todo) => dispatch(deleteTodo(todo))
    }
}

export default connect (null, mapDispatchToProps)(Todos)