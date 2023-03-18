import { Pressable, ScrollView,  StyleSheet, Text, View, Image,Alert } from 'react-native'
import React,{useEffect, useState} from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import Post from '../../../components/ProfilePost'; 
import Scrapbooks from '../../../components/ProfileScrapbooks';
import { getProfileData,getNumPosts,getNumFriends, getUserPosts, checkIsFriend } from '../../fetchData/profileData';
import { Feather } from '@expo/vector-icons';
import Color from '../../../ColourThemes/theme1';
import { sendRequest } from '../../fetchData/requestData.js';
const OtherUserProfileScreen = ({navigation,route}) => {
	const [showPosts,setShowPosts] = useState(true);
	const [loggedUserId,setLoggedUserId] = useState(route.params.logged);
	const [profileUserId,setProfileUserId] = useState(route.params.userId);
	const [name,setName] = useState('');
	const [numFriends,setNumFriends] = useState(0);
	const [numPosts,setNumPosts] = useState(0);
	const [isFriend,setIsFriend] = useState(false);
	const [profilePhoto,setProfilePhoto] = useState('');
	const [bio,setBio] = useState('');
	const [isLoaded,setIsLoaded] = useState(false);
	const [userPosts,setUserPosts] = useState([]);

	useEffect(()=>{
		if(!isLoaded){
	getProfileData(profileUserId).then((data)=>{
		setIsLoaded(false)
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
		getUserPosts(profileUserId).then((data)=>{
			setUserPosts(data)
		})
		checkIsFriend(loggedUserId,profileUserId).then((data)=>{
			setIsFriend(data)
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
							onPress={()=>navigation.navigate("MainScreen")}
						>
							<Entypo name="dots-three-horizontal" size={24} color={Color.textDarkColor} />
						</Pressable>
					</View>
					<View style={styles.main}>
						<View style={styles.profile_img}>
							<Image source={{uri:profilePhoto}} style={styles.pofile}/>
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
										<>
											<Pressable 
												style={styles.FollowbuttonView}
												onPress={
													()=>{
														sendRequest(route.params.logged,route.params.userId).then((data)=>{
															if(data == 'Request Sent Successfully')
															{
																Alert.alert("Request Sent Successfully")
															}
														})
													}
												}
											>
												<Text style={styles.btnText}>
													<Text>Add Friend</Text>
													<Ionicons name="person-add-sharp" size={24} color={Color.textLightColor} />
												</Text>
											</Pressable>
										</>
									}
								
							<Pressable style={styles.FollowbuttonView} >
								<Text  style={styles.btnText}>Message</Text>
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
						<View style={styles.postsView}>
						{
							showPosts ? <Post data={userPosts}/> : <Scrapbooks/>
						}
						</View>
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
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'#F50057',
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
    backgroundColor:'#F5F6FA',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  main:{
    flexDirection:'column',
    backgroundColor:"#F5F6FA",
    width:'100%',
    height:'85%',
    borderTopLeftRadius:'60',
    borderTopRightRadius:'60',
    paddingTop:20,
  },
  FollowbuttonView:{
    height:45,
    backgroundColor:'#F50057',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    padding:10
  },
  FollowText:{
    color:'#F50057'
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
    color:'#F5F6FA',
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