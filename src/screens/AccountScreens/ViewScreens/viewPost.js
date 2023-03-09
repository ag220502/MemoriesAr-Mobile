import { Dimensions, StyleSheet, Text, View,Image, ImageBackground,Pressable } from 'react-native'
import React from 'react'
import Color from '../../../ColourThemes/theme1'
import { StatusBar } from 'expo-status-bar'

const ViewPost =  ({navigation,route}) => {
	const height = Dimensions.get('window').height * 0.4
	const width = Dimensions.get('window').width * 0.9
	const profWidth = width * 0.5
	return (
		<>
			<StatusBar barStyle={"light"}/>  
			<View style={styles.container}>
				<View style={styles.userProfile}>
					<View style={styles.userDetails}>
						<View style={styles.userImage}>
						</View>
						<View>
							<Text style={{fontSize:17,fontWeight:'600'}}>User Name</Text>
						</View>
					</View>
					<Pressable style={styles.btnView}>
						<Text style={styles.viewBtn}>
							View Profile
						</Text>
					</Pressable>
				</View>
				<View style={styles.postImage}>
					<Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/memoriesar-f08a7.appspot.com/o/users%2F9409d5ce-4a82-4cb5-964c-2fce95c7ecafpussInBootsTheLastWish.png?alt=media&token=1'}} style={styles.postImageView}/>
				</View>
				<View>
					<Text style={{fontSize:17,fontWeight:'600',marginHorizontal:20,marginTop:20}}>
						Description
						</Text>
					<Text style={{fontSize:15,fontWeight:'400',marginHorizontal:20,marginTop:10}}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquet nunc, eg
					</Text>

				</View>
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
		marginTop:50,
		flexDirection:'row'
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
	}
})