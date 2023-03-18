const functions = require("firebase-functions");
const { Storage } = require("@google-cloud/storage");
const UUID = require("uuid-v4");
const express = require("express");

const app = express();
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

var admin = require("firebase-admin");

var serviceAccount = require("../admin.json");
const router = express.Router();
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const userRef = admin.firestore().collection("users");

const storage = new Storage({
  keyFilename: "admin.json",
});

// "https://firebasestorage.googleapis.com/v0/b/memoriesar-f08a7.appspot.com/o/";
// const bucket = storage.bucket("gs://memoriesar-f08a7.appspot.com");



const uploadImage = async (profileImage, folderName) => {
  try {
    // create a unique id for the image
    let uuid = UUID();

    // url of the uploaded image
    var downLoadPath =
      "https://firebasestorage.googleapis.com/v0/b/memoriesar-f08a7.appspot.com/o/";

    if (!profileImage) {
      throw new Error("No image found");
    }
    // rename the image
    profileImage.name = uuid + profileImage.name;

    // url of the uploaded image
    let imageUrl;

    // get the bucket
    const bucket = storage.bucket("gs://memoriesar-f08a7.appspot.com");

    // check if image is uploaded
    if (profileImage.size == 0) {
      throw new Error("No image found");
    } else {
      // upload image to bucket
      const imageResponse = await bucket.upload(profileImage.path, {
        destination: `${folderName}/${profileImage.name}`,
        resumable: true,
        metadata: {
          metadata: {
            firebaseStorageDownloadTokens: uuid,
          },
        },
      });

      // get the image url
      imageUrl =
        downLoadPath +
        encodeURIComponent(imageResponse[0].name) +
        "?alt=media&token=" +
        "1";
    }
    return imageUrl;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { uploadImage };
