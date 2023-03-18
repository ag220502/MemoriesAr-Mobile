import { StyleSheet, Text, View,TextInput,SafeAreaView, Pressable,Alert } from 'react-native'
import React,{useState} from 'react'
import { StackActions } from '@react-navigation/native';
import Color from './../../../ColourThemes/theme1.js';
import { StatusBar } from 'expo-status-bar';
import { sendOTP,verifyOTP } from '../fetchData/signUpProcess.js';

const ForPassVerification = ({navigation,route}) => {
    const [otp,setOtp] = useState('')
    const sendAgain = () => {
        if(sendOTP(route.params.email))
        {
            Alert.alert('Success','Verification code sent again to your email')
        }
    }
    const validateAndVerifyOTP = () => {
        if (otp.length === 0) {
            Alert.alert('Please enter OTP')
            return
        }
        if (otp.length !== 6) {
            Alert.alert('Please enter valid OTP')
            return

        }
        const verifyOTP1 = verifyOTP(route.params.email,otp)
        if (verifyOTP1) {
            Alert.alert("OTP Verified Successfully","Please Enter New Password",[{
                text:"Ok",
                onPress:()=>{
                    navigation.dispatch(
                        StackActions.replace('NewPassword',{email:route.params.email})
                    )
                }
            }])
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
            <Text style={styles.para}>We have sent the verification code to your email akshay@gmail.com. Please check your inbox.</Text>
            <Text style={styles.label1}>Didn't received the code? 
                <Text 
                    style={[styles.label1,{fontWeight:'700',color:Color.textDarkColor}]}
                    onPress={()=>(sendAgain())}
                > Send Again
                </Text>
            </Text>
        </View>
        <Pressable 
            style={styles.buttonView}
            onPress={()=>validateAndVerifyOTP()}
        >
            <Text style={styles.buttonText}>Verify</Text>
        </Pressable>
        <Pressable
            style={[styles.buttonView,{backgroundColor:Color.lightColor,borderColor:Color.textDarkColor,borderWidth:1}]}
            onPress={()=>navigation.navigate('ResetPassword')
              }
        >
            <Text 
                style={[styles.buttonText,{color:Color.textDarkColor}]}
            >
                Go Back
            </Text>
        </Pressable>
    </SafeAreaView>
  )
}
export default ForPassVerification

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
        backgroundColor: Color.darkColor,
        padding:10,
        minWidth:'75%',
        margin:10
    },
    buttonText:{
        textAlign:'center',
        fontSize:20,
        color:'#fff',
    },
    
})
