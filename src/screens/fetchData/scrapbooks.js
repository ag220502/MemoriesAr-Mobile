import {WEB} from "../../../var.js"

// templates 

const createTemplate = async(templateName, templateDescription, categoryId) => {
    const response = await fetch(WEB+"/api/scrapbooks/createTemplate/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            templateName : templateName,
            templateDescription : templateDescription,
            categoryId : categoryId
        }),
    });
    const data = await response.json();
    return data;
}

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

const updateTemplate = async(templateId, templateName, templateDescription, categoryId) => {
    const response = await fetch(WEB+"/api/scrapbooks/updateTemplate/"+templateId, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            templateName : templateName,
            templateDescription : templateDescription,
            categoryId : categoryId
        }),
    });
    const data = await response.json();
    return data;
}

const deleteTemplate = async (templateId) => {
    const response = await fetch(WEB+"/api/scrapbooks/deleteTemplate/" + templateId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}

// categories

const createCategory = async(categoryName) => {
    const response = await fetch(WEB+"/api/scrapbooks/createCategory/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            categoryName : categoryName
        }),
    });
    const data = await response.json();
    return data;
}

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

const updateCategory = async(categoryId, categoryName) => {
    const response = await fetch(WEB+"/api/scrapbooks/updateCategory/"+categoryId, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            categoryName : categoryName
        }),
    });
    const data = await response.json();
    return data;
}

const deleteCategory = async(categoryId) => {
    const response = await fetch(WEB+"/api/scrapbooks/deleteCategory/"+categoryId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}

module.exports = { createTemplate, getTemplateById , getAllTemplates, updateTemplate, deleteTemplate,
                     createCategory, getCategory, getAllCategories, updateCategory, deleteCategory};