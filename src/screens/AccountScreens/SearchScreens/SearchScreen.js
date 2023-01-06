import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import BottomNavBar from '../../../components/BottomNavBar'

const SearchScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>   
      <BottomNavBar navigation={navigation}/>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
},
})