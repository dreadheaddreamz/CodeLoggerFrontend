import React, {Component} from 'react'
import Logs from '../components/Logs'
import { connect } from 'react-redux'

class LogContainer extends Component {

    render() {
        return ( 
            <div className= "log-box">
                <Logs logs = {this.props.logs}  />
                <a href="http://localhost:3000/trackers/new">
            <button className="button">Add Log</button>
            </a>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        logs: state.logReducer.logs
    }
}

export default connect(mapStateToProps)(LogContainer)
