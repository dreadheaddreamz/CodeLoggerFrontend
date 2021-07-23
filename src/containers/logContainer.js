import React, {Component} from 'react'
import Logs from '../components/Logs'
import { connect } from 'react-redux'

class LogContainer extends Component {

    render() {
        return ( 
            <div className="Log-container">
                <Logs date={this.props.date} language={this.props.language} length={this.props.length} notes={this.props.notes}  />
            <a href="http://localhost:3000/trackers/new">
                <button>Add Log</button>
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
