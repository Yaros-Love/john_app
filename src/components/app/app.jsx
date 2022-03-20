import React from 'react';
import {Switch, Route, HashRouter as BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const/const';
import ArticlesPage from '../article/article';
import BlogPage from '../blog/blog';
import MainPage from '../main/main';
import WorksPage from '../works/works';
 
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
        <Route exact path={AppRoute.ARTICLES}>
          <ArticlesPage/>  
        </Route>
        <Route exact path={AppRoute.WORKS}>
          <WorksPage/>  
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
