const forgetPass = async (email,pass) => {
    const response = await fetch('http://localhost:3000/api/auth/updatePassByEmail',{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            email,
            newPassword:pass
        })
    })
    const data = await response.json()
    if(!(Number.isInteger(data)))
    {
        forgetPass(email,pass)
        return
    }
    if(Number.isInteger(data)) {
        return data
    }
    return false
}

module.exports = {forgetPass}