import { StyleSheet, Text, View,SafeAreaView,Image, TextInput, Pressable, Alert } from 'react-native'
import React,{useState} from 'react'
import img from '../../../images/LoginImages/newPass.png'
import { StackActions } from '@react-navigation/native';
import Color from './../../../ColourThemes/theme1.js';
import { StatusBar } from 'expo-status-bar';
import { forgetPass } from '../fetchData/forgotPassProcess.js';

const NewPassword = ({navigation,route}) => {
    const [pass,setPass] = useState('')
    const [confirmPass,setConfirmPass] = useState('')
    const [resData,setResData] = useState('')
    const checkPassword = async () => {
        if (pass.length === 0) {
            Alert.alert('Please enter password')
            return
        }
        if(pass.length < 6)
        {
            Alert.alert('Password should be atleast 6 characters long')
            return
        }
        if(pass!==confirmPass)
        {
            Alert.alert("Password Mismatch","Please enter same password in both fields")
        }
        else
        {
            setResData('')
            const data = await forgetPass(route.params.email,pass)
            setResData(data)
            if(data===2)
            {
                Alert.alert("Error","User not found")
                return
            }
            else if(data===3)
            {
                Alert.alert("Error","New Password cannot be same as old password!")
                return
            }
            else if(data===0)
            {
                Alert.alert("Password Changed Successfully","",[{
                    text:"Ok",
                    onPress:()=>{
                        navigation.dispatch(
                            StackActions.replace('PasswordUpdated')
                        )
                    }
                }])
            }
        }
    }
    return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark"/>
        <Text style={styles.head}>Change Password</Text>
        <Image
            source={img}
            style={styles.img1}
        />
        <Text style={styles.head}>Create New Password</Text>
        <Text style={styles.para}>Please Enter New Password which is different from previous one.</Text>
        <View style={styles.inputView}>
            <Text style={styles.label}>Enter Password</Text>
            <TextInput
                style={styles.input}
                secureTextEntry
                value={pass}
                onChangeText={(text)=>setPass(text)}
            />
        </View>
        <View style={styles.inputView}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                secureTextEntry
                value={confirmPass}
                onChangeText={(text)=>setConfirmPass(text)}
            />
        </View>
        <Pressable 
            style={styles.buttonView}
            onPress={()=> checkPassword()}
        >
            <Text style={styles.buttonText}>Update Password</Text>
        </Pressable>
    </SafeAreaView>
  )
}

export default NewPassword

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
        margin:10,
        fontWeight:'bold',
        fontSize:20
    },
    img1:{
        margin:40,
    },
    para:{
        fontSize:18,
        margin:20,
        marginTop:10
    },
    label:{
        fontSize:18,
        color:Color.textMidColor,
        alignSelf:'left',
        marginLeft:20
    },
    inputView:{
        width:'90%',
    },  
    input:{
        backgroundColor:Color.whiteColor,
        width:'75%',
        borderRadius:10,
        marginLeft:20,
        height:40,
        padding:10,
        fontSize:17,
        shadowColor: Color.blackColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,        
        marginVertical:15
    },
    buttonView:{
        borderRadius:30,
        backgroundColor:Color.darkColor,
        padding:10,
        minWidth:'75%',
        margin:10,
        marginTop:20
    },
    buttonText:{
        textAlign:'center',
        fontSize:20,
        color:Color.whiteColor,
    },
    forgotPass:{
        fontSize:15,
        textAlign:'right',
        color:Color.darkColor,
        fontWeight:'bold',
        marginBottom:20
    },
})