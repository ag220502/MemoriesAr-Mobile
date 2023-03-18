import {WEB} from "../../../var.js"
const getProfileData = async (id) => {
    const response = await fetch(WEB+'/api/users/profile/'+id, {
        method: 'GET',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
    });
    const json = await response.json();
    return json[0]
}

const checkIsFriend = async (id,logged) => {
    const response = await fetch(WEB+'/api/usersfriends/checkIsfriends/'+id+'/'+logged, 
    {
        method: 'GET',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
    });
    const json = await response.json();
    return json
}

const getNumPosts = async (id) => {
    const response = await fetch(WEB+'/api/users/profile/postNum/'+id,
    {
        method: 'GET',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
    });
    const json = await response.json();
    return json[0].Num
}

const getNumFriends = async (id) => {
    const response = await fetch(WEB+'/api/users/profile/friendsNum/'+id,
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
    });
    const json = await response.json();

    return json[0].Num
}

const getUserPosts = async (id) => {
    const response = await fetch(WEB+'/api/posts/getAllPosts/'+id,
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
    });
    const json = await response.json();
    return json
}



module.exports = {getProfileData,getNumPosts,getNumFriends,getUserPosts,checkIsFriend}
