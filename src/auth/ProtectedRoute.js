import React from 'react';

import { Navigate, Route } from 'react-router-dom';

import { withAuthenticationRequired } from '@auth0/auth0-react';

import  Loading from '../components/Loading';

import  useAuth0  from '@auth0/auth0-react';




  function ProtectedRoute({ children }) {
    const auth = useAuth();
    return auth ? children : <Navigate to="/" />;
} 

function useAuth() {
  return true;
}
 
/* const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () =><Loading />
    })}
    {...args}
  />
); 
 */
export default ProtectedRoute;

//