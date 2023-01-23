import { StyleSheet, Text, View, Image, Pressable,TextInput  } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import Color from './../../../../ColourThemes/theme1.js'
const ChangePassword = ({navigation}) => {
  return(
    <View style={styles.container}>
      <View style={styles.search}>
        <Pressable style={styles.buttonView}
            onPress={()=>navigation.navigate("Settings")}
        >
            <Text style={styles.btnText}>Cancel</Text>
        </Pressable>
        <Text style={styles.headText}>Change Password</Text>
        <Pressable style={styles.buttonView}
            onPress={()=>navigation.navigate("Settings")}
        >
            <Text style={styles.btnText}>Save</Text>
        </Pressable>
      </View>
      <View style={styles.main}>
        <View style={styles.profile_img}>
          <Image style={styles.pofile} source={require('../../../../images/ProfileImages/profile.png')}/>
        </View>
        <View style={styles.fieldDisplay}>
          <View style={styles.inputView}>
            <Text style={styles.label}>Enter Current Password</Text>
            <TextInput
            style={styles.input}
            secureTextEntry
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Enter New Password</Text>
            <TextInput
            style={styles.input}
            secureTextEntry
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Confirm New Password</Text>
            <TextInput
            style={styles.input}
            secureTextEntry
            />
          </View>
        </View>
        <Image source={require('../../../../images/LoginImages/newPass.png')} resizeMode={'contain'} style={styles.illusImg}/>
      </View>
    </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:Color.darkColor
  },
  search:{
    width:'100%',
    top:40,
    paddingVertical:20,
    justifyContent:'space-between',
    paddingHorizontal:20,
    flexDirection:'row'
  },
  headText:{
    fontSize:22,
    fontWeight:'bold',
    alignSelf:'center',
    justifyContent:'center',
    color:Color.textLightColor
  },
  selectPic:{
    position:'absolute',
    backgroundColor:Color.darkColor,
    padding:10,
    borderRadius:20,
    bottom:-10,
    right:-10
  },
  buttonView:{
    height:45,
    paddingHorizontal:10,
    backgroundColor:Color.lightColor,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  btnText:{
    color:Color.textDarkColor,
    fontWeight:'700'
  },
  main:{
    flexDirection:'column',
    bottom:0,
    position:'absolute',
    backgroundColor:Color.lightColor,
    width:'100%',
    height:'80%',
    borderTopLeftRadius:'60',
    borderTopRightRadius:'60',
    paddingTop:20,
  },
  pofile:{
    alignSelf:'center',
  },
  profile_img:{
    position:'absolute',
    width:100,
    height:100,
    backgroundColor:'black',
    alignSelf:'center',
    marginTop:-50,
    borderRadius:100
  },
  label:{
    fontSize:18,
    color:Color.textMidColor,

  },
  inputView:{
    width:'80%',
    alignSelf:'center',
    marginVertical:10
  },  
  input:{
    backgroundColor:Color.whiteColor,
    width:'75%',
    borderRadius:10,
    height:40,
    marginVertical:7,
    padding:10,
    fontSize:17,
    shadowColor: Color.blackColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  fieldDisplay:{
    marginTop:50,
    alignItems:'center'
  },
  illusImg:{

    alignSelf:'center',
    marginVertical:30
  }
})