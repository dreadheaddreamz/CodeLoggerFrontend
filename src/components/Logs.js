import React, { Component } from "react";


class Log extends Component {
 render() {
     return (
         <div className="log-box">
        {this.props.logs.map((log, id) =>
        <div className="box" key={id}>
            <li>
        <h3>Date:{log.date}</h3>
        <h3>Language:{log.language}</h3>
        <h3>Time:{log.length}</h3>
        <h3>Notes: {log.notes}</h3>
        </li>
        </div>
        )}
    </div>
     )
    }
}
export default Log