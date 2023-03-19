import { WEB } from "../../../var.js";

const reportPost = async (postID, userID, reason) => {
  return await fetch(WEB + "/api/report/repPost", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      postID: postID,
      userID: userID,
      reason: reason,
    }),
  }).then((response) => response.json());
};

const reportAccount = async (userID, reason) => {
  return await fetch(WEB + "/api/report/repAccount", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userID: userID,
      reason: reason,
    }),
  }).then((response) => response.json());
};

module.exports = { reportPost, reportAccount };