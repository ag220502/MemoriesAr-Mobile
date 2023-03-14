const getSavedPosts = async (id) => {
    const response = await fetch(
      "http://localhost:3000/api/savedposts/usersSavedPosts/" + id
    );
    const data = await response.json();
    return data;
  };

module.exports = { getSavedPosts };