import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{createContext, useEffect, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider= ({children})=>{
    const [isLoading,setLoading] = useState(false)
    const [token,setToken] = useState(null)
    const [userLoggedIn,setUserLoggedIn] = useState(false)
    const login = async(userEmail,userPass)=>{
        setLoading(true)
        try
        {
            await fetch ('http://localhost:3000/api/auth/login',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({email:userEmail,password:userPass})
            }).then(
                res => {res.json().then(async data => {
                    try {
                            setToken(data.token)
                            await AsyncStorage.setItem('token',data.token);
                            await AsyncStorage.setItem('userId',data.userId.toString());
                            setUserLoggedIn(true)

                        } catch (error) {
                        console.log(error)
                        }
                    });
            })
        }
        catch(err)
        {
            console.log(err)
        }
        setLoading(false)
    }

    const logout = async ()=>{
        setLoading(true)
        console.log("logged out1")
        try
        {
            await fetch ('http://localhost:3000/api/auth/logout',{
                method: 'GET',
            }).then(
                res => {res.json().then(async data => {
                    if(data==true)
                    {
                        try
                        {
                            setToken(null)
                            await AsyncStorage.removeItem("token");
                            await AsyncStorage.removeItem("userId");
                            console.log("logged out")
                        } 
                        catch (error) {
                            console.log(error)
                        }
                    }
                });
            })
        }
        catch(err)
        {
            console.log(err)
        }
        setLoading(false)
    }
    const checkLoggedIn = async ()=>{
        try {
            const token = await AsyncStorage.getItem("token")
            if(token)
            {
                return true
            }
            else
            {

                return false
            }
        } catch (error) {
            console.log(error)
        }
    }

    const isLoggenIn= async ()=>{
        try {
            setLoading(true)
            const token = await AsyncStorage.getItem("token")   
            setToken(token) 
            setLoading(false)
            return token
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(()=>{
        isLoggenIn()
    },[])
    return (
        <AuthContext.Provider value={{login,logout,isLoading,token,userLoggedIn}}>
            {children}

        </AuthContext.Provider>
    )
}