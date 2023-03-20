import {WEB} from "../../../var.js"
const getSavedPosts = async (id) => {
  const response = await fetch(
    WEB+"/api/savedposts/usersSavedPosts/" + id
  );
  const data = await response.json();
  return data;
};

const savePost = async (userId, postId) => {
  const response = await fetch(WEB+"/api/savedposts/save/", {
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
  const response = await fetch(WEB+"/api/savedposts/unsave/", {
    method: "DELETE",
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

module.exports = { getSavedPosts, savePost, unsavePost };
