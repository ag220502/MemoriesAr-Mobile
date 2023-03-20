const { WEB } = require("../../../var");
const scrapAPI = WEB + "/api/scrapbooks";
const scrapUtils = WEB + "/api/scrapUtils";
// scrapbooks
const createScrapbook = async (
  userId,
  name,
  caption,
  lattitude,
  longitude,
  uploadTime,
  contentFlag,
  coverPhoto,
  templateId
) => {
  const response = await fetch(`${scrapAPI}/createScrapbook/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      name: name,
      caption: caption,
      lattitude: lattitude,
      longitude: longitude,
      uploadTime: uploadTime,
      contentFlag: contentFlag,
      coverPhoto: coverPhoto,
      templateId: templateId,
    }),
  });
  const data = await response.json();
  return data;
};

// updateScrapbook
const updateScrapbook = async (
  scrapId,
  name,
  caption,
  lattitude,
  longitude,
  editTime,
  contentFlag,
  coverPhoto
) => {
  const response = await fetch(`${scrapAPI}/updateScrapbook/${scrapId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      caption: caption,
      lattitude: lattitude,
      longitude: longitude,
      editTime: editTime,
      contentFlag: contentFlag,
      coverPhoto: coverPhoto,
    }),
  });
  const data = await response.json();
  return data;
};

const getScrapbook = async (scrapId) => {
  const response = await fetch(`${scrapAPI}/getScrapbookById/${scrapId}`);
  const data = await response.json();
  return data;
};

const getAllUserScrapbooks = async (userId) => {
  const response = await fetch(`${scrapAPI}/getAllScrapbooks/${userId}`);
  const data = await response.json();
  return data;
};

const deleteScrapbook = async (scrapId) => {
  const element = document.querySelector("#delete-request-async-await .status");
  await fetch(`${scrapAPI}/deleteScrapbook/${scrapId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return (element.innerHTML = "Delete successful");
};

const deleteAllUserScrapbooks = async (userId) => {
  const element = document.querySelector("#delete-request-async-await .status");
  await fetch(`${scrapAPI}/deleteAllScrapbooks/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return (element.innerHTML = "Delete successful");
};

// scrapUtils
const addDislike = async (scrapId, userId, time) => {
  const response = await fetch(`${scrapUtils}/addDislike`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      scrapId: scrapId,
      userId: userId,
      time: time,
    }),
  });
  const data = await response.json();
  return data;
};

const getAllScrapDislikes = async (scrapId) => {
  const response = await fetch(`${scrapUtils}/getScrapDislikes/${scrapId}`);
  const data = await response.json();
  return data;
};

const getAllUserDislikes = async (userId) => {
  const response = await fetch(`${scrapUtils}/getUserDislikes/${userId}`);
  const data = await response.json();
  return data;
};

const unDislike = async (scrapId, userId) => {
  const element = document.querySelector("#delete-request-async-await .status");
  await fetch(`${scrapUtils}/unDislike`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      scrapId: scrapId,
      userId: userId,
    }),
  });
  return (element.innerHTML = "Delete successful");
};

const saveScrapbook = async (userId, scrapId) => {
  const response = await fetch(`${scrapUtils}/saveScrapbook`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      scrapId: scrapId,
    }),
  });
  const data = await response.json();
  return data;
};

const getSavedScrapbooks = async (userId) => {
  const response = await fetch(`${scrapUtils}/getSavedScrapbooks/${userId}`);
  const data = await response.json();
  return data;
};

const deleteSavedScrapbook = async (userId, scrapId) => {
  const element = document.querySelector("#delete-request-async-await .status");
  await fetch(`${scrapUtils}/deleteSavedScrapbook`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      scrapId: scrapId,
    }),
  });
  return (element.innerHTML = "Delete successful");
};

const checkSavedScrapbook = async (userId, scrapId) => {
  const response = await fetch(
    `${scrapUtils}/checkSavedScrapbook/${userId}/${scrapId}`
  );
  const data = await response.json();
  return data;
};

const reportScrapbook = async (userId, scrapId, reason) => {
  const response = await fetch(`${scrapUtils}/reportScrapbook`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      scrapId: scrapId,
      reason: reason,
    }),
  });
};

module.exports = {
  createScrapbook,
  updateScrapbook,
  getScrapbook,
  getAllUserScrapbooks,
  deleteScrapbook,
  deleteAllUserScrapbooks,
  addDislike,
  getAllScrapDislikes,
  getAllUserDislikes,
  unDislike,
  saveScrapbook,
  getSavedScrapbooks,
  deleteSavedScrapbook,
  checkSavedScrapbook,
  reportScrapbook,
};
