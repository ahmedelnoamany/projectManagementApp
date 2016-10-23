import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './home';
import About from './about';
import Boards from './Boards';
import Login from './Authentication/login';
import Registration from './Authentication/signup';

const Routes = () =>(
  <Route path="/">
    <IndexRoute component = {Home} />
    <Route path="/about" component= {About} />s
    <Route path="/boards" component= {Boards} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Registration} />
  </Route>
);

Routes.displayName = 'Routes';

export default Routes;
