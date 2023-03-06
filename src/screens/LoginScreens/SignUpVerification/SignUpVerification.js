import { StyleSheet, Text, View,TextInput,SafeAreaView, Pressable,Alert } from 'react-native'
import React,{useState} from 'react'
import { StackActions } from '@react-navigation/native';
import Color from './../../../ColourThemes/theme1.js';
import { StatusBar } from 'expo-status-bar';
import { registerUser, sendOTP,verifyOTP } from '../fetchData/signUpProcess.js';
const Verification = ({navigation,route}) => {
    const sendAgain = () => {
        if(sendOTP(route.params.email))
        {
            Alert.alert('Success','Verification code sent again to your email')
        }
    }
    const [otp,setOtp]=React.useState('')
    const verifyData=()=>{
        if(otp.length!=6)
        {
            Alert.alert('Error','OTP must be of 6 digits')
            return
        }
        if(verifyOTP(route.params.email,otp))
        {
            if(registerUser(route.params.name,route.params.email,route.params.password))
            {
                Alert.alert('Success','Account created successfully')
                navigation.dispatch(
                    StackActions.replace('AccountVerified')
                  )
            }
            else
            {
                Alert.alert('Error','Something went wrong')
            }
        }
        else
        {
            Alert.alert('Error','Wrong OTP')
        }
    }

    return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark"/>
        <View>
            <Text style={styles.head}>Verification</Text>
        </View>
        <View style={styles.mainView}>
            <Text style={styles.heading}>Enter Your Verification Code</Text>
            <TextInput 
                style={styles.input}
                value={otp}
                onChangeText={(text)=>setOtp(text)}
            />
            <Text style={styles.para}>We have sent the verification code to your email {route.params.email}. Please check your inbox.</Text>
            <Text style={styles.label1}>Didn't received the code? 
                <Text 
                    style={[styles.label1,{fontWeight:'700',color:Color.textDarkColor}]}
                    onPress={()=>(sendAgain())}
                >
                    Send Again
                </Text>
            </Text>
        </View>
        <Pressable
            style={styles.buttonView}
            onPress={()=>navigation.dispatch(
                StackActions.replace('AccountVerified')
              )}
        >
            <Text 
                style={styles.buttonText}
                
                onPress={()=>{verifyData()}}
            >
                Verify
            </Text>
        </Pressable>
    </SafeAreaView>
  )
}
export default Verification

const styles = StyleSheet.create({
    container:{
        backgroundColor:Color.lightColor,
        width:'100%',
        height:'100%',
        alignItems:'center',
        display:'flex',
        flexDirection:'column'
    },
    head:{
        fontWeight:'bold',
        fontSize:20,
        margin:10,
    },
    mainView:{
        alignItems:'left',
        alignSelf:'left',
        width:'100%'
    },
    heading:{
        fontSize:40,
        fontWeight:'bold',
        padding:10,
        margin:10
    },
    input:{
        backgroundColor:Color.whiteColor,
        width:'50%',
        borderRadius:10,
        alignSelf:'center',
        height:40,
        margin:10,
        padding:10,
        fontSize:17,
        shadowColor: Color.blackColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    para:{
        fontSize:18,
        margin:20,
    },
    label1:{
        fontSize:18,
        margin:10,
        marginLeft:20
    },
    buttonView:{
        borderRadius:30,
        backgroundColor:Color.darkColor,
        padding:10,
        minWidth:'75%',
        margin:10
    },
    buttonText:{
        textAlign:'center',
        fontSize:20,
        color:Color.whiteColor,
    },
    
})
