import { Pressable, StyleSheet, Text, TextInput, View,Alert } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackActions } from '@react-navigation/native';
import Color from '../../ColourThemes/theme1';
import style from './StyleSheets/main.js';
import { StatusBar } from 'expo-status-bar';
import Checkbox from 'expo-checkbox';
import { checkUser, sendOTP } from './fetchData/signUpProcess';

const SignUp = ({navigation}) => {
    const [userName,setName] = useState("");
    const [userEmail,setEmail] = useState("");
    const [pass,setPassword] = useState("");
    const [confirmPass,setConfirmPassword] = useState("");
    const [valid,setValid] = useState(false);
    const [sendMail,setSendMail] = useState(false);
    // const sendCred = ()=>{
    //     fetch("http://localhost:3000/api/auth/register",{
    //         method:"POST",
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify({
    //             name:userName,
    //             email:userEmail,
    //             password:pass
    //         })
    //     }).then(res=>res.json())
    //     .then(data=>{
    //         if(data==="User Registered Successfully")
    //         {
    //             Alert.alert("User Registered Successfully","",[{
    //                 text:"Sign In",
    //                 onPress:()=>{
    //                     navigation.dispatch(
    //                         StackActions.replace('SignIn')
    //                     )
    //                 }
    //             }])
    //         }
    //         else if(data==="User Already Exists!")
    //         {
    //             Alert.alert("User Already Exists","Please Sign In!",[{
    //                 text:"Ok"
    //             }]
    //         )
    //         }
    //     })
    // }

    const validateData = () => {
        if(userName==="" || userEmail==="" || pass==="" ||confirmPass==="" )
        {
            Alert.alert("Please Fill All The Fields","")
        }
        else
        {
            if(pass.length<6)
            {
                Alert.alert("Password Should Be Atleast 6 Characters Long","")
                return
            }
            if(pass!==confirmPass)
            {
                Alert.alert("Passwords Don't Match","")
                return
            }
            if(userName.length>30)
            {
                Alert.alert("Name Should Be Less Than 30 Characters Long","")
                return
            }
            if(userEmail.length>50)
            {
                Alert.alert("Email Should Be Less Than 50 Characters Long","")
                return
            }
            if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)))
            {
                Alert.alert("You have entered an invalid email address!","")
                return
            }
            // if(checkUser(userEmail))
            // {
            //     Alert.alert("User Already Exists","Please Sign In!",[{
            //         text:"Ok"
            //     }]
            //     )
            //     return
            // }
            setValid(true)
            if(!sendMail)
            {
                if(valid)
                {
                    sendOTP(userEmail)
                }
                setSendMail(true)
                Alert.alert("OTP Sent Successfully!!","Please check mail!",[{
                    text:"Verify",
                    onPress:()=>{
                        navigation.dispatch(
                            StackActions.replace('SignUpVerification',{
                                name:userName,
                                email:userEmail,
                                password:pass
                            })
                        )
                    }
                }])
            }
            
            // sendCred()
            // navigation.dispatch(
            //     StackActions.replace('SignUpVerification')
            // )
        }
    }
    

    return (
        <View style={style.container}>
            <StatusBar barStyle="dark"/>
            <View style={style.mainUp}>
                <View style={style.loginWelcomeView}>
                    <Text style={style.loginWelcomeText}>Welcome!</Text>
                    <Text style={style.loginSignInText}>Sign Up and Get Started...</Text>
                </View>
                <View style={style.mainInputView}>
                    <View style={[{marginVertical:1}]}>
                        <Text style={style.inputLabel}>First Name</Text>
                        <TextInput 
                            style={style.input}
                            value={userName}
                            onChangeText={(text)=>{setName(text)}}
                        />
                    </View>
                    <View style={[{marginVertical:10}]}>
                        <Text style={style.inputLabel}>Email</Text>
                        <TextInput 
                            style={style.input}
                            value={userEmail}
                            onChangeText={(text)=>{setEmail(text)}}
                        />
                    </View>
                    <View style={[{marginVertical:10}]}>
                        <Text style={style.inputLabel}>Password</Text>
                        <TextInput 
                            style={style.input}
                            secureTextEntry
                            value={pass}
                            onChangeText={(text)=>{setPassword(text)}}
                        />
                    </View>
                    <View style={[{marginVertical:10}]}>
                        <Text style={style.inputLabel}>Confirm Password</Text>
                        <TextInput 
                        style={style.input}
                        onChangeText={(text)=>{setConfirmPassword(text)}}
                        secureTextEntry
                        />
                    </View>
                    {/* <View style={[{marginVertical:10}]}>
                        <Checkbox 
                            isChecked={isCheck}
                            onClick={()=>{setIsCheck(!isCheck)}}
                            rightText="I agree to the Terms and Conditions"
                            rightTextStyle={{fontSize:17,color:Color.blackColor}}
                        />
                    </View> */}

                    <Pressable 
                        style={[style.logInButtonView,{marginVertical:20}]}
                        onPress={()=>
                        // navigation.dispatch(
                        //     StackActions.replace('SignUpVerification')
                        // )
                            validateData()
                    }
                        >
                        <Text style={style.logInButtonText}>Sign Up</Text>
                    </Pressable>
                </View>
        </View>
            <View style={style.downMain}>
                <Text style={style.linkText}>Already Have An Account? 
        
                    <Text style={[style.linkText,{fontWeight:'bold'}]} onPress={()=>navigation.dispatch(
                        StackActions.replace('SignIn')
                    )}>Sign In</Text>
                </Text>
            </View>
        </View>
    )
}

export default SignUp
