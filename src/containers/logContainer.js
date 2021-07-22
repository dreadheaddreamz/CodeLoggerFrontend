import React, {Component} from 'react'
import { connect } from 'react-redux'
import Log from '../components/Log'
//import {Link} from 'react-router-dom'

class LogContainer extends Component {
    renderLogs = () => this.props.logs.map((log, id) => <Log key={id} text={log} />)

    render() {
        return (
            <div className="Log-container">
                {this.renderLogs}
                <h1>This is a the container</h1>
                <a href="http://localhost:3000/tracker/new">
                    <button>Add Log</button>
                </a>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        logs: state.logs
    }
}

export default connect(mapStateToProps)(LogContainer)
