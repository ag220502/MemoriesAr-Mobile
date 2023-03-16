import { Pressable, StyleSheet, Text, TextInput, View, ScrollView,FlatList,Image,Alert } from 'react-native'
import React,{useState} from 'react'
import BottomNavBar from '../../../components/BottomNavBar'
import Color from '../../../ColourThemes/theme1'
import Style from '../../../StyleSheets/main.js'
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar'
import { recentSearch, searchUser,suggetUser } from '../../fetchData/searchData.js'
import { sendRequest } from '../../fetchData/requestData.js'
const ExploreScreen = ({navigation,route}) => 
{
    const data=
	[
		{
			name:'Ken',
			profile:require('../../../images/ProfileImages/profile10.jpg')
		},
		{
			name:'Leona',
			profile:require('../../../images/ProfileImages/profile9.jpg')
		},
		{
			name:'Kenneth',
			profile:require('../../../images/ProfileImages/profile8.jpg')
		},
		{
			name:'Lee',
			profile:require('../../../images/ProfileImages/profile7.jpg')
		},
		{
			name:'Alicia',
			profile:require('../../../images/ProfileImages/profile6.jpg')
		},
		{
			name:'Harold',
			profile:require('../../../images/ProfileImages/profile4.jpg')
		},
		{
			name:'Melissa',
			profile:require('../../../images/ProfileImages/profile2.jpg')
		}
	]
    const [isFocus,setFocus] = useState(false)
    const [searchText,setSearchText] = useState("")
	const [searchedUser,setSearchedUser] = useState([])
	const [recent,setRecent] = useState([])
	const [suggUser,setSuggUser] = useState([])
	const searchByName =async (searchText) => {
		setSearchText(searchText)
		const users = await searchUser(searchText)
		console.log(users)
		setSearchedUser(users)
	}
	if(!recent.length)
	{
		recentSearch(route.params.userId).then((data)=>{
			setRecent(data)
		})
	}
	if(!suggUser.length)
	{
		suggetUser(route.params.userId).then((data)=>{
			setSuggUser(data)
		})
	}
	return (
        <View style={Style.container}>
            <StatusBar style="light" />
            <View style={[Style.downMain,{flexDirection:'row'}]}>
			
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
				
					{/* <Pressable style={styles.btnView} onPress={()=>{
						navigation.navigate('SearchScreen',{userId:route.params.userId})
					}}>
						<Ionicons name="search" size={24} color="black" />
					</Pressable> */}

	
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
											onPress={()=>{
												navigation.navigate('OtherUserProfileScreen',{logged:route.params.userId,userId:item.id,backTo:'ExploreScreen'})
											}}
										>
											<Image source={{uri:item.profilePhoto}} style={[styles.profile_img,{paddingHorizontal:20}]}/>
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
									recent.map((item,index)=>{
										return(
											<Pressable 
												style={styles.userDetails} 
												key={index}
												onPress={()=>{
													navigation.navigate('OtherUserProfileScreen',{logged:route.params.userId,userId:item.userId,backTo:'ExploreScreen'})
												}}
											>
												<Image source={{uri:item.profilePhoto}} style={styles.profile_img}/>
												<Text style={[{alignSelf:'center',paddingVertical:5}]}>{item.firstName}</Text>
											</Pressable>	
										)
									})
								}
							</ScrollView>
							<Text style={styles.viewHead}>Suggested Users</Text>
							<ScrollView style={styles.suggView} horizontal={true}>
								{
									suggUser.map((item,index)=>{
										return(
											<View style={styles.suggUser} key={index}>
												{
													item.profilePhoto == null 
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
        width:'70%',
        height:40,
        backgroundColor:Color.lightColor,
        borderRadius:10,
        alignSelf:'center',
        marginTop:30,
        padding:10,
        fontSize:16
    },
    dataView:{
		marginTop:50
	},
	btnView:{
		width:45,
		height:45,
		backgroundColor:Color.lightColor,
		borderRadius:10,
		justifyContent:'center',
		alignItems:'center'
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