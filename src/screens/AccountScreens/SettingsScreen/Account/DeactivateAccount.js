import { StyleSheet, Text, View, StatusBar, Pressable, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import deletePic from '../../../../images/SettingImages/deactivate.png'
import Color from './../../../../ColourThemes/theme1.js'

const DeactivateAccount = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"}/>
      <View style={styles.search}>
          <Pressable style={styles.buttonIconView}
              onPress={()=>navigation.navigate("Settings")}
          >
              <Ionicons name="chevron-back" size={30} color={Color.textDarkColor} />
          </Pressable>
          <Text style={styles.head}>Deactivate Account</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.picView}>
          <Image source={deletePic} resizeMode={'contain'} style={styles.pic}/>
        </View>
        <View style={styles.textView}>
        <Text style={styles.deleteText}>When you press the Deactivate Button, your photos, comments, and likes will be hidden until you reactivate your account by logging back in .</Text>
        </View>
        <Pressable style={styles.buttonView}><Text style={styles.buttonText}>Deactivate Account</Text></Pressable>
      </View>
    </View>
  )
}

export default DeactivateAccount

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
  buttonView:{
    width:45,
    height:45,
    backgroundColor:Color.lightColor,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-start',
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
    alignItems:'center',
    justifyContent:'flex-start',
    flexDirection:'column'
  },
  head:{
    position:'absolute',
    alignSelf:'center',
    top:28,
    fontSize:24,
    color:Color.lightColor,
    fontWeight:'bold',
  },
  picView:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    height:400,
  },
  pic:{
    width:'70%',
    height:'70%',
  },
  textView:{
    paddingHorizontal:20,
    marginVertical:20
  },
  deleteText:{
    fontSize:17,
    lineHeight:25,
    fontWeight:'500'
  },
  buttonView:{
    borderRadius:30,
    backgroundColor:Color.darkColor,
    padding:10,
    margin:20,
    height:45
  },
  buttonText:{
      textAlign:'center',
      fontSize:20,
      color:Color.whiteColor,
      paddingHorizontal:20,
  }
})