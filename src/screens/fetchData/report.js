import { WEB } from "../../../var.js";

const reportMem = async (userId, postId, reason) => {
  const result = await fetch(WEB + "/api/report/repPost", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      postId: postId,
      reason: reason,
    }),
  });
  const res = await result.json();
  return res;
};

const reportAccount = async (userId, repUsrId, reason) => {
  return await fetch(WEB + "/api/report/repAccount", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      repUsrId: repUsrId,
      reason: reason,
    }),
  }).then((response) => response.json());
};

module.exports = { reportMem, reportAccount };
