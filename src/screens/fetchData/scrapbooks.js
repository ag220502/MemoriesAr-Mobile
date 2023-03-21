
import {WEB} from "../../../var.js"
const scrapAPI = WEB + "/api/scrapbooks";
const scrapUtils = WEB + "/api/scrapUtils";

// templates 
// const createTemplate = async(templateName, templateDescription, categoryId) => {
//     const response = await fetch(WEB+"/api/scrapbooks/createTemplate/", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             templateName : templateName,
//             templateDescription : templateDescription,
//             categoryId : categoryId
//         }),
//     });
//     const data = await response.json();
//     return data;
// }

const getTemplateById = async(templateId) => {
    const response = await fetch(WEB+"/api/scrapbooks/getTemplateById/"+templateId, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}

const getAllTemplates = async() => {
    const response = await fetch(WEB+"/api/scrapbooks/getAllTemplates/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}

// const updateTemplate = async(templateId, templateName, templateDescription, categoryId) => {
//     const response = await fetch(WEB+"/api/scrapbooks/updateTemplate/"+templateId, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             templateName : templateName,
//             templateDescription : templateDescription,
//             categoryId : categoryId
//         }),
//     });
//     const data = await response.json();
//     return data;
// }

// const deleteTemplate = async (templateId) => {
//     const response = await fetch(WEB+"/api/scrapbooks/deleteTemplate/" + templateId, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
//     const data = await response.json();
//     return data;
// }

// categories

// const createCategory = async(categoryName) => {
//     const response = await fetch(WEB+"/api/scrapbooks/createCategory/", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             categoryName : categoryName
//         }),
//     });
//     const data = await response.json();
//     return data;
// }

const getCategory = async(categoryId) => {
    const response = await fetch(WEB+"/api/scrapbooks/getCategory/"+categoryId, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}

const getAllCategories = async() => {
    const response = await fetch(WEB+"/api/scrapbooks/getAllCategories/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}

// const updateCategory = async(categoryId, categoryName) => {
//     const response = await fetch(WEB+"/api/scrapbooks/updateCategory/"+categoryId, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             categoryName : categoryName
//         }),
//     });
//     const data = await response.json();
//     return data;
// }

// const deleteCategory = async(categoryId) => {
//     const response = await fetch(WEB+"/api/scrapbooks/deleteCategory/"+categoryId, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
//     const data = await response.json();
//     return data;
// }

// scrapbooks
const createScrapbook = async (
  userId,
  name,
  caption,
  lattitude,
  longitude,
  uploadTime,
  contentFlag,
  coverPhoto,
  templateId
) => {
  const response = await fetch(`${scrapAPI}/createScrapbook/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      name: name,
      caption: caption,
      lattitude: lattitude,
      longitude: longitude,
      uploadTime: uploadTime,
      contentFlag: contentFlag,
      coverPhoto: coverPhoto,
      templateId: templateId,
    }),
  });
  const data = await response.json();
  return data;
};

// updateScrapbook
const updateScrapbook = async (
  scrapId,
  name,
  caption,
  lattitude,
  longitude,
  editTime,
  contentFlag,
  coverPhoto
) => {
  const response = await fetch(`${scrapAPI}/updateScrapbook/${scrapId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      caption: caption,
      lattitude: lattitude,
      longitude: longitude,
      editTime: editTime,
      contentFlag: contentFlag,
      coverPhoto: coverPhoto,
    }),
  });
  const data = await response.json();
  return data;
};

const getScrapbook = async (scrapId) => {
  const response = await fetch(`${scrapAPI}/getScrapbookById/${scrapId}`);
  const data = await response.json();
  return data;
};

const getAllUserScrapbooks = async (userId) => {
  const response = await fetch(`${scrapAPI}/getAllScrapbooks/${userId}`);
  const data = await response.json();
  return data;
};

const deleteScrapbook = async (scrapId) => {
  const element = await fetch(`${scrapAPI}/deleteScrapbook/${scrapId}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
    },
    });
    return element;
};

const deleteAllUserScrapbooks = async (userId) => {
  const element = await fetch (`${scrapAPI}/deleteAllUserScrapbooks/${userId}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
    },
    });
    return element;
};


// scrapUtils
// dislikes

const addDislike = async (scrapId, userId, time) => {
  const response = await fetch(`${scrapUtils}/addDislike`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      scrapId: scrapId,
      userId: userId,
      time: time,
    }),
  });
  const data = await response.json();
  return data;
};

const getAllScrapDislikes = async (scrapId) => {
  const response = await fetch(`${scrapUtils}/getScrapDislikes/${scrapId}`);
  const data = await response.json();
  return data;
};

const getAllUserDislikes = async (userId) => {
  const response = await fetch(`${scrapUtils}/getUserDislikes/${userId}`);
  const data = await response.json();
  return data;
};

const unDislike = async (scrapId, userId) => {
  const element = document.querySelector("#delete-request-async-await .status");
  await fetch(`${scrapUtils}/unDislike`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      scrapId: scrapId,
      userId: userId,
    }),
  });
  return (element.innerHTML = "Delete successful");
};

// saved scrapbooks

const saveScrapbook = async (userId, scrapId) => {
  const response = await fetch(`${scrapUtils}/saveScrapbook`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      scrapId: scrapId,
    }),
  });
  const data = await response.json();
  return data;
};

const getSavedScrapbooks = async (userId) => {
  const response = await fetch(`${scrapUtils}/getSavedScrapbooks/${userId}`);
  const data = await response.json();
  return data;
};

const deleteSavedScrapbook = async (userId, scrapId) => {
  const element = document.querySelector("#delete-request-async-await .status");
  await fetch(`${scrapUtils}/deleteSavedScrapbook`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      scrapId: scrapId,
    }),
  });
  return (element.innerHTML = "Delete successful");
};

const checkSavedScrapbook = async (userId, scrapId) => {
  const response = await fetch(
    `${scrapUtils}/checkSavedScrapbook/${userId}/${scrapId}`
  );
  const data = await response.json();
  return data;
};

//report scrapbooks

const reportScrapbook = async (userId, scrapId, reason) => {
  const response = await fetch(`${scrapUtils}/reportScrapbook`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      scrapId: scrapId,
      reason: reason,
    }),
  });
};

module.exports = {
  getTemplateById, 
  getAllTemplates, 
  getCategory, 
  getAllCategories, 
  createScrapbook,
  updateScrapbook,
  getScrapbook,
  getAllUserScrapbooks,
  deleteScrapbook,
  deleteAllUserScrapbooks,
  addDislike,
  getAllScrapDislikes,
  getAllUserDislikes,
  unDislike,
  saveScrapbook,
  getSavedScrapbooks,
  deleteSavedScrapbook,
  checkSavedScrapbook,
  reportScrapbook,
};

