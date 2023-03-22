import {WEB} from "../../../var.js"

// scrapbooks comments related

const addComment = async (scrapId, userId, comment) =>{
    const response = await fetch(WEB+"/api/scrapUtils/addComment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId : userId,
            comment : comment,
            scrapId : scrapId
        }),
    });
    const data = await response.json();
    return data;
}

const deleteComment = async (commentId, userId, scrapId) =>{
    const response = await fetch(WEB+"/api/scrapUtils/deleteComment", {
        method : "DELETE",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            commentId : commentId,
            userId : userId,
            scrapId : scrapId
        }),
    });
    const data = await response.json();
    return data;
}

const getComments = async (scrapId) =>{
    const response = await fetch(WEB+"/api/scrapUtils/getComments/"+scrapId, {
        method : "GET",
        headers: {
            "Content-Type" : "application/json",
        }
    });
    const data = await response.json();
    return data;
}

// scrapbook Likes related

const addLike = async (scrapId, userId) =>{
    const response = await fetch(WEB+"/api/scrapUtils/addLike", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId : userId,
            scrapId : scrapId
        }),
    });
    const data = await response.json();
    return data;
}

const getScrapLikes = async (scrapId) =>{
    const response = await fetch(WEB+"/api/scrapUtils/getScrapLikes", {
        method : "GET",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            scrapId : scrapId
        }),
    });
    const data = await response.json();
    
    return data;
}

const getUserLikes = async (userId) =>{
    const response = await fetch(WEB+"/api/scrapUtils/getUserLikes", {
        method : "GET",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            userId : userId
        }),
    });
    const data = await response.json();
    return data;
}

const unLike = async (scrapId, userId) =>{
    const response = await fetch(WEB+"/api/scrapUtils/unLike", {
        method : "DELETE",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            userId : userId,
            scrapId : scrapId
        }),
    });
    const data = await response.json();
    return data;
}

const checkLike = async (scrapId, userId) =>{
    const response = await fetch(WEB+"/api/scrapUtils/checkLike/"+scrapId+"/"+userId, {
        method : "GET",
        headers: {
            "Content-Type" : "application/json",
        }
    });
    const data = await response.json();
    return data;
}

module.exports = { addComment, deleteComment, getComments,
                   addLike, getScrapLikes, getUserLikes, unLike, checkLike } 