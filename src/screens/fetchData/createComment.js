import {WEB} from "../../../var.js"
const createComment = async (postId, userId, comment) => {
    
    const response = await fetch(WEB+"/api/comment/post", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            postId,
            userId,
            comment
        })
    });
    const data = await response.json();
    return data;
};

const getAllComments = async (postId) => {
    const response = await fetch(`${WEB}/api/comment/allComments/${postId}}`);
    const data = await response.json();
    return data;
};


module.exports = { createComment,getAllComments };