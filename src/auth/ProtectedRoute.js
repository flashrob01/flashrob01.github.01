import React from 'react';

import { Navigate, Route } from 'react-router-dom';

import { withAuthenticationRequired } from '@auth0/auth0-react';

import { Loading } from '../components/index/Loading';

import { useAuth0 } from '@auth0/auth0-react';


function ProtectedRoute({ children }) {
    const auth = useAuth0();
    return auth ? children : <Navigate to="/" />;
}

/* /* const ProtectedRoute = ({ component, ...args}) => (
    <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
); */ 


export default ProtectedRoute;