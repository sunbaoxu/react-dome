import React from 'react';
import {
  withRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.scss';
import AsyncLoader from './AsyncLoader'; 


class App extends React.Component {
 
  render() {
    return (
      <div className="App">
        <Switch >
          {/* 首页 */}
          <Route
              exact
              path="/"
              component={
                AsyncLoader( () => import('@/views/home'),'home')
              }
          />
          {/* react */}
          <Route
              exact
              path="/react"
              component={
                AsyncLoader( () => import('@/views/react/index'),'react')
              }
          />
          {/* 登录 */}
          <Route
              exact
              path="/login"
              component={
                AsyncLoader( () => import('@/views/login'),'login')
              }
          />
          {/* 404页面 */}
          <Route
              exact
              path="/404"
              component={
                AsyncLoader( () => import('@/views/404'),'404')
              }
          />
          {/* 错误路由 404  */}
          
          <Redirect  to={{pathname: '/404'}} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
