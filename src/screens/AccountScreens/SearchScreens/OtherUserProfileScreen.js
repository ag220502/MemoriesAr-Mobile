import { Pressable, ScrollView,  StyleSheet, Text, View, Image,Alert ,Modal} from 'react-native'
import React,{useEffect, useState} from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import Post from '../../../components/ProfilePost'; 
import Scrapbooks from '../../../components/ProfileScrapbooks';
import { getProfileData,getNumPosts,getNumFriends, getUserPosts, checkIsFriend } from '../../fetchData/profileData';
import { Feather } from '@expo/vector-icons';
import Color from '../../../ColourThemes/theme1';
import { sendRequest,checkRequest,declineRequest } from '../../fetchData/requestData.js';
import {blockUser} from '../../fetchData/block.js'
import { FontAwesome5 } from '@expo/vector-icons';
import {getAllUserScrapbooks} from '../../fetchData/scrapbooks.js';

const OtherUserProfileScreen = ({navigation,route}) => {
	const [scrapData,setScrapData] = useState([]);
	const [showPosts,setShowPosts] = useState(true);
	const [loggedUserId,setLoggedUserId] = useState(route.params.logged);
	const [profileUserId,setProfileUserId] = useState(route.params.userId);
	const [isPublic,setIsPublic] = useState(0);
	const [name,setName] = useState('');
	const [numFriends,setNumFriends] = useState(0);
	const [numPosts,setNumPosts] = useState(0);
	const [isFriend,setIsFriend] = useState(false);
	const [profilePhoto,setProfilePhoto] = useState('');
	const [bio,setBio] = useState('');
	const [isLoaded,setIsLoaded] = useState(false);
	const [userPosts,setUserPosts] = useState([]);
	const [openModel,setOpenModel] = useState(false)
	const [sentRequest,setSentRequest] = useState(false)

	const handleOnPress = () => {
        setOpenModel(!openModel)
    }
	useEffect(()=>{
		if(!isLoaded){
	getProfileData(profileUserId).then((data)=>{
		setIsLoaded(false)
		setIsPublic(data.isPublic)
		if(data.lastName==null)
		{
			setName(data.firstName)
		}
		else
		{
			setName(data.firstName+" "+data.lastName)
		}
		setBio(data.bio)
		setProfilePhoto(data.profilePhoto)
		getNumPosts(profileUserId).then((data)=>{
			setNumPosts(data)
		})
		getNumFriends(profileUserId).then((data)=>{
			setNumFriends(data)
		})
		getAllUserScrapbooks(profileUserId).then((data)=>{
			setScrapData(data)
		})
		getUserPosts(profileUserId).then((data)=>{
			setUserPosts(data)
		})
		checkIsFriend(loggedUserId,profileUserId).then((data)=>{
			setIsFriend(data)
		})
		checkRequest(loggedUserId,profileUserId).then((data)=>{
			if(data==="No Data Found.")
			{
				setSentRequest(false)
			}
			else if(data==="Request Sent")
			{
				setSentRequest(true)
			}
		})
		setIsLoaded(true)
	})
}
	},[])
	
	function printData(){
		if(isLoaded)
		{
			return (<View>
				<View style={styles.container}>
					<View style={styles.search}>
						<Pressable style={styles.buttonView}
							onPress={()=>navigation.navigate(route.params.backTo,{userId:route.params.logged})}
						>
							<Ionicons name="chevron-back" size={30} color={Color.textDarkColor} />
						</Pressable>
						<Pressable style={styles.buttonView}
							onPress={()=>{
								handleOnPress()
							}}
						>
							<Entypo name="dots-three-horizontal" size={24} color={Color.textDarkColor} />
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
									onPress={()=>{
										Alert.alert("Report Account","Are you sure you want to report this account?",[
											{
												text:"Yes",
												onPress:()=>{
													handleOnPress()
													navigation.navigate("ReportUsers",{reportedId:profileUserId,userId:loggedUserId})
												}
											},
											{
												text:"No",
												onPress:()=>{
													handleOnPress()
												}
											}
										])
									}}
								>
									<Text>Report Account</Text>
								</Pressable>
								<Pressable 
									style={styles.modalOption}
									onPress={()=>{
										Alert.alert("Blocked User","Are you sure you want to block this user?",[
											{
												text:"Yes",
												onPress:async()=>{
													const res = await blockUser(loggedUserId,profileUserId)
													if(res==="User Blocked Successfully")
													{
														Alert.alert("User Blocked","User has been blocked successfully")
														navigation.navigate(route.params.backTo,{userId:route.params.logged})
													}
												}
											},
											{
												text:"No",
												onPress:()=>{
													handleOnPress()
												}

											}
										])
									}}
								>
									<Text>Block User</Text>
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
					<View style={styles.main}>
					<View style={styles.profile_img}>
						{
							profilePhoto==null || profilePhoto===""?
							<Image source={require("../../../images/ProfileImages/default.png")} style={styles.pofile}/>
							:
							<Image source={{uri:profilePhoto}} style={styles.pofile}/>
						}
						</View>
						<View style={styles.profile_data}>
						<View style={styles.dataView}>
							<Text style={styles.dataNum}>{numFriends}</Text>
							<Text style={styles.dataName}>Friends</Text>
						</View>
						<View style={styles.dataView}>
							<Text style={styles.dataNum}>{numPosts}</Text>
							<Text style={styles.dataName}>Memories</Text>
						</View>
						</View>
						<View style={styles.userNameView}>
							<Text style={styles.userName}>{name}</Text>
						</View>
						{
							bio ?<View style={styles.profile_bio}>
							<Text style={styles.bio_text}>
								{bio}
							</Text>
						</View>:null
						}
						
						<View style={styles.followButtonView}>
							
									{isFriend 
										? 
										<>
											<Pressable 
												style={styles.FollowbuttonView}

											>
												<Text style={styles.btnText}>
													<Text>Friends</Text>
													<Feather name="user-check" size={20} color={Color.textLightColor} />
												</Text>
											</Pressable>
										</>
										:
										sentRequest ?
										<>
											<Pressable 
												style={styles.FollowbuttonView}
												onPress={
													()=>{
														declineRequest(route.params.logged,route.params.userId).then((data)=>{
															if(data == 'Request Deleted Successfully')
															{
																Alert.alert("Request Cancelled Successfully","",[{
																	text:"Ok",
																	onPress:()=>{
																		checkRequest(route.params.logged,route.params.userId).then((data)=>{
																			if(data == 'No Data Found.')
																			{
																				setSentRequest(false)
																			}
																		})
																	}
																}])
																
															}
														})
													}
												}
											>
												<Text style={styles.btnText}>
													<Text>Cancel Request</Text>
												</Text>
											</Pressable>
										</>
										:
										<>
											<Pressable 
												style={styles.FollowbuttonView}
												onPress={
													()=>{
														sendRequest(route.params.logged,route.params.userId).then((data)=>{
															if(data == 'Request Sent Successfully')
															{
																Alert.alert("Request Sent Successfully","",[{
																	text:"Ok",
																	onPress:()=>{

																checkRequest(route.params.logged,route.params.userId).then((data)=>{
																	if(data == 'Request Sent')
																	{
																		setSentRequest(true)
																	}
																})
															}}])
															}
														})
													}
												}
											>
												<Text style={styles.btnText}>
													<Text style={{paddingHorizontal:10}}>Add Friend </Text>
													<Ionicons name="person-add-sharp" style={{padding:5}} size={20} color={Color.textLightColor} />
												</Text>
											</Pressable>
										</>
									}
								
							<Pressable style={styles.FollowbuttonView} >
								<Text  style={styles.btnText}>Message</Text>
							</Pressable>
						</View>
						{
							isFriend || isPublic==0 ?
							<>
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
								<View style={styles.postsView}>
								{
									showPosts ? 
									<Post navigation={navigation} userId={loggedUserId} data={userPosts}/> 
									: 
									<Scrapbooks
										navigation={navigation}
										userId={id}
										data={scrapData}
									/>
								}
								</View>
							</>
							:
							<>
								<View>
									<FontAwesome5 name="user-lock" style={{alignSelf:'center',paddingTop:40}} size={24} color={Color.darkColor} />
									<Text style={{textAlign:'center',fontSize:20,fontWeight:'600',marginTop:20}}>This account is private</Text>
									<Text style={{textAlign:'center',fontSize:20,fontWeight:'300',marginTop:20}}>Send Request to see their Memories</Text>
								</View>
							</>
						}
						
					</View>
				</View>
			</View>)
		}
	}
	return (
		<View>
		{
			isLoaded ? printData() : <View><Text>Loading</Text></View>
		}
		</View>
	)
}

export default OtherUserProfileScreen

const styles = StyleSheet.create({
	modalView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:22
    },
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
    color:Color.darkColor
  },
  pofile:{
    alignSelf:'center',
	width:100,
    height:100,

    borderRadius:100
  },
  profile_img:{
    position:'absolute',
    width:100,
    height:100,
    backgroundColor:Color.blackColor,
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
    color:Color.lightColor,
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