import { StyleSheet, Text, View,FlatList,Image, Pressable,ScrollView,Modal,Alert } from 'react-native'
import React,{useState,useEffect} from 'react'

import { Entypo } from '@expo/vector-icons';
import Color from '../ColourThemes/theme1'

import { getHomeFeed,getAllData } from '../screens/fetchData/homeScreenData';
import { checkLiked, checkSaved } from '../screens/fetchData/viewPost';
import {reportPost} from '../screens/fetchData/report.js'

const UserFeed = ({navigation,userId}) => {
	const [postInfo,setPostInfo] = useState([])
	const [openModel,setOpenModel] = useState(false)
	const [loading,setLoading] = useState(false)
	const handleOnPress = () => {
        setOpenModel(!openModel)
    }

	if(!postInfo.length)
	{
		getHomeFeed(userId).then((res)=>{
			setPostInfo(res)
		})
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
			{	
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
								<Pressable 
									style={styles.moreOptions}
									onPress={()=>{
										handleOnPress()
									}}
								>
									<Entypo name="dots-three-horizontal" size={24} color="black" />
								</Pressable>
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
										<Pressable style={styles.modalOption}>
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
	
})