import { Dimensions, StyleSheet, Text, View,Image, ImageBackground,Pressable,ScrollView,ActivityIndicator } from 'react-native'
import React from 'react'
import Color from '../../../ColourThemes/theme1'
import { StatusBar } from 'expo-status-bar'
import {viewPostById,checkLiked,checkSaved} from "../../../screens/fetchData/viewPost.js"
import Ionicons from "@expo/vector-icons/Ionicons"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Entypo } from '@expo/vector-icons';
import {likePost,unlikePost} from "../../../screens/fetchData/likePost.js"
import {savePost,unsavePost} from "../../../screens/fetchData/savePost.js"

const ViewPost =  ({navigation,route}) => {
	const {postId,userId} = route.params
	const [postInfo,setPostInfo] = React.useState([])
	const [liked,setLiked] = React.useState(false)
	const [saved,setSaved] = React.useState(false)

	const height = Dimensions.get('window').height * 0.4
	const width = Dimensions.get('window').width * 0.9
	const profWidth = width * 0.5
	const [loadData,setLoadData] = React.useState(false)
	const [loading,setLoading] = React.useState(false)
	const getData = async () => {
		setLoading(true)
		const data = await viewPostById(postId)
		console.log(data[0])
		setPostInfo(data[0])
		
		setLiked(await checkLiked(postId,userId))
		console.log(liked)
		setSaved(await checkSaved(postId,userId))
		setLoading(false)
	}
	if(!loadData)
	{
		getData()
		setLoadData(true)
	}
	if(loading)
	{
		return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
			<ActivityIndicator size={"large"}/>
		</View>)
	}
	return (
		<>
			<StatusBar barStyle={"light"}/>  
			<View style={styles.container}>
				<View style={
					{
						width:'95%',
						alignSelf:'center',
						height:70,
						marginTop:50,
						flexDirection:'row',
						justifyContent:'space-evenly',
						alignItems:'center',
						shadowOffset: {width: 3, height: 5},  
						shadowColor: Color.midColor,  
						shadowOpacity: 1,
						shadowRadius: 5,
					}}>
					<Pressable 
						style={[styles.btnView,{backgroundColor:Color.lightColor,borderWidth:1}]}
						onPress={()=>navigation.goBack()}
					>
						<Text style={[styles.viewBtn,{color:Color.darkColor}]}>
							Go Back
						</Text>
					</Pressable>
					<Pressable style={styles.btnView}>
						<Text style={styles.viewBtn}>
							View In AR
						</Text>
					</Pressable>
					<Pressable style={styles.btnView}>
						<Text style={styles.viewBtn}>
							View Map
						</Text>
					</Pressable>
				</View>
				<ScrollView>
					<View style={styles.userProfile}>
						<View style={styles.userDetails}>
							<View style={styles.userImage}>
								{
									postInfo.profilePhoto=="" || postInfo.profilePhoto==null ?
									<Image source={require("../../../images/ProfileImages/default.png")} style={styles.userImageView}/>

									:
									<Image source={{uri:postInfo.profilePhoto}} style={styles.userImageView}/>
								}
							</View>
							<View>
								<Text style={{fontSize:17,fontWeight:'600'}}>{postInfo.firstName}</Text>
							</View>
						</View>
						{
							
							postInfo.userId==userId ?
							<><View></View></>
							:
							<Pressable 
							style={styles.btnView}
							onPress={()=>
								{
									if(postInfo.userId!=userId)
									{
										navigation.navigate("OtherUserProfileScreen",{
											userId:postInfo.userId,
											logged:userId})
									}
								}
							}

						>
							<Text style={styles.viewBtn}>
								View Profile
							</Text>
						</Pressable>
						}
						
							
					</View>
					<View style={styles.postImage}>
						{
							postInfo.photo=="" || postInfo.photo==null ?
							<Image source={require("../../../images/ProfileImages/default.png")} style={styles.postImageView}/>
							:
							<Image source={{uri:postInfo.photo}} style={styles.postImageView}/>

						}
					</View>
					<View style={styles.postOptions}>
						<View style={{flexDirection:'row'}}>
						<Pressable style={styles.postOpt}>
							{
								liked ? 
								<Entypo 
									name="heart" 
									size={30} 
									color={Color.darkColor}
									onPress={async ()=>{
										const res = await unlikePost(userId,postId)
										const liked = await checkLiked(postId,userId)
										setLiked(liked)
										}
									}
								/>
								:
								<Entypo 
									name={"heart-outlined"} 
									size={30} 
									color={Color.textMidColor}
									onPress={async ()=>{
										const res = await likePost(userId,postId)
										const liked = await checkLiked(postId,userId)
										setLiked(liked)

									}}
								/>
							}
							<Text style={styles.optionNum}></Text>
						</Pressable>
						<Pressable 
							style={styles.postOpt}
							onPress={()=>{navigation.navigate("Comments",{postId:postId,userId:userId})}}
						>
							<FontAwesome 
								name="commenting" 
								size={24} 
								color={Color.textMidColor} 
							/>
							<Text style={styles.optionNum}></Text>
						</Pressable>
						</View>
						<Pressable style={styles.postOpt}>
							{
								saved ?
									<Ionicons 
										name="bookmark" 
										size={24} 
										color={Color.darkColor}
										onPress={async ()=>{
											const res = await unsavePost(userId,postId)
											const saved = await checkSaved(postId,userId)
											setSaved(saved)
										}}
									/>
									:
									<Ionicons 
										name="bookmark-outline" 
										size={24} 
										color={Color.textMidColor}
										onPress={async ()=>{
											const res = await savePost(userId,postId)
											const saved = await checkSaved(postId,userId)
											setSaved(saved)
										}}
									/>

							}
						</Pressable>
					</View>
					<View>
						<Text style={{fontSize:17,fontWeight:'600',marginHorizontal:20}}>
							Caption
						</Text>
						<Text style={{fontSize:15,fontWeight:'400',marginHorizontal:20,marginTop:10}}>
							{postInfo.caption}
						</Text>
					</View>
					<View style={{flexDirection:'row',alignItems:'center'}}>
						<Text style={{fontSize:17,fontWeight:'600',marginHorizontal:20,marginTop:10}}>
							Content Type
						</Text>
						<Text style={{width:70,fontSize:15,fontWeight:'400',marginHorizontal:20,marginTop:10,padding:5,borderRadius:5,borderWidth:1,borderColor:Color.darkColor}}>
							{
								postInfo.flag=="0" ? "Fictional" : "Opinion"
							}
						</Text>
					</View>
					<View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop:15}}>
						<Text style={{fontSize:17,fontWeight:'600',marginHorizontal:20,alignItems:'center'}}>
							Location
						</Text>
						<Text style={{fontSize:17,fontWeight:'400',marginHorizontal:20,alignItems:'center',marginTop:10}}>
							{postInfo.caption}
						</Text>
					</View>
				</ScrollView>
			</View>
		</>
	)
}

export default ViewPost

const styles = StyleSheet.create({
	container:{
		width:'100%',
		height:'100%',
		backgroundColor:Color.lightColor
	},
	userProfile:{
		width:'100%',
		height:100,
		alignItems:'center',
		justifyContent:'space-between',
		flexDirection:'row'
	},
	userImageView:{
		width:70,
		height:70,
		borderRadius:100,

	},
	userImage:{
		width:70,
		height:70,
		borderRadius:100,
		backgroundColor:Color.blackColor,
		marginHorizontal:20
	},
	userDetails:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
	},
	btnView:{
		width:110,
		height:40,
		backgroundColor:Color.darkColor,
		marginHorizontal:20,
		borderRadius:13,
		justifyContent:'center',
		alignItems:'center'
	},
	viewBtn:{
		color:Color.lightColor,
		fontSize:15,
		fontWeight:'600'
	},
	postImage:{
		width:'90%',
		alignSelf:'center',
		borderRadius:'20',
		shadowOffset: {width: 3, height: 5},  
		shadowColor: Color.midColor,  
		shadowOpacity: 1,
		shadowRadius: 5,  

	},
	postImageView:{
		width:'100%',
		height:300,
		borderRadius:20,
	},
	postOptions:{
		width:'80%',
		flexDirection:'row',
		alignSelf:'center',
		justifyContent:'space-between',
		paddingTop:20,
		paddingBottom:10,
	},
	postOpt:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		paddingHorizontal:20
	},
	optionNum:{
		paddingHorizontal:5,
		fontWeight:'400',
		color:Color.blackColor,
		fontSize:16,	
	}
})