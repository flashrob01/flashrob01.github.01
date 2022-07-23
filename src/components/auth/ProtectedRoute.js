
import { Navigate } from 'react-router-dom';

import { withAuthenticationRequired } from '@auth0/auth0-react';




/* function ProtectedRoute({ children }) {
    const auth = useAuth0();
    return auth ? children : <Navigate to="/" />;
} */

/* const ProtectedRoute = ({ component, ...args }) => {
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
  }; */

  const ProtectedRoute = ({ component, ...propsForComponent}) => {
    const Cp = withAuthenticationRequired(component);
    
    return <Cp {...propsForComponent} /> : <Navigate to="/About" />;;
    
  
  }


export default ProtectedRoute;

//