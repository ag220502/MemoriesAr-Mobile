import { WEB } from "../../../../var.js";
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

  return fetch(`${scrapAPI}/createScrapbook`, {
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

const uploadImages1 = async (imagesArray) => {
  imagesArray.forEach((imageObj) => {
    const { scrapId, image, photoText, textHeading } = imageObj;
    fetch(`${scrapAPI}/addImage`, {
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

const uploadImages = async (imagesArray) => {
  return fetch(`${scrapAPI}/uploadImage`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      imagesArray,
    }),
  }).then((response) => response.json());
};

module.exports = { createScrapbook, uploadImages };
