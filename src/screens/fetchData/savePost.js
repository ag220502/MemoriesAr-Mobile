import {WEB} from "../../../var.js"
const getSavedPosts = async (id) => {
  const response = await fetch(
    "http://localhost:3000/api/savedposts/usersSavedPosts/" + id
  );
  const data = await response.json();
  return data;
};

const savePost = async (userId, postId) => {
  const response = await fetch("http://localhost:3000/api/savedposts/save/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      postId,
    }),
  });
  const data = await response.json();
  return data;
};

const unsavePost = async (userId, postId) => {
  const element = document.querySelector("#delete-request-async-await .status");
  await fetch(
    "http://localhost:3000/api/savedposts/unsave/" + userId + "/" + postId + "/",
    { method: "DELETE" }
  );
  return (element.innerHTML = "Delete successful");
};

module.exports = { getSavedPosts, savePost, unsavePost };
