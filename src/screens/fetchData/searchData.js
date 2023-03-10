const searchUser = async (search) => {
    const response = await fetch("http://localhost:3000/api/search/byName/" + search);
    const data = await response.json();
    return data;
}

const recentSearch = async (search) => {
    const response = await fetch("http://localhost:3000/api/recentSearches/userRecentSearches/" + search);
    const data = await response.json();
    return data;
}

module.exports = {searchUser,recentSearch}