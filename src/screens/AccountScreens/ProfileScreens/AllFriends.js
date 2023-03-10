import { StyleSheet, Text, View, Image, Pressable,TextInput } from 'react-native'
import React,{useEffect,useState} from 'react'
import { getAllFriends } from '../../fetchData/friendsData.js'
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import style from '../../../StyleSheets/main.js'
import BottomNavBar from '../../../components/BottomNavBar.js'
import Color from '../../../ColourThemes/theme1.js';


const AllFriends = ({navigation,route}) => {
	const [userFriends, setUserFriends] = React.useState([])
	const [keyword,setKeyword] = useState('')
	const [showbar,setShowBar] = useState(false)
	const [isLoaded,setIsLoaded] = useState(false)
	useEffect(() => {
		if(!isLoaded)
		{
			getAllFriends(route.params.userId).then((data) => {
				console.log(data)
				setUserFriends(data)
				setIsLoaded(true)
			})
		}
		
	}, [])
	
	return (
		<View style={style.container}>
			{isLoaded? 
			<>
			<View style={style.downMain}>
				<View style={styles.search}>
					<Pressable style={styles.buttonView}
						onPress={()=>navigation.navigate("ProfileScreen",{userId:route.params.userId})}
					>
						<Ionicons name="chevron-back" size={30} color={Color.textDarkColor} />
					</Pressable>
					<View style={styles.headView}>
						{showbar ? 
							<TextInput style={styles.searchInput} placeholder="Search" onChangeText={(text)=>setKeyword(text)}/>
							:
							<Text style={styles.head}>User Friends</Text>}
						
					</View>
					{showbar ? 
						<Pressable style={styles.buttonView} onPress={()=>{setShowBar(false);setKeyword('')}}>
							<Entypo name="cross" size={30} color={Color.textDarkColor} />
						</Pressable>: 
						<Pressable style={styles.buttonView} onPress={()=>setShowBar(true)}>
							<FontAwesome name="search" size={24} color={Color.textDarkColor}  />
						</Pressable>}
				</View>
			</View>
			<View style={style.mainDown}>
				<View style={{marginTop:30}}>
					{userFriends.map((user)=> {
						return (
							<Pressable style={styles.user_det} key={user.userId}>
								<View>
									<Image source={{uri:user.profilePhoto}} style={styles.profile_img}/>
								</View>
								<View>
									<Text style={styles.user_name}> {user.firstName} {user.lastName?user.lastName:''}
									</Text>
								</View>
							</Pressable>
						)})}
					
				</View>
				<BottomNavBar navigation={navigation}/>
				
			</View>
			</>
			:
			<Text>Loading</Text>
				}
			
		</View>
	)
}

export default AllFriends

const styles = StyleSheet.create({
	user_det:{
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center',
		flexDirection:'row',
		paddingHorizontal:25,
		marginVertical:15
	},
	user_name:{
		fontSize:16,
		fontWeight:'bold',
		marginHorizontal:20
	},
	profile_img:{
		width:50,
		height:50,
		borderRadius:50
	},
	buttonView:{
		width:45,
		height:45,
		backgroundColor:Color.lightColor,
		borderRadius:10,
		justifyContent:'center',
		alignItems:'center'
	  },
	  search:{
		width:'100%',
		height:'15%',
		paddingVertical:20,
		paddingHorizontal:10,
		justifyContent:'space-between',
		flexDirection:'row'
	  },
	  searchInput:{
		height:45,
		width:'100%',
		backgroundColor:Color.lightColor,
		borderRadius:20,
		padding:10,
		fontSize:16
	  },
	  head:{
		color:Color.textLightColor,
		fontSize:25,
		fontWeight:'bold'
	  },
	  headView:{
		justifyContent:'center',
		alignItems:'center',
		height:45,
		width:250
	  },
})