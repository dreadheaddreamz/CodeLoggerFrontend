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
import { getAllTrackers } from './actions/logActions';//action creators
import { getAllTasks } from './actions/todoActions'
import { connect } from 'react-redux';
import Contact from './components/Contact';

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
        <Route exact path="/trackers/new" render ={(routeprops) => (<LogForm {...routeprops} />) }/>
        <Route exact path="/todos" >
          <TodoContainer/>
        </Route>
        <Route exact path="/todos/new" render ={(routeprops) => (<TodoForm {...routeprops} />) }/>
        <Route exact path="/contactus" component={Contact} />
        </Switch>
      </Router>

      //routeprops - gives access to match, location, and history. Used to render the /trackers and /todos components after a submit is made
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
      logs: state.logReducer.logs,
      todos: state.todoReducer.todos
  }
}


const mapDispatchToProps = (dispatch) => { //loading all task and todos
  return {
      getAllTrackers: () => dispatch(getAllTrackers()),
      getAllTasks: () => dispatch(getAllTasks())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)