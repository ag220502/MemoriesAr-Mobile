import { Pressable, ScrollView, StatusBar, StyleSheet, Text,Image, TextInput, View,ActivityIndicator,Modal } from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Color from './../../../../ColourThemes/theme1.js'
import { WEB } from '../../../../../var.js';
import { unblockUser, allBlockedUsers } from '../../../fetchData/block.js';

const BlockedAccount = ({navigation,route}) => {


  	const [openModel,setOpenModel] = useState(false)
	const handleOnPress = () => {
        setOpenModel(!openModel)
    }
	const [keyword,setKeyword] = useState('')
	const [showbar,setShowBar] = useState(false)
	const [user,setUser] = useState([])
	const [getData,setGetData] = useState(false)
  	const [loading,setLoading] = useState(false)
	
	const data = async ()=>{
		setLoading(true)
		const response = await fetch(WEB + "/api/block/allBlockUser/" + route.params.userId);
		const data = await response.json();
		setUser(data)
		setLoading(false)
	}
	if(!getData)
	{
		data()
		setGetData(true)
	}

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
							<Text style={styles.head}>Blocked Users</Text>}
						
					</View>
					{showbar ? 
						<Pressable style={styles.buttonView} onPress={()=>{setShowBar(false);setKeyword('')}}>
							<Entypo name="cross" size={30} color={Color.textDarkColor} />
						</Pressable>: 
						<Pressable style={styles.buttonView} onPress={()=>setShowBar(true)}>
							<FontAwesome name="search" size={24} color={Color.textDarkColor}  />
						</Pressable>}
				</View>
				<ScrollView style={styles.main}>
					{
						user.filter((data)=>{
							if(data.firstName.toLowerCase().includes(keyword.toLowerCase())){
								return data
							}
							else if(keyword===''){
								return data
							}
						}).map((data,index)=>{
							return(
							<View key={index} style={styles.containerUser} >
							<Pressable style={styles.user_det}>
								<View>
									<Image source={{uri:data.profilePhoto}} style={styles.profile_img}/>
								</View>
								<View>
									<Text style={styles.user_name}>{data.firstName} {data.lastName}
									</Text>
								</View>
							</Pressable>

							<Pressable style={styles.user_det} onPress={()=>{handleOnPress()}}>
								<Entypo name="dots-three-horizontal" size={24} color="black" />
							</Pressable>
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
												const response = await unblockUser(route.params.userId,data.blockedUserId)
													if(response==="User Unblocked Successfully")
													{
														console.log(response)
														handleOnPress()
														setGetData(false)
													}
											}
										}
										>
											<Text>Unblock User</Text>
										</Pressable>
										<Pressable style={styles.modalOption} onPress={()=>{handleOnPress()}}>
											<Text>Close</Text>
										</Pressable>
									</View>
								</View>
							</Modal>
							</View>
				
							)
						})
					}
					
				</ScrollView>
			</View>
		)
	}

export default BlockedAccount

const styles = StyleSheet.create({
	modalOption:{
		padding:15,
		borderBottomWidth:0.3,
		width:'100%',
		borderBottomColor:Color.midColor,
	},
	modalView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:22
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