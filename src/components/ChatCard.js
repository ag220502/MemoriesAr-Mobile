import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'

const ChatCard = ({chat,navigation}) => {
  return (
    <Pressable style={styles.container}  onPress={
        ()=>{
            navigation.navigate("UserChatScreen")
        }
    }>
        <View style={{width:'15%'}}>
            <Image source={chat.profile_image} style={styles.profile_img}/>
        </View>
        <View style={{width:'50%'}}>
            <Text style={styles.user_name}>{chat.username} {'\n'}
                <Text style={styles.last_msg}>
                    {
                        chat.lastMessage.length>20 ? chat.lastMessage.slice(0,20)+"...":chat.lastMessage 
                    }
                </Text>
            </Text>
        </View>
        <View style={{width:'20%',justifyContent:'center',alignItems:'s'}}>
            <Text style={styles.time}>{chat.time} {'\n'} 
                {/* <View style={styles.unread_view}><Text style={styles.unread}>1</Text>
                </View> */}
            </Text>
        </View>
    </Pressable>
  )
}

export default ChatCard

const styles = StyleSheet.create({
    container:{
        width:'80%',
        alignSelf:'center',
        marginVertical:10,
        paddingVertical:10,
        height:90,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    profile_img:{
        width:60,
        height:60,
        borderRadius:100
    },
    user_name:{
        fontSize:16,
        fontWeight:'bold',
        
    },
    last_msg:{
        fontSize:15,
        fontWeight:'normal',
        lineHeight:20
    },
    time:{
        fontSize:15,
        color:'grey'
    },
    // unread_view:{
    //     backgroundColor:'#F50057',
    //     borderRadius:100,
    // },
    // unread:{
    //     color:'#F5F6FA',
    //     padding:7,
    // }
})