import {WEB} from "../../../var.js"
const requestData = async (id) => {
    const response = await fetch(WEB+"/api/requests/getAllRequests/" + id);
    const data = await response.json();
    return data;
}

const acceptRequest = async (id,recId) => {
    return await fetch(WEB+"/api/requests/acceptRequest",{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: id,
                recId: recId
            })
    }).then((response) => response.json());

}

const declineRequest = async (id,recId) => {
    return await fetch(WEB+"/api/requests/declineRequest/",{
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId: id,
            recId: recId
        })

    }).then ((response) => response.json());
}

const sendRequest = async (id,recId) => {
    return await fetch(WEB+"/api/requests/sendRequest",{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: id,
                recId: recId
            })
    }).then((response) => response.json());
}

const checkRequest = async (id, recId) => {
    const res = await fetch(WEB + "/api/requests/checkRequest/"+id+"/"+recId, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
    const data = await res.json();
    return data;
}



module.exports = {requestData, acceptRequest, checkRequest, declineRequest, sendRequest}