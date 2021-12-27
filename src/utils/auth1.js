const{URLSearchParams} = require('url')
const jwt = require('jsonwebtoken')
const fetch = require('node-fetch')
const { getRedirectUri } = require('../../src/utils/auth2')

const LINKEDIN_TOKEN: `https://www.linkedin.com/oauth/v2/accessToken`
const LINKEDIN_NAME: 'https://api.linkedin.com/v2/me'
const LINKEDIN_EMAIL: 'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))'

const fetchJSON = (...args) => fetch(...args).then(r => r.json())

module.exports = {
    getValidatedWithLinkedinUser: async (code, getRedirectUri) => {
        const body = new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            redirect_uri: redirectUri,
            client_id: process.env.LINKEDIN_CLIENT_ID,
            client_secret: process.env.LINKEDIN_CLIENT_SECRET
        })
        const {access_token } = await fetchJSON(LINKEDIN_TOKEN, {
            method: 'POST',
            body
        })
        const payload = {
            method: 'GET',
            headers: {Authorization: `Bearer ${access_token}`}
        }
        const {localizedFirstName, localizedLastName} = await fetchJSON(
            LINKEDIN_NAME,
            payload
        )
        const userData = {
            name: `${localizedFirstName} ${localizedLastName}`
        }
        const response = await fetchJSON(LINKEDIN_EMAIL, payload)
        if(response.elements){
            userData.email = response.elements[0]['handle~'].emailAddress
        }

        return userData
    }
}