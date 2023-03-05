import { StyleSheet, Text, View,Image, FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import BottomNavBar from '../../../components/BottomNavBar'
import Color from '../../../ColourThemes/theme1.js'
import style from '../../../StyleSheets/main.js'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import {requestData} from '../../fetchData/requestData'

const FriendRequest = ({navigation}) => {
	const [reqData,setReqData] = useState([])
	useEffect(()=>{
		requestData(18).then((data)=>{
			setReqData(data)
		})
	},[])

	return (
		<View style={style.container}>
			<View style={style.downMain}>
				<Text>Friend Request</Text>
			</View>
			<View style={style.mainDown}>
				<View style={{marginTop:50}}>
					{
						console.log(reqData)
					}
					<FlatList
						data={reqData}
						renderItem={({item})=>
						(
							<View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:20,marginHorizontal:15}}>
								<View style={styles.user_det}>
									<View>
										<Image source={{uri:item.profilePhoto}} style={styles.profile_img}/>
									</View>
									<View>
										<Text style={styles.user_name}> {item.firstName} {item.lastName?item.lastName:""}
										</Text>
									</View>
								</View>
								<View style={styles.btnView}>
									<Pressable onPress={()=>{}} style={styles.accBtn}>
										<Text style={styles.accBtnTxt}>Accept</Text>
									</Pressable>
									<Pressable onPress={()=>{}} style={[styles.accBtn,{backgroundColor:Color.lightColor,borderWidth:1,borderColor:Color.darkColor}]}>
										<Text>Decline</Text>
									</Pressable>
								</View>
							</View>
								)}
					/>
					{/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>
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
								<Text style={styles.accBtnTxt}>Accept</Text>
							</Pressable>
							<Pressable onPress={()=>{}} style={[styles.accBtn,{backgroundColor:Color.lightColor,borderWidth:1,borderColor:Color.darkColor}]}>
								<Text>Decline</Text>
							</Pressable>
						</View>

					</View> */}
					
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
		marginHorizontal:10
	},
	profile_img:{
		width:50,
		height:50,
		borderRadius:50
	},
	btnView:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		marginRight:10
	},
	accBtn:{
		backgroundColor:Color.darkColor,
		color:Color.textLightColor,
		paddingHorizontal:15,
		paddingVertical:5,
		borderRadius:10,
		marginHorizontal:5
	},
	accBtnTxt:{
		fontSize:15,
		color:Color.textLightColor,
	}
})