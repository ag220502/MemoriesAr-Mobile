import { StyleSheet, Text, View,Image, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import logo from '../images/HomeImages/logo.png' 
import Ionicons from '@expo/vector-icons/Ionicons';
import Color from '../ColourThemes/theme1';
import { AntDesign } from '@expo/vector-icons';

const TopNavBar = ({navigation,userId}) => {
    
    return (
    <View style={styles.container}>
        {/* <Image
            source={logo}
            style={styles.logo2}
        /> */}
        <Text style={styles.name}>Memories AR</Text>
        <View style={{flexDirection:'row'}}>
        <Pressable 
            onPress={()=>navigation.navigate("FriendRequest",{userId:userId})}
            >
                <AntDesign name="addusergroup" size={32} color={Color.darkColor} style={{paddingRight:10}} />
        </Pressable>
        <Pressable 
            onPress={()=>navigation.navigate("ChatScreen")}
            >
            <Ionicons name="chatbubbles-outline" size={32} color="black" />
        </Pressable>
        </View>
    </View>
  )
}

export default TopNavBar

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:Color.lightColor,
        alignItems:'center',
        width:'100%',
        paddingHorizontal:15,
        paddingVertical:10,
        top:40,
        zIndex:100,
        position:'absolute',
    },
    name:{
        fontWeight:'bold',
        fontSize:20,
        color:Color.blackColor
    },
    logo2:{
        width:50,
        height:40
    }  
})