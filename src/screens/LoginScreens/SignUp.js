import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackActions } from '@react-navigation/native';
import Color from '../../ColourThemes/theme1';
import style from './StyleSheets/main.js';
import { StatusBar } from 'expo-status-bar';

const SignUp = ({navigation}) => {
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
                    <TextInput style={style.input}/>
                </View>
                <View style={[{marginVertical:10}]}>
                    <Text style={style.inputLabel}>Email</Text>
                    <TextInput style={style.input}/>
                </View>
                <View style={[{marginVertical:10}]}>
                    <Text style={style.inputLabel}>Password</Text>
                    <TextInput 
                    style={style.input}
                    secureTextEntry
                    />
                </View>
                <View style={[{marginVertical:10}]}>
                    <Text style={style.inputLabel}>Confirm Password</Text>
                    <TextInput 
                    style={style.input}
                    secureTextEntry
                    />
                </View>
                <Pressable 
                    style={[style.logInButtonView,{marginVertical:20}]}
                    onPress={()=>
                    navigation.dispatch(
                        StackActions.replace('SignUpVerification')
                    )}
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
