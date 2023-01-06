import { StyleSheet, Text, View, SafeAreaView,Image, Pressable } from 'react-native'
import React from 'react'
import img from '../../../images/LoginImages/passUpdated.png'
import { StackActions } from '@react-navigation/native';
const PasswordUpdated = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <Image
        source={img}
        style={styles.img1}
        />
        <Text style={styles.head}>Password Updated</Text>
        <Text style={styles.label1}>Your Password Has Been Updated. Please Sign In and Continue.</Text>
        <Pressable 
            style={styles.buttonView}
            onPress={()=>navigation.dispatch(
                StackActions.replace('SignIn')
              )}
        >
            <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
    </SafeAreaView>
  )
}

export default PasswordUpdated


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
        margin:40
    },
    head:{
        fontWeight:'bold',
        fontSize:30,

    },
    label1:{
        fontSize:18,
        margin:10,
        paddingLeft:10,
        paddingRight:10,
        alignSelf:'center',
    },
    buttonView:{
        borderRadius:30,
        backgroundColor:'#F50057',
        padding:10,
        minWidth:'75%',
        margin:20
    },
    buttonText:{
        textAlign:'center',
        fontSize:20,
        color:'#fff',
    },
    
})
