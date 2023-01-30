import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import BottomNavBar from '../../components/BottomNavBar'
import TopNavBar from '../../components/TopNavBar'
import UserFeed from '../../components/UserFeed'
const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark"/>
        <TopNavBar navigation={navigation}/>
        <UserFeed navigation={navigation}/>
        <BottomNavBar navigation={navigation}/>
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
})