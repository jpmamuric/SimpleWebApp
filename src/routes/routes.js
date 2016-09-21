import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';
import Welcome from '../components/welcome';
import Menu from '../components/menu';

export default (
  <Route path="/" component={ App } >
    <IndexRoute component={ Welcome } />
    <Route path="/menu" component={ Menu }/>
  </Route>
);
