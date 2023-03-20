import { Pressable, StyleSheet, Text, TextInput, View, ScrollView,FlatList,Image,Alert,ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import BottomNavBar from '../../../components/BottomNavBar'
import Color from '../../../ColourThemes/theme1'
import Style from '../../../StyleSheets/main.js'
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar'
import { recentSearch, searchUser,suggetUser,createRecentSearch } from '../../fetchData/searchData.js'
import { sendRequest,checkUser } from '../../fetchData/requestData.js'
const ExploreScreen = ({navigation,route}) => 
{
    const [isFocus,setFocus] = useState(false)
    const [searchText,setSearchText] = useState("")
	const [searchedUser,setSearchedUser] = useState([])
	const [recent,setRecent] = useState([])
	const [suggUser,setSuggUser] = useState([])
	const [loading,setLoading] = useState(false)

	const searchByName =async (searchText) => {
		setSearchText(searchText)
		const users = await searchUser(searchText)
		console.log(users)
		setSearchedUser(users)	
	}
	const getAlldata = async ()=>{
		if(!recent.length)
		{
			const recData = await recentSearch(route.params.userId)
			setRecent(recData)
			
		}
		if(!suggUser.length)
		{
			const sugdata = await suggetUser(route.params.userId)
			console.log(sugdata)
			if(sugdata.length)
			{
				setSuggUser(sugdata)
			}
			// setSuggUser(sugdata)
		}
	}
	useEffect(() => {
		if(!recent.length||!suggUser.length)
		{
			setLoading(true)
			getAlldata()
			setLoading(false)
		}
	}, [])
	
	
	if(loading)
	{
		return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
			<ActivityIndicator size={"large"}/>
		</View>)
	}
	return (
        <View style={Style.container}>
            <StatusBar style="light" />
            <View style={[Style.downMain,{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}]}>
				<View style={{backgroundColor:Color.lightColor,width:45,
					height:45,
					borderRadius:10,justifyContent:'center',
					alignItems:'center',marginTop:30}}>
					<Entypo name="chevron-left" size={24} color={Color.darkColor} onPress={()=>{
						setSearchText("")
						setFocus(false)
						navigation.goBack()}} />
				</View>
				<View style={styles.searchView}>
					<TextInput
						style={styles.searchBar}
						value={searchText}
						placeholder="Search"
						onFocus={() =>setFocus(true) }
						onChangeText={(text)=>{
							searchByName(text)
							
						}}
						onBlur={()=>
							{
								setSearchText("")
								setFocus(false)
							}}
                	/>
				</View>
				<View style={[{backgroundColor:Color.lightColor,width:45,
		height:45,
		borderRadius:10,justifyContent:'center',
		alignItems:'center',marginTop:30}]}>
				{
					isFocus ?
					<><Entypo name="cross" size={24} color={Color.darkColor} 
							onPress={()=>{
								setSearchText("")
								setFocus(false)
							}}
						/></>
					:
					<FontAwesome name="search" size={24} color={Color.darkColor} />
				}
				
				</View>
            </View>
            <View style={Style.mainDown}>
				{
					isFocus ?
					<>
						<ScrollView style={{marginTop:30,marginBottom:80}}>
							<Text style={[styles.viewHead]}>Search Results</Text>

								{
								searchedUser.map((item,index)=>{
									return(
										<Pressable 
											style={[styles.userDetails,{flexDirection:'row',width:'100%',marginVertical:20}]} 
											key={index}
											onPress={async ()=>{
												const res = await createRecentSearch(route.params.userId,item.id,(new Date()).getTime())
												if(res=="Search Added Successfully")
												{
													navigation.navigate('OtherUserProfileScreen',{logged:route.params.userId,userId:item.id,backTo:'ExploreScreen'})
												}
												
											}}
										>
											{
												item.profilePhoto == null || item.profilePhoto == ""?
												<Image source={require("../../../images/ProfileImages/default.png")} style={styles.profile_img}/>
												:
												<Image source={{uri:item.profilePhoto}} style={[styles.profile_img,{paddingHorizontal:20}]}/>
											}
											
											<Text style={[{alignSelf:'center',paddingVertical:5,paddingHorizontal:20,fontWeight:'600',fontSize:16}]}>{item.firstName} {item.lastName?item.lastName:""}</Text>
										</Pressable>	
									)
								}
							)}

						</ScrollView>
					</>
					:
					<View>
						<ScrollView style={styles.dataView}>
							<Text style={[styles.viewHead]}>Recent Searches</Text>
							<ScrollView horizontal={true} style={styles.recentSearchView}>
								{
									recent.length == 0 ? <Text style={{alignSelf:'center',paddingVertical:10}}>No Recent Searches</Text>:
									recent.map((item,index)=>{
										return(
											<Pressable 
												style={styles.userDetails} 
												key={index}
												onPress={()=>{
													navigation.navigate('OtherUserProfileScreen',{logged:route.params.userId,userId:item.userId,backTo:'ExploreScreen'})
												}}
											>
												{
													item.profilePhoto == null || item.profilePhoto==""
													?
													<Image source={require("../../../images/ProfileImages/default.png")} style={styles.profile_img}/>
													:
													<Image source={{uri:item.profilePhoto}} style={styles.profile_img}/>
												}
												<Text style={[{alignSelf:'center',paddingVertical:5}]}>{item.firstName}</Text>
											</Pressable>	
										)
									})
								}
							</ScrollView>
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
													<Image source={require("../../../images/ProfileImages/default.png")} style={styles.suggProfileImg}/>
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
					</View>
				}
           </View>
        <BottomNavBar navigation={navigation} userId={route.params.userId}/>
        </View>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({
    searchBar:{
		width:'100%',
		height:50,
		padding:10,
		fontSize:16
		
	},
	searchView:{
		width:'60%',
		height:50,
		borderRadius:10,
		backgroundColor:Color.lightColor,
		marginTop:30,
		marginHorizontal:10
	},
    dataView:{
		marginTop:50
	},
	recentSearchView:{
		width:'100%',
		height:80,
		marginVertical:20,
		flexDirection:'row',
		zIndex:-1
	},
	viewHead:{
		fontSize:18,
		fontWeight:'700',
		paddingHorizontal:15,
		marginTop:10
	},
	viewHead1:{
		marginTop:50,
	},
	suggView:{
		width:'100%',
		height:300,
		marginVertical:10,
	},
	userDetails:{
		flexDirection:'column',
		width:80,
		paddingHorizontal:15
	},
	profile_img:{
		width:50,
		height:50,
		borderRadius:100
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
	viewAllLink:{
		paddingHorizontal:15,
		fontSize:15,
		fontWeight:'700',
		color:Color.textDarkColor,
		marginTop:10
	},
	recPost:{
		width:'33.3%',
		height:'50%',
		backgroundColor:'blue'
	}
})