import React, {Component} from 'react'
import Logs from '../components/Logs'
import { connect } from 'react-redux'

class LogContainer extends Component {

    render() {
        return ( 
            <div className="Log-container">
                <Logs date={this.props.date} language={this.props.language} length={this.props.length} notes={this.props.notes}  />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        date: state.logReducer.date,
        language: state.logReducer.language,
        length: state.logReducer.length,
        notes: state.logReducer.notes
    }
}

export default connect(mapStateToProps)(LogContainer)
