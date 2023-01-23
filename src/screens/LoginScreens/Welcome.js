import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react';
import img from '../../images/LoginImages/welcome.png'
import { StackActions } from '@react-navigation/native';
import Color from './../../ColourThemes/theme1.js'

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image
        style={styles.image}
        source={img}
        />
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Pressable 
            style={styles.buttonView} 
            onPress={()=>navigation.dispatch(
                StackActions.replace('SignIn')
              )}
            >
            <Text style={styles.buttonText} >Sign In</Text>
        </Pressable>
        <Pressable 
            style={styles.buttonView}
            onPress={()=>navigation.dispatch(
                StackActions.replace('SignUp')
              )}
        >
            <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        backgroundColor:Color.lightColor,
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        margin:10,
    },
    welcomeText:{
        fontSize:40,
        margin:20,
    },
    buttonView:{
        borderRadius:30,
        backgroundColor:Color.darkColor,
        padding:10,
        minWidth:200,
        margin:10
    },
    buttonText:{
        textAlign:'center',
        fontSize:20,
        color:Color.whiteColor,
    },
})