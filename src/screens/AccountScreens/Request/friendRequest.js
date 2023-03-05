import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import BottomNavBar from '../../../components/BottomNavBar'
import Color from '../../../ColourThemes/theme1.js'
import style from '../../../StyleSheets/main.js'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { getAllFriends } from '../../fetchData/friendsData.js'

const FriendRequest = ({navigation}) => {
	

	return (
		<View style={style.container}>
			<View style={style.downMain}>
				<Text>Friend Request</Text>
			</View>
			<View style={style.mainDown}>
				<View style={{marginTop:50}}>
					
					<View style={{flexDirection:'row',justifyContent:'space-between'}}>
						<View style={styles.user_det}>
							<View>
								<Image style={styles.profile_img}/>
							</View>
							<View>
								<Text style={styles.user_name}> Akshay
								</Text>
							</View>
						</View>
						<View style={styles.btnView}>
							<Pressable onPress={()=>{}} style={styles.accBtn}>
								<Text>Accept</Text>
							</Pressable>
							<Pressable onPress={()=>{}} style={styles.decBtn}>
								<Text>Decline</Text>
							</Pressable>
						</View>

					</View>
					
				</View>
				<BottomNavBar navigation={navigation}/>
			</View>
			
		</View>
		
	)
}

export default FriendRequest

const styles = StyleSheet.create({
	user_det:{
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center',
		flexDirection:'row'
	},
	user_name:{
		fontSize:16,
		fontWeight:'bold',
		marginHorizontal:20
	},
	profile_img:{
		width:50,
		height:50,
	},
	btnView:{
		flexDirection:'row',
		
	}
})