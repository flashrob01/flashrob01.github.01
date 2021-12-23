const {URLSearchParams} = require('url')
const fetch = require('node-fetch')

const LINKEDIN_ACCESS_TOKEN = `https://www.linkedin.com/oauth/v2/accessToken`
const LINKEDIN_CLIENT_ID = `${process.env.REACT_APP_CLIENT_ID}`
const LINKEDIN_CLIENT_SECRET = `${process.env.REACT_APP_CLIENT_SECRET}`
const LINKEDIN_RIDERECT_URI = `${process.env.REACT_APP_REDIRECT_URI}`
const LINKEDIN_NAME_URL = 'https://api.linkedin.com/v2/me'
const LINKEDIN_EMAIL_URL =
  'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))'

  const fetchJSON = (...args) => fetch(...args).then(r => r.json())

  const getValidatedWithLinkedinUser = async code => {
      const body = new URLSearchParams({
          grant_type: 'authorization_code',
          code,
          redirect_uri: `${window.location.origin}/linkedin`,
          client_id: '86vhj2q7ukf83q',
          client_secret: 'qxXla7X8WC5lxd2h'
      })
      const {access_token } = await fetchJSON(
          LINKEDIN_ACCESS_TOKEN,
          {
              method: 'POST',
              body
          }
      )

      const payload = {
          method: 'GET',
          headers: {Authorization: `Bearer ${access_token}`}
      }

      const {
          localizedFirstName,
          localizedLastName,
          id
      } = await fetchJSON(
          LINKEDIN_NAME_URL,
          payload
      )

      const{elements} = await fetchJSON(LINKEDIN_EMAIL_URL, payload)

      return{
          name: `${localizedFirstName} ${localizedLastName}`,
          email: elements[0]['handle~'].emailAddress,
          id
      }
  }