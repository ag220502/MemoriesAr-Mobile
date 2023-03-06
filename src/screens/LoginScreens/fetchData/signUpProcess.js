const checkUser = async (email) => {
    const response = await fetch('http://localhost:3000/api/auth/checkUser/'+email)
    const data = await response.json()
    if (data) {
        return true
    }
    return false
}

const sendOTP = async (email) => {
    const response = await fetch('http://localhost:3000/api/auth/sendOTP/'+email)
    const data = await response.json()
    if (data) {
        return true
    }
    return false
}

const verifyOTP = async (email,otp) => {
    const response = await fetch('http://localhost:3000/api/auth/verifyOtp/'+email+'/'+otp)
    const data = await response.json()
    if (data) {
        return true
    }
    return false
}

const registerUser = async (name,email,password) => {
    const response = await fetch('http://localhost:3000/api/auth/register',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name,
            email,
            password
        })
    })
    const data = await response.json()
    if (data) {
        return true
    }
    return false
}


module.exports = {checkUser,sendOTP,verifyOTP,registerUser}