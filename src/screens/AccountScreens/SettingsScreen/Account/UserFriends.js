import { Pressable, ScrollView, StatusBar, StyleSheet, Text,Image, TextInput, View,ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Color from './../../../../ColourThemes/theme1.js'
import { WEB } from '../../../../../var.js';
import {getAllFriends} from "../../../fetchData/friendsData.js"

const UserFriends = ({navigation,route}) => {
	const [loading,setLoading] = useState(true)
	const [frnd,setFrnd] = useState([])
	const [getData,setGetData] = useState(false)
	const getAllData = () => {
		getAllFriends(route.params.userId).then((data)=>{
			setFrnd(data)
			console.log(data)
			setLoading(false)
		})
	}

	if(!getData)
	{
		getAllData()
		setGetData(true)
	}	


	let chat = [
		{
			id:1,
			name:'Ken',
			profile_image:require('../../../../images/ProfileImages/profile10.jpg')
		},
		{
			id:2,
			name:'Leona',
			profile_image:require('../../../../images/ProfileImages/profile9.jpg')
		},
		{
			id:3,
			name:'Kenneth',
			profile_image:require('../../../../images/ProfileImages/profile8.jpg')
			},
			{
		id:4,
				name:'Lee',
				profile_image:require('../../../../images/ProfileImages/profile7.jpg')
			},
			{
		id:5,
				name:'Alicia',
				profile_image:require('../../../../images/ProfileImages/profile6.jpg')
			},
			{
		id:6,
				name:'Harold',
				profile_image:require('../../../../images/ProfileImages/profile4.jpg')
			},
			{
		id:7,
				name:'Melissa',
				profile_image:require('../../../../images/ProfileImages/profile2.jpg')
			},

	]
	const [keyword,setKeyword] = useState('')
	const [showbar,setShowBar] = useState(false)

	if(loading)
	{
		return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
			<ActivityIndicator size={"large"}/>
		</View>)
	}
	return (
		<View style={styles.container}>
			<StatusBar barStyle={"light-content"}/>
			<View style={styles.search}>
				<Pressable style={styles.buttonView}
					onPress={()=>navigation.navigate("Settings",{userId:route.params.userId})}
				>
					<Ionicons name="chevron-back" size={30} color={Color.textDarkColor} />
				</Pressable>
				<View style={styles.headView}>
					{showbar ? 
						<TextInput style={styles.searchInput} placeholder="Search" onChangeText={(text)=>setKeyword(text)}/>
						:
						<Text style={styles.head}>Friends</Text>}
					
				</View>
				{showbar ? 
					<Pressable style={styles.buttonView} onPress={()=>{setShowBar(false);setKeyword('')}}>
						<Entypo name="cross" size={30} color={Color.textDarkColor} />
					</Pressable>: 
					<Pressable style={styles.buttonView} onPress={()=>setShowBar(true)}>
						<FontAwesome name="search" size={24} color={Color.textDarkColor} />
					</Pressable>}
			</View>
			<ScrollView style={styles.main}>
				{
					frnd.filter((data)=>{
						if(data.firstName.toLowerCase().includes(keyword.toLowerCase())){
							return data
						}
						else if(keyword===''){
							return data
						}
					}).map((data,index)=>{
						return(
						<Pressable key={index} style={styles.containerUser} onPress={
							()=>{
								navigation.navigate("OtherUserProfileScreen",{logged:route.params.userId,userId:data.userId,backTo:"UserFriends"})
							}
						}>
						<View style={styles.user_det}>
							<View>
								{
									data.profilePhoto==null || data.profilePhoto===""?
									<Image source={require('../../../../images/ProfileImages/default.png')} style={styles.profile_img}/>
									:
									<Image source={{uri:data.profilePhoto}} style={styles.profile_img}/>
								}
							</View>
							<View>
								<Text style={styles.user_name}>{data.firstName} {data.lastName}
								</Text>
							</View>
						</View>

						<View style={styles.user_det}>
							<Entypo name="dots-three-horizontal" size={24} color={Color.blackColor} />
						</View>
						</Pressable>
						)
					})
				}
				
			</ScrollView>
		</View>
	)
	}

	export default UserFriends

	const styles = StyleSheet.create({
	container:{
		width:'100%',
		height:'100%',
		backgroundColor:Color.darkColor,
		alignItems:'center',
		justifyContent:'center'
	},
	headView:{
		justifyContent:'center',
		alignItems:'center',
		height:45,
		width:250
	},
	head:{
		color:Color.textLightColor,
		fontSize:25,
		fontWeight:'bold'
	},
	search:{
		width:'90%',
		height:'15%',
		top:40,
		paddingVertical:20,
		paddingHorizontal:10,
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
		height:'75%',
		borderTopLeftRadius:'60',
		borderTopRightRadius:'60',
		paddingTop:20,
	},
	searchInput:{
		height:45,
		width:'100%',
		backgroundColor:Color.lightColor,
		borderRadius:20,
		padding:10,
		fontSize:16
	},
	profile_img:{
		width:50,
		height:50,
		borderRadius:100
	},
	user_name:{
		fontSize:16,
		fontWeight:'bold',
		marginHorizontal:20
	},
	containerUser:{
		width:'80%',
		alignSelf:'center',
		marginVertical:10,
		paddingVertical:10,
		height:60,
		justifyContent:'space-between',
		flexDirection:'row',
	},
	user_det:{
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center',
		flexDirection:'row'
	}
	})