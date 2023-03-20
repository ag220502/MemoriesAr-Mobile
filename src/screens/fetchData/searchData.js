import { WEB } from "../../../var.js";
const searchUser = async (search) => {
  const response = await fetch(WEB + "/api/search/byName/" + search);
  const data = await response.json();
  return data;
};

const recentSearch = async (search) => {
  const response = await fetch(
    WEB + "/api/recentSearches/userRecentSearches/" + search
  );
  const data = await response.json();
  return data;
};

const suggetUser = async (search) => {
  const response = await fetch(
    WEB + "/api/recentSearches/suggestedUsers/" + search
  );
  const data = await response.json();
  return data;
};


const deleteSearch = async (userId, searchedUserId) => {
  const response = await fetch(WEB + "/api/recentSearches/deleteSearch/", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      searchedUserId,
    }),
  });
  const data = await response.json();
  return data;
};

const createRecentSearch = async (userId, searchedUserId, statusTime) => {
  const response = await fetch(WEB + "/api/recentSearches/createSearch", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      searchedUserId: searchedUserId,
      statusTime: statusTime,
    }),
  });
  const data = await response.json();
  return data;
};

module.exports = { searchUser, recentSearch, suggetUser, createRecentSearch, deleteSearch };

