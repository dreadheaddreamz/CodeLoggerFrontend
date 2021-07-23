import React, {Component} from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogContainer from './containers/LogContainer';
import LogForm from './Forms/LogForm';
import Home from './components/Home'
import Nav from './components/Navigation/nav';
import { getAllTrackers } from './actions/logActions';
import { getAllTasks } from './actions/todoActions'
import { connect } from 'react-redux';

class App extends Component {


  componentDidMount() {
    this.props.getAllTrackers()
    this.props.getAllTasks()
  }


  render() {
    return (
      <Router>
        <Nav />
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/trackers" >
          <LogContainer />
        </Route>
        <Route exact path="/trackers/new" >
          <LogForm />
        </Route>

        </Switch>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTrackers: () => dispatch(getAllTrackers()),
    getAllTasks: () => dispatch(getAllTasks())
  }
}


export default connect(null, mapDispatchToProps)(App)