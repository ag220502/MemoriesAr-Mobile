import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackActions } from '@react-navigation/native';

const Signin = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.welcomeView}>
            <Text style={styles.welcomeText}>Welcome!</Text>
            <Text style={styles.signInText}>Sign In and Get Started</Text>
        </View>
        <View>
            <View>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input}/>
            </View>
            <View>
                <Text style={styles.label}>Password</Text>
                <TextInput 
                style={styles.input}
                secureTextEntry
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
                style={styles.buttonView}
                onPress={()=>navigation.dispatch(
                    StackActions.replace('MainScreen')
                  )}
            >
                <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
        </View>
        <View>
            <Text style={styles.label2}>Or Sign In With</Text>
            <View style={styles.icons}>
                <View style={styles.icon}>
                <Icon
                    name="facebook"
                    style={styles.iconText}
                    backgroundColor="#3b5998"
                    />
                </View>
                <View style={styles.icon}>
                <Icon
                    name="google"
                    style={styles.iconText}
                    backgroundColor="#3b5998"/>
                </View>
            </View>
        </View>
        <View style={styles.line}/>
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

export default Signin

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F5F6FA',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        flexDirection:'column'
    },
    welcomeView:{
        width:'100%',
        marginBottom:50,
        padding:20
    },
    welcomeText:{
        fontSize:35,
        margin:20,
        textAlign:'left',
        color:'#F50057',
        fontWeight:'bold'
    },
    signInText:{
        fontSize:18,
        marginLeft:20
    },

    label:{
        fontSize:18,
        color:'#919191',
        marginLeft:15

    },
    input:{
        backgroundColor:'#FFFFFF',
        width:300,
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
    line:{
        width:"75%",
        height:2,
        backgroundColor:'#EBEBEB',
        margin:30,

    },
    buttonView:{
        borderRadius:30,
        backgroundColor:'#F50057',
        padding:10,
        minWidth:300,
        margin:10
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
    icons:{
        flexDirection:'row',
        margin:10,
    },
    icon:{
        padding:15,
        margin:10,
        backgroundColor:'#FFF',
        borderRadius:15,
        width:50,
        
    },
    iconText:{
        fontSize:25,
        textAlign:'center'
    },
    label2:{
        fontSize:17,
        margin:15,
        color:'#919191'
    }
})