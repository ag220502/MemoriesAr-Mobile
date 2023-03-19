import { WEB } from "../../../var.js";

const reportMem = async (postID, userID, reason) => {
  const result = await fetch(WEB + "/api/report/repPost", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      postId: postID,
      userId: userID,
      reason: reason,
    }),
  })
  const res = await result.json()
  console.log(res)
  return res
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

module.exports = { reportMem, reportAccount };