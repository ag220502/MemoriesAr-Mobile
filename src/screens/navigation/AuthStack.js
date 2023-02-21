import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartApp from '../LoginScreens/StartApp.js';
import SignUp from '../LoginScreens/SignUp.js';
import SignUpVerification from '../LoginScreens/SignUpVerification/SignUpVerification.js';
import AccountVerified from '../LoginScreens/SignUpVerification/AccountVerified.js';
import SignIn from '../LoginScreens/SignIn.js';
import ResetPassword from '../LoginScreens/ForgetPassword/ResetPassword.js';
import ForPassVerification from '../LoginScreens/ForgetPassword/ForPassVerification.js';
import NewPassword from '../LoginScreens/ForgetPassword/NewPassword.js';
import PasswordUpdated from '../LoginScreens/ForgetPassword/PasswordUpdated.js';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ animation: 'none' }}>
            {/* <Stack.Screen
                name="StartApp"
                component={StartApp}
                options={{headerShown:false}}/> */}
            <Stack.Screen 
                name="SignIn" 
                component={SignIn}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="SignUp" 
                component={SignUp}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="SignUpVerification"
                component={SignUpVerification}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="AccountVerified"
                component={AccountVerified}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="ResetPassword"
                component={ResetPassword}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="ForPassVerification"
                component={ForPassVerification}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="NewPassword"
                component={NewPassword}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="PasswordUpdated"
                component={PasswordUpdated}
                options={{headerShown:false}} />
        </Stack.Navigator>
    )
}

export default AuthStack