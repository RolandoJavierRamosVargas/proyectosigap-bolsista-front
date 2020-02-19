import React from 'react'
import {BrowserRouter as Router,Route,Redirect,withRouter} from 'react-router-dom'
import fakeAuth from './FakeAuth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login'
          }} />

          )} />
  )

export default PrivateRoute;


