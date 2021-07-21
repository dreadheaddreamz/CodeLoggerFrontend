import React, {Component} from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogContainer from './containers/LogContainer';
import LogForm from './Forms/LogForm';
import Home from './components/Home'
import Nav from './components/Navigation/nav';

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/tracker" >
          <LogContainer />
        </Route>
        <Route exact path="/tracker/new" >
          <LogForm />
        </Route>

        </Switch>
      </Router>
    )
  }
}


export default App