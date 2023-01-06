import { StyleSheet, Text, View,Image, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import logo from '../images/HomeImages/logo.png' 
import Ionicons from '@expo/vector-icons/Ionicons';

const TopNavBar = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image
            source={logo}
            style={styles.logo2}
        />
        <Text style={styles.name}>Memories AR</Text>
        <Pressable 
            onPress={()=>navigation.navigate("ChatScreen")}
            >
            <Ionicons name="chatbubbles-outline" size={32} color="black" />
        </Pressable>

    </View>
  )
}

export default TopNavBar

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#F5F6FA',
        alignItems:'center',
        width:'100%',
        paddingHorizontal:15,
        paddingVertical:10,
        top:40,
        zIndex:100,
        position:'absolute',
        borderBottomWidth:0.5,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    name:{
        fontWeight:'bold',
        fontSize:20,
        color:'#000'
    },
    logo2:{
        width:50,
        height:40
    }  
})