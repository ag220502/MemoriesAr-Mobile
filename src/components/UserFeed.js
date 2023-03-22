import { StyleSheet, Text, View,FlatList,Image, Pressable,ScrollView,Modal,Alert } from 'react-native'
import React,{useState,useEffect} from 'react'

import { Entypo } from '@expo/vector-icons';
import Color from '../ColourThemes/theme1'

import { getHomeFeed,getAllData } from '../screens/fetchData/homeScreenData';
import { checkLiked, checkSaved } from '../screens/fetchData/viewPost';
import {reportPost} from '../screens/fetchData/report.js'
import {suggetUser} from "./../screens/fetchData/searchData.js"
const UserFeed = ({navigation,userId}) => {
	const [postInfo,setPostInfo] = useState([])
	const [openModel,setOpenModel] = useState(false)
	const [loading,setLoading] = useState(false)
	const [suggUser,setSuggUser] = useState([])
	const handleOnPress = () => {
        setOpenModel(!openModel)
    }

	const allSuggData = async () => {
		if(!suggUser.length)
		{
			const sugdata = await suggetUser(userId)
			if(sugdata.length)
			{
				setSuggUser(sugdata)
			}
			// setSuggUser(sugdata)
		}
	}
	if(!postInfo.length)
	{
		getHomeFeed(userId).then((res)=>{
			setPostInfo(res)
		})
		if(!postInfo.length)
		{
			allSuggData()
		}
	}
	useEffect(() => {
		if(loading)
		{
			return (
				<View style={styles.loading}>
					<Text>Loading...</Text>
				</View>
			)
		}
	}, [loading])
	
	
	return (
		<ScrollView style={styles.container}>
			{ 	userId && postInfo.length ?
				postInfo.map((item,index)=>{
					
					let liked=false;
					let saved = false;
					
					Promise.all(checkLiked(item.postId,userId)).then(
						(res)=>{
							liked = res
							
						}
					)
					Promise.all(checkSaved(item.postId,userId)).then(
						(res)=>{
							saved = res
						}
					)

					return (
						<View style={styles.userPost} key={index}>
							<View style={styles.postUserDetails}>
								<View style={styles.userDetails}>
									{
										item.profilePhoto==null || item.profilePhoto==="" ? <Image style={styles.userProfile} source={require('../images/ProfileImages/default.png')}/> : <Image style={styles.userProfile} source={{uri:item.profilePhoto}}/>
									}
									
									<Text style={styles.userName}>{item.firstName + " "} {item.lastName?item.lastName:""}</Text>
								</View>
								{
									item.userId===userId ? null : <Pressable 
									style={styles.moreOptions}
									onPress={()=>{
										handleOnPress()
									}}
										>
											<Entypo name="dots-three-horizontal" size={24} color="black" />
										</Pressable>
										}
							</View>
							<Modal
								animationType='slide'
								transparent={true}
								visible={openModel}
							>
                            	<View style={styles.modalView}>
                                	<View style={styles.modal}>

										<Pressable 
											style={styles.modalOption}
											onPress={async ()=>{
												setOpenModel(!openModel)
											navigation.navigate('ReportPost',{
												postId:item.postId,
												userId:userId,
												backTo:'MainScreen'
											})
											}}
										>
											<Text>Report Memory</Text>
										</Pressable>
										<Pressable 
											style={styles.modalOption}
											onPress={async ()=>{
												setOpenModel(!openModel)
											navigation.navigate('ReportUsers',{
												userId:userId,
												reportedId:item.userId,
												backTo:'MainScreen'
											})
											}}
										>
											<Text>Report User</Text>
										</Pressable>
										<Pressable 
											style={styles.modalOption}
											onPress={()=>{
												setOpenModel(!openModel)
												if(item.userId===userId)
												{
													navigation.navigate('ProfileScreen',{
														userId:userId,
														backTo:'MainScreen'
													})
													return
												}
												navigation.navigate('OtherUserProfileScreen',{
													logged:userId,
													userId:item.userId,
													backTo:'MainScreen'
												})
											}}
										>
											<Text>View Profile</Text>
										</Pressable>
										<Pressable 
											style={styles.modalOption}
											onPress={()=>{
												handleOnPress()
											}}
										>
											<Text>Close</Text>
										</Pressable>
									</View>
								</View>
							</Modal>

							<View style={styles.userPostPic}>
								
								<Image
									source={{uri:item.PhotoLink}}
									style={styles.postImage}
								/>
								<Pressable 
									style={styles.postBtn}
									onPress={()=>{
										navigation.navigate("ViewPost",{
											postId:item.postId,
											userId:userId,
										})	
									}
								}
								>
									<Text style={styles.postBtnText}>View Post</Text>
								</Pressable>
							</View>
						</View>
					)
				})
				:
				userId && suggUser.length ?
				<ScrollView>
					<Text style={styles.viewHead}>Suggested Users</Text>
						<ScrollView style={styles.suggView} horizontal={true}>
							{
								suggUser.length == 0 ? <Text style={{alignSelf:'center',paddingVertical:10}}>No Suggested Users</Text>:
								suggUser.map( (item,index)=>{
									return(
										<View style={styles.suggUser} key={index}>
											{
												item.profilePhoto == null || item.profilePhoto==""
												? 
												<Image source={require("../images/ProfileImages/default.png")} style={styles.suggProfileImg}/>
												:
												<Image source={{uri:item.profilePhoto}} style={styles.suggProfileImg}/>
											}
											<Text style={styles.usrText}>{item.firstName}</Text>
											<View style={styles.btnMainView}>
												<Pressable 
													style={styles.btnView}
													onPress={async ()=>{
														sendRequest(route.params.userId,item.id).then((data)=>{
															if(data == 'Request Sent Successfully')
															{
																Alert.alert("Request Sent Successfully")
															}
														})
													}}
												>
													<Text style={styles.btnText}> Add Firend </Text>
												</Pressable>
												<Pressable 
													style={styles.btnView}
													onPress={()=>{
														navigation.navigate('OtherUserProfileScreen',{logged:route.params.userId,userId:item.id,backTo:'ExploreScreen'})
													}}
												>
													<Text style={styles.btnText}> Profile </Text>
												</Pressable>
											</View>
										</View>	
									)
								})
							}
							
						</ScrollView>
				</ScrollView>
				:
				<View >
					<Text style={{fontSize:17,alignSelf:'center',fontWeight:'700'}}>No Posts Available</Text>
				</View>
			}
		</ScrollView>
	)
}

export default UserFeed

const styles = StyleSheet.create({
	container:{
		width:'100%',
		backgroundColor:Color.lightColor,
		marginBottom:50
	},
	modalView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:22
    },
	// closeBtn:{
	// 	position:'absolute',
	// 	top:10,
	// 	right:10
	// },
	modalOption:{
		padding:15,
		borderBottomWidth:0.3,
		width:'100%',
		borderBottomColor:Color.midColor,
	},
    modal:{
        margin:10,
        backgroundColor:Color.whiteColor,
        borderRadius:20,
        padding:15,
        alignItems:'center',
        width:'70%',
        shadowColor:Color.midColor,
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.5,
        shadowRadius:4,
        elevation:5
    },

	userPost:{
		width:'90%',
		alignSelf:'90%',
		alignSelf:'center'
	},
	postUserDetails:{
		width:"100%",
		paddingVertical:10,
		flexDirection:'row',
		justifyContent:'space-between',
	},
	userDetails:
	{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		alignContent:'flex-start'
	},
	userProfile:{
		height:50,
		width:50,
		borderRadius:100
	},
	userName:{
		paddingHorizontal:15,
		fontSize:16,
		fontWeight:'700'
	},
	moreOptions:{
		justifyContent:'center',
		alignItems:'center'
	},
	userPostPic:{
		width:'100%',
		borderRadius:15,
		paddingVertical:5
	},
	postImage:{
		borderRadius:20,
		width:'100%',
		height:250
	},
	postBtn:{
		position:'absolute',
		backgroundColor:Color.whiteColor,
		padding:5,
		borderRadius:10,
		opacity:0.6,
		bottom:20,
		right:15
	},
	postBtnText:{
		color:Color.textDarkColor,
		fontWeight:'800',
		paddingHorizontal:8
	},
	suggView:{
		width:'100%',
		height:300,
		marginVertical:10,
	},
	suggUser:{
		width:200,
		height:250,
		borderWidth:0.5,
		borderRadius:10,
		marginHorizontal:15,
		marginVertical:15,
		justifyContent:'center',
		alignItems:'center'
	},
	usrText:{
		marginVertical:10,
		fontSize:16,
		fontWeight:'700'
	},
	btnMainView:{
		width:'100%',
		flexDirection:'row',
		justifyContent:'space-between',
		paddingHorizontal:10,
		marginVertical:15
	},
	btnView:{
		backgroundColor:Color.darkColor,

		padding:7,
		borderRadius:7
	},
	btnText:{
		color:Color.textLightColor,
		fontSize:16,
		
	},
	suggProfileImg:{
		width:100,
		height:100,
		borderRadius:100
	},
	viewHead:{
		fontSize:18,
		fontWeight:'700',
		paddingHorizontal:15,
		marginTop:10
	},
})