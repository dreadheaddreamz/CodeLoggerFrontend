import React, { Component } from "react";


class Log extends Component {
 render() {
     return (
         <div>
             {this.props.logs.map((log, id) =>
             <div key={id}>
             <h1>{log.date}</h1>
             <h2>{log.language}</h2>
             <h2> {log.length}</h2>
             <h2>{log.notes}</h2>
             </div>
             )}
         </div>
     )
    }
}
export default Log