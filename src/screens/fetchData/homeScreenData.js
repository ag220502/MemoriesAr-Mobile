const getHomeFeed = async (id) => {
    const response = await fetch('http://localhost:3000/api/homePage/usersFeed/'+id,
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
    });
    const json = await response.json();
    return json;
}

module.exports = {getHomeFeed}