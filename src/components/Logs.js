import React, { Component } from "react";


class Log extends Component {
 render() {
     return (
         <div className="log-box">
        {this.props.logs.map((log, id) =>
        <div className="box" key={id}>
            <li>
        <h3>{log.date}</h3>
        <h3>{log.language}</h3>
        <h3>{log.length}</h3>
        <h3>{log.notes}</h3>
        </li>
        </div>
        )}
    </div>
     )
    }
}
export default Log