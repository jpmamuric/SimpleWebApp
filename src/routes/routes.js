import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';
import Welcome from '../components/layouts/welcome';
import Menu from '../components/layouts/menu';
import Detail from '../components/details';

export default (
  <Route path="/" component={ App } >
    <IndexRoute component={ Welcome } />
    <Route path="/menu" component={ Menu }/>
    <Route path="/menu/:id" component={ Detail }/>
  </Route>
);
