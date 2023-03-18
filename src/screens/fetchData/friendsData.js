import {WEB} from "../../../var.js"
const getAllFriends = (id) => {
    return fetch('http://localhost:3000/api/usersfriends/friends/'+id,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        
    }).then(response => response.json())
}

module.exports = {getAllFriends}