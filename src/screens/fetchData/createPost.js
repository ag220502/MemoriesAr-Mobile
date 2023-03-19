import {WEB} from "../../../var.js"
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
  console.log("Creating Post")
  console.log("Image in func is "+postImage)
  const response = await fetch(WEB+"/api/posts/create", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        userId: userId,
        caption: caption,
        lattitude: lattitude,
        longitude: longitude,
        flag: flag,
        postImage: postImage,
        tag: tag
    })
  });
  
  console.log("Response is ")
  console.log(response)
  // const data = await response.json();
  // console.log(data)
  // return data;

};

module.exports = { createPost };
