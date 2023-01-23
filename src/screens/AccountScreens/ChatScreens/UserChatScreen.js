import { Pressable, StyleSheet, Text, View,ScrollView, TextInput, StatusBar } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';  
import Color from '../../../ColourThemes/theme1';
import { StackActions } from '@react-navigation/native';

const UserChatScreen = ({navigation}) => {
    const data = [
        {
            msgId:1,
            id:'1',
            chat:'Hello',
            time:'12:00 PM'
        },
        {
            msgId:2,
            id:'2',
            chat:'Hii',
            time:'12:00 PM'
        },
        {
            msgId:3,
            id:'1',
            chat:'How Are You?',
            time:'12:00 PM'
        },
        {
            msgId:4,
            id:'2',
            chat:'I am good',
            time:'12:00 PM'
        },
        {
            msgId:5,
            id:'1',
            chat:'You?',
            time:'12:00 PM'
        },
        {
            msgId:6,
            id:'2',
            chat:'Good',
            time:'12:00 PM'
        },
        {
            msgId:7,
            id:'1',
            chat:'You?',
            time:'12:00 PM'
        },
        {
            msgId:8,
            id:'2',
            chat:'Good',
            time:'12:00 PM'
        },
        {
            msgId:9,
            id:'1',
            chat:'Bye',
            time:'12:00 PM'
        },
        
    ]
  return (
    <View style={styles.container}>
        <StatusBar barStyle={'dark-content'}/>
        <View style={styles.main}>
            <View style={styles.userDetails}>
                <Pressable style={styles.buttonView}
                    onPress={()=>navigation.dispatch(
                        StackActions.replace('ChatScreen')
                      )}
                >
                    <Ionicons name="chevron-back" size={24} color={Color.textLightColor} />
                </Pressable>
                <Text style={styles.userName}>Akshay Garg</Text>
                <Pressable style={styles.buttonView}>
                    <Entypo name="dots-three-horizontal" size={24} color={Color.textLightColor} />
                </Pressable>
            </View>
            <ScrollView style={styles.chatSec}>
                <View style={styles.chatDateView}>
                    <Text style={styles.chatDate}>Yesterday</Text>
                </View>
                {
                    data.map((item)=>{
                        if(item.id==='1')
                        {
                            return(
                                <View key={item.msgId}>
                                    <View style={styles.senderView}>
                                        <Text>{item.chat}</Text>
                                    </View>
                                    <Text style={styles.senderTime}>{item.time}</Text>
                                </View>
                            )
                        }
                        else
                        {
                            return(
                                <View key={item.msgId}>
                                    <View style={styles.receiverView}>
                                        <Text style={styles.receiverText}>{item.chat}</Text>
                                    </View>
                                    <Text style={styles.receiverTime}>{item.time}</Text>
                                </View>
                            )
                        }
                    })
                }
                
                
                
            </ScrollView>
        </View>
        <View style={styles.send_msg}>
            <TextInput style={styles.msg} placeholder={'Enter Message'}/>
            <Pressable style={styles.sendBtn}>
                <FontAwesome name="send" size={24} color="#F50057" />
            </Pressable>
        </View>

    </View>
  )
}

export default UserChatScreen

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#F50057',
        color:'#F5F6FA'
    },
    main:{
        height:'90%',
        backgroundColor:'#F5F6FA',
        borderBottomLeftRadius:60,
        borderBottomRightRadius:60,
        paddingBottom:20
    },
    userDetails:{
        marginTop:50,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingVertical:10,
        borderBottomWidth:0.5,
    },
    userName:{
        fontSize:22,
        fontWeight:'bold',
        alignSelf:'center'
    },
    buttonView:{
        width:45,
        height:45,
        backgroundColor:'#F50057',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    chatSec:{
    },
    chatDateView:{
        backgroundColor:'#F50057',
        borderRadius:20,
        alignSelf:'center',
        margin:10
    },
    chatDate:{
        color:'#F5F6FA',
        padding:7,
        fontSize:15,
        

    },
    senderView:
    {
        backgroundColor:'white',
        maxWidth:'80%',
        alignSelf:'flex-start',
        flexDirection:'row',
        marginHorizontal:30,
        padding:15,
        borderBottomRightRadius:20,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
    },
    senderTime:{
        alignSelf:'flex-start',
        marginHorizontal:30,
        padding:5,
        color:'grey'
    },
    receiverView:
    {
        marginTop:15,
        backgroundColor:'#F50057',
        maxWidth:'80%',
        alignSelf:'flex-end',
        flexDirection:'row',
        marginHorizontal:30,
        padding:15,
        borderBottomLeftRadius:20,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
    },
    receiverText:
    {
        color:'#F5F6FA',
        fontSize:16
    },
    receiverTime:{
        alignSelf:'flex-end',
        color:'grey',
        marginHorizontal:30,
        padding:5
    },
    send_msg:{
        width:'90%',
        marginVertical:10,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between'
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
        backgroundColor:'#F5F6FA',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    }
})