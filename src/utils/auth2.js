const getURLWithQueryParams = (base, params) => {
    const query = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&')
    
    return `${base}?${query}`
}

export const getRedirectUri = provider =>
`${window.location.origin}${PATH.OAUTH}?provider=${provider.toLowerCase()}`

export const getProvidersUrls = () => ({
    [PROVIDER.LINKEDIN]: getURLWithQueryParams(LINKEDIN_AUTH_URL, {
        response_type: 'code',
        client_id: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
    redirect_uri: getRedirectUri(PROVIDER.LINKEDIN),
    scope: LINKEDIN_SCOPE
    })
})