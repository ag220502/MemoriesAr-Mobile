import { StyleSheet, Text, View, StatusBar, Pressable, Image,Alert } from 'react-native'
import React,{useContext} from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import deletePic from '../../../../images/SettingImages/deactivate.png'
import Color from './../../../../ColourThemes/theme1.js'
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../../context/AuthContext.js';
import { WEB } from '../../../../../var';
const DeactivateAccount = ({navigation,route}) => {
	const {logout} = useContext(AuthContext)
	const deactivateAcc= async()=>{
		try{
			await fetch (WEB+'/api/users/deactivate',{
				method:"PATCH",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body:JSON.stringify({
					"id":route.params.userId
				})
			}).then(
				res => {
					if(res.status===200)
					{
						res.json().then((data)=>{
							if(data=="Account Deactivated")
							{

								Alert.alert("Account Deactivated Successfully","",[{
									text:"Ok",
									onPress:async ()=>{
										console.log("Account Deactivated")
										try
										{
											logout()
										}
										catch(err)
										{
											console.log(err)
										}
									}
								}])
							}
						})
					}
					else if(res.status==400)
					{
						console.log("Res"+res)
					}
			})
		}
		catch(err)
		{
			console.log(err)
		}
	}

	return (
		<View style={styles.container}>
			<StatusBar barStyle={"light-content"}/>
			<View style={styles.search}>
				<Pressable style={styles.buttonIconView}
					onPress={()=>navigation.navigate("Settings",{userId:route.params.userId})}
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
				<Pressable 
					style={styles.buttonView}
					onPress={()=>{
						Alert.alert("Are you sure?","",[{
							text:"Cancel",
							onPress:()=>{
							}
							},
							{
								text:"Ok",
								onPress:()=>{
									deactivateAcc()
								}
							}])
						}}
				><Text style={styles.buttonText}>Deactivate Account</Text></Pressable>
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