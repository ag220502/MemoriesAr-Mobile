import {checkLiked, checkDisliked, checkSaved} from './viewPost.js';
import { useState } from 'react';


const getHomeFeed = async (id) => {
    // const [liked, setLiked] = useState(false);
    const array = [];
    const response = await fetch('http://localhost:3000/api/homePage/usersFeed/'+id,
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
    });
    const json = await response.json();

    json.map(async (item) => {
        const res = await checkLiked(item.postId, id).then((data) => {
            var obj = {};
            Object.assign(obj, item)
            obj.liked = data;
            array.push(obj);
        });
    });
    if(!array.length)
    {
        return array;
    }
    
}

module.exports = {getHomeFeed}