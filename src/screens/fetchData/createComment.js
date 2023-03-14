const createComment = async (postId, userId, comment) => {
    const response = await fetch("http://localhost:3000/api/comment/post", {
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

module.exports = { createComment };