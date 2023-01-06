import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';  

const BottomNavBar = ({navigation}) => {
  return (
    <View style={styles.NavContainer}> 
        <View style={styles.NavBar}>
            <Pressable
                style={styles.IconBehave}
                onPress={()=>navigation.navigate('MainScreen')}
            >
                <Ionicons name="home" size={32} color="#F5F6FA" />
            </Pressable>
            <Pressable
                style={styles.IconBehave}
                onPress={()=>navigation.navigate('SearchScreen')}
            >
                <Ionicons name="search" size={32} color="#F5F6FA" />
            </Pressable>
            <Pressable
                style={styles.IconBehave}
                onPress={()=>navigation.navigate('CreateScreen')}
            >
                <MaterialIcons name="post-add" size={32} color="#F5F6FA" />
            </Pressable>
            <Pressable
                style={styles.IconBehave}
                onPress={()=>navigation.navigate('ProfileScreen')}
            >
                <FontAwesome name="user-circle-o" size={32} color="#F5F6FA" />
            </Pressable>
            <Pressable
                style={styles.IconBehave}
                onPress={()=>navigation.navigate('MenuScreen')}
            >
                <Ionicons name="menu" size={32} color="#F5F6FA" />
            </Pressable>
        </View>
    </View>
  )
}

export default BottomNavBar

const styles = StyleSheet.create({
    NavContainer:{
        position:'absolute',
        bottom:0,
        alignItems:'center',
    },
    NavBar:{
        flexDirection:'row',
        backgroundColor:'#F50057',
        width:'100%',
        justifyContent:'space-evenly',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingVertical:10,
        zIndex:100
    },
    IconBehave:{
        padding:14,
        shadowColor: '#F5F6FA',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 2,
    }
})