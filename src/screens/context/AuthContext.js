import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{createContext, useEffect, useState} from "react";
import {Alert} from "react-native";

export const AuthContext = createContext();

export const AuthProvider= ({children})=>{
    const [isLoading,setLoading] = useState(false)
    const [token,setToken] = useState(null)
    const [userLoggedIn,setUserLoggedIn] = useState(false)
    const [setingData,setSetingData] = useState(false)
    const [setId,setUserId] = useState(false)
    const login = (userEmail,userPass)=>{
        setLoading(true)
        try
        {
            fetch ('http://localhost:3000/api/auth/login',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({email:userEmail,password:userPass})
            }).then(
                res => {res.json().then(async data => {
                    if(data==false)
                    {
                        Alert.alert("Invalid Credentials","Please Check Your Email And Password",[{
                            text:"Ok"
                        }])
                        return
                    }
                    else if(data=="Account Deactivated!")
                    {
                        Alert.alert("Account Deactivated","Please Activate Your Account",[{
                            text:"Ok"
                        }])
                        return
                    }
                    else if(data=="Account Banned!")
                    {
                        Alert.alert("Account Banned","Please Contact Admin",[{
                            text:"Ok"
                        }])
                        return
                    }
                    try {
                            if(setingData && await AsyncStorage.getItem('userId'))
                            {
                                return
                            }
                            setToken(data.token)
                            console.log("Setting Item");
                            (await AsyncStorage.setItem('token',data.token)).then(()=>{
                                setUserId(true)
                            });
                            (await AsyncStorage.setItem('userId',data.userId.toString())).then(()=>{
                                setUserId(true)
                            });
                            
                            if(setId)
                            {
                                setSetingData(true)
                                setUserLoggedIn(true)
                            }
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

    const logout = ()=>{
        setLoading(true)
        try
        {
            fetch ('http://localhost:3000/api/auth/logout',{
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