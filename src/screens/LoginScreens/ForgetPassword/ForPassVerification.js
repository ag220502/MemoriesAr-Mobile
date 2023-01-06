import { StyleSheet, Text, View,TextInput,SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { StackActions } from '@react-navigation/native';
const ForPassVerification = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.head}>Verification</Text>
        </View>
        <View style={styles.mainView}>
            <Text style={styles.heading}>Enter Your Verification Code</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.para}>We have sent the verification code to your email akshay@gmail.com. Please check your inbox.</Text>
            <Text style={styles.label1}>Didn't received the code? Send Again</Text>
        </View>
        <Pressable 
            style={styles.buttonView}
            onPress={()=>navigation.dispatch(
                StackActions.replace('NewPassword')
              )}
        >
            <Text style={styles.buttonText}>Verify</Text>
        </Pressable>
    </SafeAreaView>
  )
}
export default ForPassVerification

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F5F6FA',
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
        backgroundColor:'#FFFFFF',
        width:'50%',
        borderRadius:10,
        alignSelf:'center',
        height:40,
        margin:10,
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
