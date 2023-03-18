import {WEB} from "../../../var.js"

const getAllThemes = async () => {
    const res = await fetch('http://localhost:3000/api/themes/getAllThemes');
    const json = await res.json();
    return json;
}

module.exports = {getAllThemes};
