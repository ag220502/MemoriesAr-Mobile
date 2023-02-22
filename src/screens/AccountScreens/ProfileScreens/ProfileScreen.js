import { Pressable, ScrollView,  StyleSheet, Text, View, Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import Post from '../../../components/ProfilePost'; 
import Scrapbooks from '../../../components/ProfileScrapbooks';
import Color from './../../../ColourThemes/theme1.js'
import BottomNavBar from './../../../components/BottomNavBar.js'

import AsyncStorage from '@react-native-async-storage/async-storage';


const ProfileScreen = ({navigation}) => {
	const [id,setId] = useState("")
	const getId= async()=>
	{
		const user  = await AsyncStorage.getItem("userId")
		setId(user)
	}
	getId()
	const [fname,setFName] = useState(null)
	const [lname,setLName] = useState(null)
	const [bio,setBio] =  useState(null)
	const [frNum,setFrNum] = useState(0)
	const [postNum,setPostNum] = useState(0)

	const getUserData= async()=>
	{
		try
        {
            await fetch ('http://localhost:3000/api/users/profile/'+id,{
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				  }
			}).then(
                res => {
					if(res.status===200)
					{
						res.json().then((data)=>{
							if(data[0].id)
							{
								setFName(data[0].firstName)
								setLName(data[0].lastName)
								setBio(data[0].bio)
							}
						})
					}
					else if(res.status==400)
					{
						console.log(res)
					}
            })
			await fetch ('http://localhost:3000/api/users/profile/friendsNum/'+id,{
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				  }
			}).then(
                res => {
					if(res.status===200)
					{
						res.json().then((data)=>{
							setFrNum(data[0].Num)
						})
					}
					else if(res.status==400)
					{
						console.log("Error")
					}
            })
			await fetch ('http://localhost:3000/api/users/profile/postNum/'+id,{
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				  }
			}).then(
                res => {
					if(res.status===200)
					{
						res.json().then((data)=>{
							setPostNum(data[0].Num)
						})
					}
					else if(res.status==400)
					{
						console.log("Error")
					}
            })
        }
        catch(err)
        {
            console.log(err)
        }
	}
	getUserData()
	

	const [showPosts,setShowPosts] = useState(true);
	return (
	<View>
		<View style={styles.container}>
		<View style={styles.search}>
			<Pressable style={styles.buttonView}
				onPress={()=>navigation.navigate("MainScreen")}
			>
				<Ionicons name="chevron-back" size={30} color={Color.textDarkColor} />
			</Pressable>
			<Pressable style={styles.buttonView}
				onPress={()=>navigation.navigate("Settings",{
					userId:id
				})}
			>
				<Ionicons name="ios-settings" size={24} color={Color.textDarkColor} />
			</Pressable>
		</View>
		<View style={styles.main}>
			<View style={styles.profile_img}>
			<Image style={styles.pofile} source={require('../../../images/ProfileImages/profile8.jpg')}/>
			</View>
			<View style={styles.profile_data}>
			<View style={styles.dataView}>
				<Text style={styles.dataNum}>{frNum}</Text>
				<Text style={styles.dataName}>Friends</Text>
			</View>
			<View style={styles.dataView}>
				<Text style={styles.dataNum}>{postNum}</Text>
				<Text style={styles.dataName}>Memories</Text>
			</View>
			</View>
			<View style={styles.userNameView}>
			<Text style={styles.userName}>{fname + " " + lname}</Text>
			</View>
			{bio? <View style={styles.profile_bio}>
			<Text style={styles.bio_text}>{bio}</Text>
			</View>:<></>}
			<View style={styles.followButtonView}>
			<Pressable style={styles.FollowbuttonView} onPress={()=>{navigation.navigate("EditProfile",{
				userId:id,
				fname:fname,
				lname:lname,
				bio:bio
			})}}>
				<Text style={styles.btnText}>Edit Profile</Text>
			</Pressable>
			</View>
			<View style={styles.tabView}>
			<View style={{flexDirection:'row'}}>
				<Text style={
				showPosts? styles.tabTextActive: styles.tabText}
				onPress={()=>setShowPosts(true)}
				>Memories</Text>
			</View>
			<View style={{flexDirection:'row'}}>
				<Text style={
				showPosts? styles.tabText: styles.tabTextActive}
				onPress={()=>setShowPosts(false)}
				> Scrapbooks</Text>
			</View>
			</View>
			<ScrollView style={styles.postsView}>
			{
				showPosts ? <Post/> : <Scrapbooks/>
			}
			</ScrollView>
		</View>
		<BottomNavBar navigation={navigation}/>
		</View>
	</View>
	)
	}

	export default ProfileScreen

	const styles = StyleSheet.create({
	container:{
		width:'100%',
		height:'100%',
		backgroundColor:Color.darkColor,
		alignItems:'center',
		justifyContent:'center'
	},
	search:{
		width:'95%',
		height:'15%',
		top:40,
		paddingVertical:20,
		paddingHorizontal:5,
		justifyContent:'space-between',
		flexDirection:'row'
	},
	buttonView:{
		width:45,
		height:45,
		backgroundColor:Color.lightColor,
		borderRadius:10,
		justifyContent:'center',
		alignItems:'center'
	},
	main:{
		flexDirection:'column',
		backgroundColor:Color.lightColor,
		width:'100%',
		height:'85%',
		borderTopLeftRadius:'60',
		borderTopRightRadius:'60',
		paddingTop:20,
	},
	FollowbuttonView:{
		height:45,
		backgroundColor:Color.darkColor,
		borderRadius:10,
		justifyContent:'center',
		alignItems:'center',
		padding:10
	},
	FollowText:{
		color:Color.textDarkColor
	},
	pofile:{
		alignSelf:'center',
		height:100,
		width:100,
		borderRadius:100
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
	profile_data:{
		flexDirection:'row',
		justifyContent:'space-between',
		
	},
	dataView:{
		width:'40%',
		flexDirection:'column',
		alignItems:'center',

	},
	dataNum:{
		fontWeight:'bold',
		fontSize:17,
		paddingBottom:2
	},
	dataName:{
		fontSize:16
	},
	userNameView:{
		alignSelf:'center',
		marginVertical:10
	},
	userName:{
		fontSize:23,
		padding:5,
		fontWeight:'bold'
	},
	profile_bio:{
		marginVertical:15,
		paddingHorizontal:15
	},
	bio_text:{
		fontSize:16,
		lineHeight:24,
		fontWeight:'500'
	},
	followButtonView:{
		width:'100%',
		flexDirection:'row',
		justifyContent:'space-evenly',
		padding:10,
		marginTop:10
	},
	btnText:{
		color:Color.textLightColor,
		fontWeight:'500',
		fontSize:16
	},
	tabView:{
		flexDirection:'row',
		justifyContent:'space-evenly',
		marginTop:30,
		alignItems:'center'
	},
	tabText:{
		fontSize:20,
		justifyContent:'center',
		alignItems:'center',
		paddingHorizontal:5,
		paddingVertical:3,
		fontWeight:'500',
		color:'grey'
	},
	tabTextActive:{
		fontSize:20,
		justifyContent:'center',
		alignItems:'center',
		paddingHorizontal:5,
		paddingVertical:3,
		fontWeight:'bold'
	},
	postsView:{
		marginTop:20,
	}
	})