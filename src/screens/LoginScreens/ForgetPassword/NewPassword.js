import { StyleSheet, Text, View,SafeAreaView,Image, TextInput, Pressable } from 'react-native'
import React from 'react'
import img from '../../../images/LoginImages/newPass.png'
import { StackActions } from '@react-navigation/native';
const NewPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
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
            />
        </View>
        <View style={styles.inputView}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
            style={styles.input}
            secureTextEntry
            />
        </View>
        <Pressable 
            style={styles.buttonView}
            onPress={()=>navigation.dispatch(
                StackActions.replace('PasswordUpdated')
              )}
        >
            <Text style={styles.buttonText}>Update Password</Text>
        </Pressable>
    </SafeAreaView>
  )
}

export default NewPassword

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
        color:'#919191',
        marginLeft:20,
        alignSelf:'left'

    },
    inputView:{
        width:'100%',
        alignItems:'center',
        marginLeft:20

    },  
    input:{
        backgroundColor:'#FFFFFF',
        width:'75%',
        borderRadius:20,
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
    buttonView:{
        borderRadius:30,
        backgroundColor:'#F50057',
        padding:10,
        minWidth:'75%',
        margin:10,
        marginTop:20
    },
    buttonText:{
        textAlign:'center',
        fontSize:20,
        color:'#fff',
    },
    forgotPass:{
        fontSize:15,
        textAlign:'right',
        color:'#F50057',
        fontWeight:'bold',
        marginBottom:20
    },
})