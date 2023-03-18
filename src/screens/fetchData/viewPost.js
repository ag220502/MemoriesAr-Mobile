import {WEB} from "../../../var.js"
const viewPostById = async (id) => {
    const response = await fetch(
      WEB+"/api/posts/getPostById/" + id
    );
    const data = await response.json();
    return new Promise((resolve,reject)=>{
        resolve(data)
    })
};

const checkLiked = async (postId, userId) => {
  Promise.all(await fetch(
    WEB+"/api/posts/checkLiked/" + postId + "/" + userId
  )
  .then((response) => response.json())
  .then((res) => 
  {
    return res
  }));
};

const checkDisliked = async (postId, userId) => {
  const response = await fetch(
    WEB+"/api/posts/checkDisliked/" + postId + "/" + userId
  );
  const data = await response.json();
  return data;
};

const checkSaved = async (postId, userId) => {
  const response = await fetch(
    WEB+"/api/posts/checkSaved/" + postId + "/" + userId
  );
  const data = await response.json();
  return new Promise((resolve,reject)=>{
    resolve(data)
})
};

module.exports = { viewPostById, checkLiked, checkDisliked, checkSaved };
