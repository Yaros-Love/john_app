import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const/const';
import BlogPage from '../blog/blog';
import MainPage from '../main/main';
 
const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage/>
        </Route>
        <Route exact path={AppRoute.BLOG}>
          <BlogPage/>
        </Route>
      </Switch>
    </BrowserRouter>
      
  
  );
};

export default App;
