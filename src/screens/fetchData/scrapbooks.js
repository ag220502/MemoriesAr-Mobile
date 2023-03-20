import {WEB} from "../../../var.js"

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

module.exports = { createTemplate };