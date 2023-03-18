import {WEB} from "../../../var.js"
const searchUser = async (search) => {
    const response = await fetch(WEB+"/api/search/byName/" + search);
    const data = await response.json();
    return data;
}

const recentSearch = async (search) => {
    const response = await fetch(WEB+"/api/recentSearches/userRecentSearches/" + search);
    const data = await response.json();
    return data;
}

const suggetUser = async (search) => {
    const response = await fetch(WEB+"/api/recentSearches/suggestedUsers/" + search);
    const data = await response.json();
    return data;
}


module.exports = {searchUser,recentSearch,suggetUser}