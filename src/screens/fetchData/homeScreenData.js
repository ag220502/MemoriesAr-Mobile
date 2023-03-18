import {checkLiked, checkDisliked, checkSaved} from './viewPost.js';
import {WEB} from "../../../var.js"

const getHomeFeed = async (id) => {
    // const [liked, setLiked] = useState(false);
    const array = [];
    const response = await fetch('https://memoriesar.onrender.com/api/homePage/usersFeed/'+id,
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
    }).then((response) => response.json()).then((res) => {
        return res;
    })
    // console.log(response)
    
    return response
}

const getAllData = async (id) => {
    const arr = await getHomeFeed(id)
    const array = []
    let result = arr.map(async (item) => 
    {
        const liked = await checkLiked(item.postId,id)
        const disliked = await checkDisliked(item.postId,id)
        const saved = await checkSaved(item.postId,id)
        
        // const obj = 
        return {
            ...item,
            liked: liked,
            disliked: disliked,
            saved: saved
        }
        
        // console.log(obj)
        // array.push(obj)
        // return array
    })
    console.log(result)
    // return array
}


module.exports = {getHomeFeed,getAllData}