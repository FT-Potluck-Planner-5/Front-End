import React from 'react'
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
        // checks if the user is authenticated
        props =>
        localStorage.getItem("token") ? (
        // If authenticated, renders the "component" prop.
        <Component {...props} />
      ) : (
        // If not, redirects the user to /login.
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;