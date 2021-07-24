import React, { Component } from "react";


class Todos extends Component {
 render() {
     return (
        <h1>Todo Section </h1>,
        <div className="todo-box">
            <li>
        {this.props.todos.map((todo, id) =>
        <div className="tbox" key={id}>
        <h3>Title:{todo.title}</h3>
        <h3>Priority:{todo.priority}</h3>
        <h3>Goal Date:{todo.completeBy}</h3>
        <h3>Context:{todo.context}</h3>
        </div>
        )}
        </li>
    </div>
     )
    }
}

export default Todos