import { WEB } from "../../../var.js";
const scrapAPI = WEB + "/api/scrapbooks";

const createScrapbook = async (
  userId,
  name,
  caption,
  lattitude,
  longitude,
  contentFlag,
  coverPhoto,
  templateId
) => {
  return fetch(`${scrapAPI}/createScrapbook/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      name,
      caption,
      lattitude,
      longitude,
      contentFlag,
      coverPhoto,
      templateId,
    }),
  }).then((response) => response.json());
};

const uploadImages = (imagesArray) => {
  imagesArray.forEach((imageObj) => {
    const { scrapId, image, photoText, textHeading } = imageObj;
    fetch(`${scrapAPI}/uploadImage`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        scrapId,
        image,
        photoText,
        textHeading,
      }),
    }).then((response) => response.json());
  });
  return true;
};

module.exports = { createScrapbook, uploadImages };
