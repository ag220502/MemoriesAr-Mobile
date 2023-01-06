import { Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import ChatCard from '../../../components/ChatCard';
import { Entypo } from '@expo/vector-icons';

const ChatScreen = ({navigation}) => {
    let chat = [
        {
            id:1,
            username:'Akshay',
            lastMessage:'Hello',
            time:'12:00',
            profile_image:require('../../images/HomeImages/profile.png')
        },
        {
            id:2,
            username:'Dhruv',
            lastMessage:'Hello, How Are you?',
            time:'19:00',
            profile_image:require('../../images/HomeImages/profile.png')
        },
        {
            id:3,
            username:'Akshay',
            lastMessage:'Hello',
            time:'11:00',
            profile_image:require('../../images/HomeImages/profile.png')
        },
        {
            id:4,
            username:'Dhruv',
            lastMessage:'Hello, How Are you?Hello How Are you?Hello, How Are you?',
            time:'10:00',
            profile_image:require('../../images/HomeImages/profile.png')
        },
        {
            id:5,
            username:'Akshay',
            lastMessage:'Hello',
            time:'12:00',
            profile_image:require('../../images/HomeImages/profile.png')
        },

    ]
    const [keyword,setKeyword] = useState('')
    const [showbar,setShowBar] = useState(false)
  return (
    <View style={styles.container}>
        <StatusBar barStyle={"light-content"}/>
        <View style={styles.search}>
            <Pressable style={styles.buttonView}
                onPress={()=>navigation.navigate("MainScreen")}
            >
                <Ionicons name="chevron-back" size={30} color="#F50057" />
            </Pressable>
            <View style={styles.headView}>
                {showbar ? 
                    <TextInput style={styles.searchInput} placeholder="Search" onChangeText={(text)=>setKeyword(text)}/>
                    :
                    <Text style={styles.head}>Messages</Text>}
                
            </View>
            {showbar ? 
                <Pressable style={styles.buttonView} onPress={()=>{setShowBar(false);setKeyword('')}}>
                    <Entypo name="cross" size={30} color="#F50057" />
                </Pressable>: 
                <Pressable style={styles.buttonView} onPress={()=>setShowBar(true)}>
                    <FontAwesome name="search" size={24} color="#F50057" />
                </Pressable>}
        </View>
        <ScrollView style={styles.main}>
            {
                chat.filter((data)=>{
                    if(data.username.toLowerCase().includes(keyword.toLowerCase())){
                        return data
                    }
                    else if(keyword===''){
                        return data
                    }
                }).map((data)=>{
                    return(
                        <ChatCard key={data.id} chat={data} navigation={navigation}/>
                    )
                })
            }
            
        </ScrollView>
        <Pressable style={styles.add_view}>
            <Entypo name="plus" size={30} color="#F5F6FA" />
        </Pressable>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#F50057',
        alignItems:'center',
        justifyContent:'center'
    },
    headView:{
        justifyContent:'center',
        alignItems:'center',
        height:45,
        width:250
    },
    head:{
        color:'#F5F6FA',
        fontSize:25,
        fontWeight:'bold'
    },
    search:{
        width:'90%',
        height:'15%',
        top:40,
        paddingVertical:20,
        paddingHorizontal:10,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    buttonView:{
        width:45,
        height:45,
        backgroundColor:'#F5F6FA',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    main:{
        flexDirection:'column',
        backgroundColor:"#F5F6FA",
        width:'100%',
        height:'75%',
        borderTopLeftRadius:'60',
        borderTopRightRadius:'60',
        paddingTop:20,
    },
    searchInput:{
        height:45,
        width:'100%',
        backgroundColor:'#F5F6FA',
        borderRadius:20,
        padding:10,
        fontSize:16
    },
    add_view:{
        backgroundColor:'#F50057',
        width:60,
        height:60,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        right:30,
        bottom:50
    }
})