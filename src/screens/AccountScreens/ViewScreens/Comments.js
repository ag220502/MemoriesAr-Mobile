import { Pressable, StyleSheet, Text, View,ScrollView,TextInput,KeyboardAvoidingView, SafeAreaView } from 'react-native'
import React from 'react'
import style from '../../../StyleSheets/main.js'
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import Color from '../../../ColourThemes/theme1.js';
import { FontAwesome } from '@expo/vector-icons';  

const Comments = () => {
  return (
    <View style={style.container}>
        <StatusBar style="light"/>
        <View style={[style.downMain,{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}]}>
            <Pressable style={styles.btnView} onPress={()=>{}}>
                <Entypo name="chevron-left" size={24} color="black" />
            </Pressable>
            <View style={styles.headView}>
                <Text style={style.frameHead}>Comments</Text>
            </View>
            <View></View>
        </View>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={style.mainDown}
        >
            <ScrollView>
                <View>
                    <Text>Comments</Text>
                </View>
            </ScrollView>
            
            <View style={styles.send_msg}>
                <TextInput style={styles.msg} placeholder={'Enter Comment'}/>
                <Pressable style={styles.sendBtn}>
                    <FontAwesome name="send" size={24} color={Color.textLightColor} />
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    </View>
  )
}

export default Comments

const styles = StyleSheet.create({
    btnView:{
        width:45,
        height:45,
        backgroundColor:Color.lightColor,
        borderRadius:10,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20
    },
    headView:{
        alignSelf:'center',
        marginLeft:-30
    },
    send_msg:{
        width:'90%',
        marginVertical:10,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20
    },
    msg:{
        width:'80%',
        backgroundColor:'white',
        height:45,
        color:'black',
        padding:10,
        marginHorizontal:10,
        fontSize:16,
        borderRadius:10
    },
    sendBtn:{
        width:45,
        height:45,
        backgroundColor: Color.darkColor,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    }
})