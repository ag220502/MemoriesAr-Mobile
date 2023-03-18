import {WEB} from "../../../var.js"
const createPost = async (

  userId,
  caption,
  lattitude,
  longitude,
  flag,
  postImage,
  tag
) => {
  console.log("Creating Post")
  const formData = new FormData();
  formData.append("userId", userId);
  formData.append("caption", caption);
  formData.append("lattitude", lattitude);
  formData.append("longitude", longitude);
  formData.append("flag", flag);
  formData.append("postImage", postImage);
  formData.append("tag", tag);
  const response = await fetch(WEB+"/api/posts/createPost", {
    method: "POST",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formData,
  });
  console.log("Response is ")
  console.log(response)
  const data = await response.json();
  console.log(data)
  return data;

};

module.exports = { createPost };
