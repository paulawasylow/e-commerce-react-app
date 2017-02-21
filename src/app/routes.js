import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomeContainer from './containers/HomeContainer';
import CategoryContainer from './containers/CategoryContainer';
import NotExist from './components/NotExist';

export default (
  <Route path="/" component={App}>
   <IndexRoute component={HomeContainer} />
   <Route path="/:category" component={CategoryContainer} />
   <Route path="*" component={NotExist} />
  </Route>
 )
