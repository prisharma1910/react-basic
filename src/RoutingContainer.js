import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Home} from './home';
import {List} from './list';
import {GoodReads} from './good-reads';

const RoutingContainer = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/list' component={List}/>
      <Route path='/good-reads' component={GoodReads}/>
    </Switch>
)

export default RoutingContainer;
