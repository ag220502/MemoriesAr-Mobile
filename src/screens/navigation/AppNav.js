import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import { AuthContext } from '../context/AuthContext'


const AppNav = () => {
    const {isLoading,token} = useContext(AuthContext)
    if(isLoading)
    {
        return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={"large"}/>
        </View>)
    }
    return (
        <>
            {
                token !==null ? <AppStack/>: <AuthStack/>
            }
        </>
    )
}

export default AppNav