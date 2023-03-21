import { WEB } from "../../../var.js";
// import {uploadImagex} from "../../../firebase/functions/index.js"r

const createPost = async (
  userId,
  caption,
  lattitude,
  longitude,
  flag,
  postImage,
  tag
) => {
  const response = await fetch(WEB + "/api/posts/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      caption: caption,
      lattitude: lattitude,
      longitude: longitude,
      flag: flag,
      postImage: postImage,
      tag: tag,
    }),
  });
  const data = await response.json();
  return data;
};

module.exports = { createPost };
