import { Pressable, StyleSheet, Text, TextInput, View,Alert } from 'react-native'
import React, { useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackActions } from '@react-navigation/native';
import Color from '../../ColourThemes/theme1';
import style from './StyleSheets/main';
import { StatusBar } from 'expo-status-bar';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/AuthContext';


const Signin = ({navigation}) => {

    const {login} = useContext(AuthContext)
    const [email,setEmail] = useState("")
    const [pass,setPass]= useState("")

    const loginFunc = async (userEmail,userPass)=>
    {
        if(!userEmail || !userPass)
        {
            Alert.alert("Alert Box","Please Enter All Details",[{
                    text:"Ok"
                }]
            )
        }
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)))
        {
            Alert.alert("You have entered an invalid email address!","")
            return
        }
        else
        {
            login(email,pass)
        }
    }
  return (
    
    <View style={style.container}>
        <StatusBar barStyle="dark"/>
        <View style={style.mainUp}>
            <View style={style.loginWelcomeView}>
                <Text style={style.loginWelcomeText}>Welcome!</Text>
                <Text style={style.loginSignInText}>Sign In to Access Account</Text>
            </View>
        <View style={style.mainInputView}>
            <View style={[{marginVertical:15}]}>
                <Text style={style.inputLabel}>Email</Text>
                <TextInput 
                    style={style.input}
                    onChangeText={(text)=>{setEmail(text)}}
                />
            </View >
            <View style={[{marginVertical:15}]}>
                <Text style={style.inputLabel}>Password</Text>
                <TextInput 
                    style={style.input}
                    onChangeText={(text)=>{setPass(text)}}
                    secureTextEntry={true}
                />
            </View>
            <View>
                <Text 
                    style={styles.forgotPass}
                    onPress={()=>navigation.dispatch(
                        StackActions.replace('ResetPassword')
                      )}

                >Forgot Password?</Text>
            </View>
            <Pressable 
                style={style.logInButtonView}
                onPress={()=>loginFunc(email,pass)}
            >
                <Text style={style.logInButtonText}>Sign In</Text>
            </Pressable>
        </View>
        <View>
            <Text style={styles.label2}>Or Sign In With</Text>
            <View style={styles.icons}>
                {/* <View style={styles.icon}>
                <Icon
                    name="facebook"
                    style={styles.iconText}
                    backgroundColor="#3b5998"
                    />
                </View> */}
                <View style={styles.icon}>
                <Icon
                    name="google"
                    style={styles.iconText}
                    backgroundColor="#3b5998"/>
                </View>
            </View>
        </View>
        <View style={styles.line}/>
        

        </View>
        <View style={style.downMain}>
            <Text style={style.linkText}>Dont Have An Account? 
    
                <Text style={[style.linkText,{fontWeight:'bold'}]} onPress={()=>navigation.dispatch(
                    StackActions.replace('SignUp')
                )}> Sign Up</Text>
            </Text>
        </View>
    </View>
    
  )
}

export default Signin
const styles = StyleSheet.create({
    
    
    forgotPass:{
        fontSize:15,
        textAlign:'right',
        color:Color.textDarkColor,
        fontWeight:'bold',
        marginBottom:20
    },
    label2:{
        fontSize:17,
        marginVertical:20,
        color:Color.textMidColor,
        alignSelf:'center',
    },
    icons:{
        flexDirection:'row',
        marginVertical:15,
        justifyContent:'center'
    },
    icon:{
        padding:15,
        margin:10,
        backgroundColor:Color.whiteColor,
        borderRadius:15,
        width:50,
    },
    iconText:{
        fontSize:25,
        textAlign:'center',
        color:Color.blackColor
    }
})
