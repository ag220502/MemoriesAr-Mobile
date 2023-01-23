import { StyleSheet, Text, View,StatusBar,Pressable,Image,ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import Color from './../../../../ColourThemes/theme1.js'
const SavedMemories = ({navigation}) => {
  const postInfo = [
    {
        postProfile:require('../../../../images/ProfileImages/posts.png'),
    },
    {
        postProfile:require('../../../../images/ProfileImages/posts.png'),
    },
    {
        postProfile:require('../../../../images/ProfileImages/posts.png'),
    },
    {
        postProfile:require('../../../../images/ProfileImages/posts.png'),
    },
    {
        postProfile:require('../../../../images/ProfileImages/posts.png'),
    },
    {
        postProfile:require('../../../../images/ProfileImages/posts.png'),
    },
    {
      postProfile:require('../../../../images/ProfileImages/posts.png'),
    },
    {
        postProfile:require('../../../../images/ProfileImages/posts.png'),
    },
    {
        postProfile:require('../../../../images/ProfileImages/posts.png'),
    },
    {
        postProfile:require('../../../../images/ProfileImages/posts.png'),
    },
    {
        postProfile:require('../../../../images/ProfileImages/posts.png'),
    },
    {
        postProfile:require('../../../../images/ProfileImages/posts.png'),
    }
  ]
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"}/>
      <View style={styles.search}>
          <Pressable style={styles.buttonIconView}
              onPress={()=>navigation.navigate("Settings")}
          >
              <Ionicons name="chevron-back" size={30} color={Color.textDarkColor} />
          </Pressable>
          <Text style={styles.head}>Saved Memories</Text>
      </View>
      <ScrollView style={styles.main}>
        <View style={styles.allPosts}>
          {
            postInfo.map((data,index)=>{
              return(
                  <View style={styles.post} key={index}>
                      <Image source={data.postProfile} style={styles.pic}/>
                  </View>
              )
            })
          } 
        </View>
      </ScrollView>
    </View>
  )
}

export default SavedMemories

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:Color.darkColor,
    alignItems:'center',
    justifyContent:'center'
  },
  search:{
    width:'90%',
    height:'15%',
    top:40,
    paddingVertical:20,
    paddingHorizontal:10,
    alignItems:'center'
  },
  buttonIconView:{
    width:45,
    height:45,
    backgroundColor:Color.lightColor,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-start',
  },
  main:{
    flexDirection:'column',
    backgroundColor:Color.lightColor,
    width:'100%',
    height:'85%',
    borderTopLeftRadius:'60',
    borderTopRightRadius:'60',
    paddingTop:20,
    flexDirection:'column'
  },
  head:{
    position:'absolute',
    alignSelf:'center',
    top:28,
    fontSize:24,
    color:Color.textLightColor,
    fontWeight:'bold',
  },
  allPosts:{
    justifyContent:'space-evenly',
    display:'flex',   
    flexDirection:'row',
    flexWrap:'wrap',
    alignSelf:'center'
  },
  post:{
      width:150,
      height:150,
      marginVertical:30,
      justifyContent:'center',
      alignItems:'center'

  },
  pic:{
      width:160,
      height:180,
      borderRadius:25,
  }
})