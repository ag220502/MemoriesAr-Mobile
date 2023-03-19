import { StyleSheet, Text, View, Image, Pressable,TextInput,Alert  } from 'react-native'
import React,{useContext, useState} from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import Color from './../../../../ColourThemes/theme1.js'
import { AuthContext } from '../../../context/AuthContext.js';
import { WEB } from '../../../../../var.js';
const ChangePassword = ({navigation,route}) => {
	const [password, setPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const {logout} = useContext(AuthContext);

	const changePassword= async ()=>{
		try{
			await fetch(WEB+'/api/auth/updatePass',{
				method:"PATCH",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body:JSON.stringify({
					"id":route.params.userId,
					"oldPassword":password,
					"newPassword":newPassword,
					"confirmPassword":confirmPassword,
				})
			}).then(
				res => {
					if(res.status===200)
					{
						res.json().then((data)=>{
							if(data=="Password Updated Successfully.")
							{
								Alert.alert(data,"",[{
									text:"Ok",
									onPress:()=>{
										Alert.alert("Please Sign In Again","",[{
											text:"Ok",
											onPress:()=>{
												logout()
											}
										}])
									}
								}])
							}
						})
					}
					else if(res.status==400)
					{
						Alert.alert("Error! Please Check Password","",[{
							text:"Ok"
						}])
					}
			})
		}
		catch(err){
			console.log(err)
		}
	}
	return(
		<View style={styles.container}>
		<View style={styles.search}>
			<Pressable style={styles.buttonView}
				onPress={()=>navigation.navigate("Settings",{userId:route.params.userId})}
			>
				<Text style={styles.btnText}>Cancel</Text>
			</Pressable>
			<Text style={styles.headText}>Change Password</Text>
			<Pressable style={styles.buttonView}
				onPress={()=>{
					if(password=="" || newPassword=="" || confirmPassword=="")
					{
						Alert.alert("Please fill all the fields")
					}
					else if(newPassword.trim().length<6)
					{
						Alert.alert("Password must be at least 6 characters long")
					}
					else if(newPassword!=confirmPassword)
					{
						Alert.alert("New Password and Confirm Password do not match")
					}
					else
					{
						changePassword()
					}
				}}
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
					value={password}
					onChangeText={(text)=>{setPassword(text)}}
				/>
			</View>
			<View style={styles.inputView}>
				<Text style={styles.label}>Enter New Password</Text>
				<TextInput
					style={styles.input}
					secureTextEntry
					value={newPassword}
					onChangeText={(text)=>{setNewPassword(text)}}
				/>
			</View>
			<View style={styles.inputView}>
				<Text style={styles.label}>Confirm New Password</Text>
				<TextInput
					style={styles.input}
					secureTextEntry
					value={confirmPassword}
					onChangeText={(text)=>{setConfirmPassword(text)}}
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