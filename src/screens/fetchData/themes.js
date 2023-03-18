import {WEB} from "../../../var.js"

const getAllThemes = async () => {
    const res = await fetch(WEB+'/api/themes/getAllThemes');
    const json = await res.json();
    return json;
}

module.exports = {getAllThemes};
