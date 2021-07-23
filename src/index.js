import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logReducer from './reducers/logReducers';
import todoReducer from './reducers/todoReducer';
import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({logReducer, todoReducer})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
