import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'
import style from '../../../StyleSheets/main.js'
import BottomNavBar from '../../../components/BottomNavBar.js'
import Color from '../../../ColourThemes/theme1.js'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const MenuScreen = ({navigation}) => {
  return (
    <View style={style.container}>
		<View style={style.downMain}>
			<Text style={style.frameHead}>Menu Options</Text>
		</View>
		<View style={style.mainDown}>
			<View style={styles.profileView}>
				<Image
				 	style={styles.profile_img}
					source={require('../../../images/ProfileImages/profile.png')}/>
				<Text style={styles.profile_name}>Akshay Garg</Text>
			</View>
			<Text style={styles.text_head}>All Shortcuts</Text>
			<View style={styles.divView}>
				<Pressable 
					style={styles.menuOptionView}
					onPress={()=>{
						navigation.navigate("SavedPosts")
					}}
				>
					<FontAwesome5 name="user-friends" size={32} color="black" />
					<Text style={styles.menuOptionText}>Your Friends</Text>
				</Pressable>
				<Pressable style={styles.menuOptionView}>
					<MaterialIcons name="groups" size={38} color="black" />
					<Text style={styles.menuOptionText}>Groups</Text>
				</Pressable>
				<Pressable style={styles.menuOptionView}>
					
					<Ionicons name="bookmarks" size={32} color="black" />
					<Text style={styles.menuOptionText}>Saved Memories</Text>
				</Pressable>
				<Pressable style={styles.menuOptionView}>
					<Entypo name="picasa" size={32} color="black" />
					<Text style={styles.menuOptionText}>Your Memories</Text>
				</Pressable>
			</View>
			<BottomNavBar navigation={navigation}/>
		</View>
    </View>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
	profileView:{
		width:'85%',
		height:70,
		alignSelf:'center',
		marginTop:40,
		flexDirection:'row',
		alignItems:'center',
		borderWidth:0.5,
		paddingHorizontal:10,
		borderRadius:10,
		backgroundColor:Color.whiteColor
	},
	profile_img:{
		width:50,
		height:50,
		borderRadius:50
	},
	profile_name:{
		paddingHorizontal:15,
		fontWeight:'600',
		fontSize:17
	},
	text_head:{
		paddingLeft:'7.5%',
		marginVertical:20,
		fontSize:18,
		fontWeight:'bold'
	},
	divView:{
		width:'100%',
		flexDirection:'row',
		alignSelf:'center',
		justifyContent:'space-evenly',
		flexWrap:'wrap'
	},
	menuOptionView:{
		width:'40%',
		height:150,
		borderWidth:0.5,
		marginVertical:20,
		borderRadius:10,
		justifyContent:'center',
		alignItems:'center'
	},
	menuOptionText:{
		fontSize:16,
		fontWeight:'bold',
		marginVertical:10
	}

})