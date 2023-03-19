import { WEB } from "../../../var";

const blockUser = async (userID, blockId) => {
  return await fetch(WEB + "/api/block/blockUser", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userID,
      blockId: blockId,
    }),
  }).then((response) => response.json());
};

// i'm not sure if having a body for a delete request would work, in a perfect world it shouldn't have a body
const unblockUser = async (userID, unblockId) => {
  return await fetch(WEB + "/api/block/unblockUser", {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userID,
      unblockId: unblockId,
    }),
  }).then((response) => response.json());
};

const allBlockedUsers = async (userID) => {
    const response = await fetch(WEB + "/api/block/allBlockUser/" + userID);
    const data = await response.json();
    return data;
};

module.exports = { blockUser, unblockUser, allBlockedUsers };
