import {WEB} from "../../../var.js"
const likePost = async (userId, postId) => {
  const response = await fetch(WEB+"/api/likes/like/", {
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

const unlikePost = async (userId, postId) => {
  const response = await fetch(WEB+"/api/likes/unlike/", {
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

module.exports = { likePost, unlikePost };
