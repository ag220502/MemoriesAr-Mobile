const requestData = async (id) => {
    const response = await fetch("http://localhost:3000/api/requests/getAllRequests/" + id);
    const data = await response.json();
    return data;
}

module.exports = {requestData}