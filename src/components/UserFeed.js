import { StyleSheet, Text, View,FlatList,Image, Pressable,ScrollView } from 'react-native'
import React,{useState} from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Entypo } from '@expo/vector-icons';
import Color from '../ColourThemes/theme1'

import { getHomeFeed,getAllData } from '../screens/fetchData/homeScreenData';
import { checkLiked, checkSaved } from '../screens/fetchData/viewPost';


const UserFeed = ({navigation,userId}) => {
	const [postInfo,setPostInfo] = useState([])
	if(!postInfo.length)
	{
		getHomeFeed(userId).then((res)=>{
			setPostInfo(res)
		})
	}
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
									<Image
										source={{uri:item.profilePhoto}}
										style={styles.userProfile}
									/>
									<Text style={styles.userName}>{item.firstName + " "} {item.lastName?item.lastName:""}</Text>
								</View>
								<View style={styles.moreOptions}>
									<Entypo name="dots-three-horizontal" size={24} color="black" />
								</View>
							</View>
							<View style={styles.userPostPic}>
								<Image
									source={{uri:item.PhotoLink}}
									style={styles.postImage}
								/>
								<Pressable 
									style={styles.postBtn}
									onPress={()=>{
										navigation.navigate("ViewPost",{
											postId:item.postId
										})	
									}
								}
								>
									<Text style={styles.postBtnText}>View Post</Text>
								</Pressable>
							</View>
							<View style={styles.postOptions}>
								<Pressable style={styles.postOpt}>
									{
										liked ? 
										<Entypo 
											name="heart" 
											size={30} 
											color="black" 
										/>
										:
										<Entypo 
											name={"heart-outlined"} 
											size={30} 
											color={Color.textMidColor}
											onPress={()=>{
												console.log("Liked")
											}}
										/>
									}
									<Text style={styles.optionNum}>{item.PostLikes}</Text>
								</Pressable>
								<Pressable 
									style={styles.postOpt}
									onPress={()=>{navigation.navigate("Comments",{postId:item.postId,userId:userId})}}
								>
									<FontAwesome 
										name="commenting" 
										size={24} 
										color={Color.textMidColor} 
									/>
									<Text style={styles.optionNum}>{item.PostComments}</Text>
								</Pressable>
								<Pressable style={styles.postOpt}>
								<Ionicons 
									name="bookmark-outline" 
									size={24} 
									color={Color.textMidColor}
								/>
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
		marginVertical:50,
		backgroundColor:Color.lightColor
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
	postOptions:{
		width:'60%',
		flexDirection:'row',
		justifyContent:'space-between',
		paddingVertical:5,
		paddingBottom:20
	},
	postOpt:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
	},
	optionNum:{
		paddingHorizontal:5,
		fontWeight:'400',
		color:Color.blackColor,
		fontSize:16,
		
	}
})