import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, Pressable } from 'react-native'
import React from 'react';
import img from '../../../images/LoginImages/resetPass.png'
import { StackActions } from '@react-navigation/native';
const ResetPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.head}>Reset Password</Text>
        </View>
        <Image
            source={img}
            style={styles.img1}
        />
        <View style={styles.mainView}>
            <Text style={styles.heading}>Don't Worry. Enter your Email id and we'll send you a verification code to reset your password.</Text>
            <TextInput style={styles.input}/>
        </View>
        <Pressable 
            style={styles.buttonView}
            onPress={()=>navigation.dispatch(
                StackActions.replace('ForPassVerification')
              )}
        >
            <Text style={styles.buttonText}>Send Code</Text>
        </Pressable>
    </SafeAreaView>
  )
}

export default ResetPassword


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F5F6FA',
        width:'100%',
        height:'100%',
        alignItems:'center',
        display:'flex',
        flexDirection:'column'
    },
    img1:{
        margin:30
    },
    head:{
        fontWeight:'bold',
        fontSize:20,
        margin:20,
        marginLeft:30,
    },
    mainView:{
        alignItems:'left',
        alignSelf:'left',
        width:'100%'
    },
    heading:{
        fontSize:22,
        fontWeight:'bold',
        padding:10,
        margin:10
    },
    input:{
        backgroundColor:'#FFFFFF',
        width:'75%',
        borderRadius:30,
        alignSelf:'center',
        height:40,
        margin:30,
        padding:10,
        fontSize:17,
        shadowColor: '#000',
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
        backgroundColor:'#F50057',
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
