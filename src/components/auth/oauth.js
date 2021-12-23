const OAuth = ({ processOAuthParams }) => {
    useEffect(() => {
        processOAuthParams()
    }, [processOAuthParams])

    return null
}
