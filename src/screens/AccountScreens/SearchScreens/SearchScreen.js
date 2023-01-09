import { StyleSheet, Text, View,SafeAreaView, ScrollView,Image, Pressable,ImageBackground } from 'react-native'
import React from 'react'
import BottomNavBar from '../../../components/BottomNavBar'

const SearchScreen = ({navigation}) => {
	const data=
	[
		{
			name:'Akshay',
			profile:require('../../../images/ProfileImages/profile.png')
		},
		{
			name:'Akshay',
			profile:require('../../../images/ProfileImages/profile.png')
		},
		{
			name:'Akshay',
			profile:require('../../../images/ProfileImages/profile.png')
		},
		{
			name:'Akshay',
			profile:require('../../../images/ProfileImages/profile.png')
		},
		{
			name:'Akshay',
			profile:require('../../../images/ProfileImages/profile.png')
		},
		{
			name:'Akshay',
			profile:require('../../../images/ProfileImages/profile.png')
		},
		{
			name:'Akshay',
			profile:require('../../../images/ProfileImages/profile.png')
		}
	]
	return (
		<View style={styles.container}>

			<View style={styles.main}>
				<ScrollView style={styles.dataView}>
					<Text style={[styles.viewHead,{marginTop:50}]}>Recent Searches</Text>
					<ScrollView horizontal={true} style={styles.recentSearchView}>
						{
							data.map((item,index)=>{
								return(
									<Pressable style={styles.userDetails} key={index}>
										<Image source={item.profile} style={styles.profile_img}/>
										<Text>{item.name}</Text>
									</Pressable>	
								)
							})
						}
					</ScrollView>
					<Text style={styles.viewHead}>Suggested Users</Text>
					<ScrollView style={styles.suggView} horizontal={true}>
						{
							data.map((item,index)=>{
								return(
									<View style={styles.suggUser} key={index}>
										<Image source={item.profile} style={styles.suggProfileImg}/>
										<Text style={styles.usrText}>{item.name}</Text>
										<View style={styles.btnMainView}>
											<Pressable style={styles.btnView}>
												<Text style={styles.btnText}>Add Firend</Text>
											</Pressable>
											<Pressable style={styles.btnView}>
												<Text style={styles.btnText}>Remove</Text>
											</Pressable>
										</View>
									</View>	
								)
							})
						}
						
					</ScrollView>
					<View style={{justifyContent:'space-between',flexDirection:'row'}}>
						<Text style={styles.viewHead}>Suggested Memories</Text>
						<Text style={styles.viewAllLink}>View All</Text>
					</View>
					<View style={styles.suggView}>
						<View>

						</View>
					</View>
					<View style={{justifyContent:'space-between',flexDirection:'row'}}>
						<Text style={styles.viewHead}>Suggested Scrapbooks</Text>
						<Text style={styles.viewAllLink}>View All</Text>
					</View>
					<View style={[styles.suggView,{marginBottom:80}]}>

					</View>
				</ScrollView>
				<BottomNavBar navigation={navigation}/>
			</View>
		</View>
	)
}

export default SearchScreen

const styles = StyleSheet.create({
	container:{
		width: '100%',
		height: '100%',
		backgroundColor:'#F50057',
		alignItems:'center',
		justifyContent:'center'
	},
	main:{
		flexDirection:'column',
		backgroundColor:"#F5F6FA",
		width:'100%',
		height:'85%',
		borderTopLeftRadius:'60',
		borderTopRightRadius:'60',
		position:'absolute',
		bottom:0
	},
	dataView:{
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
		marginVertical:10
	},
	userDetails:{
		flexDirection:'column',
		width:80,
		paddingHorizontal:15
	},
	profile_img:{
		width:50,
		height:50
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
		backgroundColor:'#F50057',

		padding:7,
		borderRadius:7
	},
	btnText:{
		color:'#F5F6FA',
		fontSize:16,
		
	},
	suggProfileImg:{
		width:100,
		height:100
	},
	viewAllLink:{
		paddingHorizontal:15,
		fontSize:15,
		fontWeight:'700',
		color:'#F50057',
		marginTop:10
	}

})