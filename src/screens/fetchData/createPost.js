const createPost = async (
  userId,
  caption,
  lattitude,
  longitude,
  flag,
  postImage
) => {
  const formData = new FormData();
  formData.append("userId", userId);
  formData.append("caption", caption);
  formData.append("lattitude", lattitude);
  formData.append("longitude", longitude);
  formData.append("flag", flag);
  formData.append("postImage", postImage);
  const response = await fetch("http://localhost:3000/api/posts/createPost", {
    method: "POST",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formData,
  });
  const data = await response.json();
  return data;
};

module.exports = { createPost };