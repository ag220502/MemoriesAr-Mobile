const likePost = async (userId, postId) => {
  const response = await fetch("http://localhost:3000/api/likes/like/", {
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
  const element = document.querySelector("#delete-request-async-await .status");
  await fetch(
    "http://localhost:3000/api/likes/unlike/" + userId + "/" + postId + "/",
    { method: "DELETE" }
  );
  return (element.innerHTML = "Delete successful");
};

module.exports = { likePost, unlikePost };
