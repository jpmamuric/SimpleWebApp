import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory, Router } from 'react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import routes from './routes/routes';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
