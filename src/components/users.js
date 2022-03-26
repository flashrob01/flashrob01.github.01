//This file is for the purposes of testing use-api
import { useApi } from './use-api';
import { useAuth0 } from '@auth0/auth0-react';


 const Dudu = () => {
  const opts = {
    audience: 'https://dev-7-8i89hb.us.auth0.com/api/v2/',
    scope: 'read:users',
  };
  const { login, getAccessTokenWithPopup } = useAuth0();
  const { loading, error, refresh, data: users } = useApi(
    'https://dev-7-8i89hb.us.auth0.com/api/v2/users',
    opts
  );
  const getTokenAndTryAgain = async () => {
    await getAccessTokenWithPopup(opts);
    refresh();
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    if (error.error === 'login_required') {
      return <button onClick={() => login(opts)}>Login</button>;
    }
    if (error.error === 'consent_required') {
      return (
        <button onClick={getTokenAndTryAgain}>Consent to reading users</button>
      );
    }
    return <div>Oops {error.message}</div>;
  }
  return (
      <div>
    <ul>
      {users.map((user, index) => {
        return <li key={index}>{user}</li>;
      })}
    </ul>
    </div>
  );
};

export default Dudu;