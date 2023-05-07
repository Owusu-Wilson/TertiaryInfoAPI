const handler = async (req, res) => {
    // fetch options



    // fetch url
    const url = "http://localhost:8080/universities"



    // fetch request
    try {
        const response = await fetch(url, options)
        const data = await response.json()
        return res.end((data))
    } catch (error) {
        return res.end(error)
    }




}

export default handler