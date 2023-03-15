const requestData = async (id) => {
    const response = await fetch("http://localhost:3000/api/requests/getAllRequests/" + id);
    const data = await response.json();
    return data;
}

const acceptRequest = async (id,recId) => {
    return await fetch("http://localhost:3000/api/requests/acceptRequest",{
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
    return await fetch("http://localhost:3000/api/requests/declineRequest/",{
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

module.exports = {requestData, acceptRequest, declineRequest}