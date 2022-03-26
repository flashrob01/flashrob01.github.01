/* import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AUTH_CONFIG } from "../components/auth/auth0-variables";

const useAccessToken = () => {

  const [idToken, setIdToken] = useState(null);
  const { user, getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    const getAccessToken = async () => {
      const { audience, scope } = AUTH_CONFIG;

      try {
        const accessToken = await getAccessTokenSilently({
          audience,
          scope,
        });
        setIdToken(accessToken);
      } catch (e) {
        console.log(e.message);
      }
    };

    getAccessToken();
  }, [getAccessTokenSilently, user?.sub]);

  console.log('This is id token', idToken);
  console.log('this is access token', accessToken);

  return idToken;
  
}

export default useAccessToken;
 */