import { WEB } from "../../../var"
const makePublic = async (accId) => {
    const response = await fetch(`${WEB}/api/users/setAccountPublic/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: accId
        })

    })
    const data = await response.json()
    return data
}

const makePrivate = async (accId) => {
    const response = await fetch(`${WEB}/api/users/setAccountPrivate/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: accId
        })
    })
    const data = await response.json()
    return data
}

const getAccVisibility = async (accId) => {
    const response = await fetch(`${WEB}/api/users/getAccVisibility/${accId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json()
    return data
}

module.exports = {makePublic,makePrivate,getAccVisibility}