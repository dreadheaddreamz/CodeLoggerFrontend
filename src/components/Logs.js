import React, { Component } from "react";
import {connect} from 'react-redux'
import {deleteLog} from '../actions/logActions'


class Log extends Component {
    handleOnClick = (id) => {
        console.log("props from delete function", this.props.logs.id)
        this.props.deleteLog(id)
    }

 render() { 
     return (
         <div className="log-box">
        {this.props.logs.map((log, id) =>
        <div className="box" key={id}>
            {console.log("props in logs", this.props.logs)}
            <li>
        <h3>Date:{log.date}</h3>
        <h3>Language:{log.language}</h3>
        <h3>Time:{log.length}</h3>
        <h3>Notes: {log.notes}</h3>
        <button onClick={() => this.handleOnClick(log.id)} className="delete"> <i className="fa fa-trash"> </i> Delete Log</button>
        </li>
        </div>
        )}
    </div>
     )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteLog: (log) => dispatch(deleteLog(log))
    }
}
export default connect(null,  mapDispatchToProps)(Log)