import { StyleSheet, Text, View, Image,SafeAreaView } from 'react-native'
import React from 'react';
import bg from '../../images/FirstScreenImages/img1.png'
import logo from '../../images/FirstScreenImages/logo1.png'

const FirstScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={bg}
        style={styles.bg}
      />
      <SafeAreaView style={styles.container1}>
        <Image
        source={logo}
        />
      </SafeAreaView>
    </View>
  )
}

export default FirstScreen

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#F5F6FA'
    },
    bg:{
        position:'absolute',
        top:0,
        width:'100%',
        height:'100%',
        zIndex:-1
    },
    container1:{
        display:'flex',
        width:'100%',
        height:'35%',
        alignItems:'center',
        justifyContent:'center'
    }
})