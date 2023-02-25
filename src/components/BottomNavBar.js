import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';  
import Color from './../ColourThemes/theme1.js'
import { FontAwesome5 } from '@expo/vector-icons';

const BottomNavBar = ({navigation}) => {
  return (
    <View style={styles.NavContainer}> 
        <View style={styles.NavBar}>
            <Pressable
                style={styles.IconBehave}
                onPress={()=>navigation.navigate('MainScreen')}
            >
                <Ionicons name="home" size={32} color={Color.textLightColor} />
            </Pressable>
            <Pressable
                style={styles.IconBehave}
                onPress={()=>navigation.navigate('ExploreScreen')}
            >
                <Ionicons name="search" size={32} color={Color.textLightColor} />
            </Pressable>
            <Pressable
                style={styles.IconBehave}
                onPress={()=>navigation.navigate('CreateScreen')}
            >
                <MaterialIcons name="post-add" size={32} color={Color.textLightColor} />
            </Pressable>
            <Pressable
                style={styles.IconBehave}
                onPress={()=>navigation.navigate('ProfileScreen')}
            >
                <FontAwesome name="user-circle-o" size={32} color={Color.textLightColor} />
            </Pressable>
            <Pressable
                style={styles.IconBehave}
                onPress={()=>navigation.navigate('MenuScreen')}
            >
                <FontAwesome5 name="map-marked-alt" size={32} color={Color.textLightColor} />
                {/* <Ionicons name="menu" size={32} color={Color.textLightColor} /> */}
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
        backgroundColor:Color.darkColor,
        width:'100%',
        justifyContent:'space-evenly',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingVertical:10,
        zIndex:100
    },
    IconBehave:{
        padding:14,
        shadowColor: Color.lightColor,
        elevation: 2,
    }
})