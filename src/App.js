import React, {Component} from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogContainer from './containers/LogContainer';
import LogForm from './Forms/LogForm';
import TodoContainer from './containers/TodoContainer';
import TodoForm from './Forms/TodoForm'
//import Logs from './components/Logs'
import Home from './components/Home'
import Nav from './components/Navigation/nav';
import { getAllTrackers } from './actions/logActions';
import { getAllTasks } from './actions/todoActions'
import { connect } from 'react-redux';

class App extends Component {


  componentDidMount() {
    console.log('props in app', this.props)
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
        <Route exact path="/todos" >
          <TodoContainer/>
        </Route>
        <Route exact path="/todos/new" >
          <TodoForm />
          </Route>


        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
      logs: state.logReducer.logs
  }
}


export default connect(mapStateToProps, {getAllTrackers, getAllTasks})(App)