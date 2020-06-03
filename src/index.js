import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import reduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import rootReducer from './redux/reducers/rootReducer';
import {BrowserRouter} from 'react-router-dom'


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)))


const app = <BrowserRouter><Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Provider></BrowserRouter>


ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
