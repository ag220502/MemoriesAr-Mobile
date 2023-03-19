import { WEB } from "../../../var.js";

const getAllThemes = async () => {
  const res = await fetch(WEB + "/api/themes/getAllThemes");
  const json = await res.json();
  return json;
};

const selectUserTheme = async (userId, themeId) => {
  const res = await fetch(WEB + "/api/themes/selectUserTheme", {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      themeId: themeId,
    }),
  });
  const json = await res.json();
  return json;
};

module.exports = { getAllThemes, selectUserTheme };
