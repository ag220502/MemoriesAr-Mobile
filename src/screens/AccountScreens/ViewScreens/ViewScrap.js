import { StyleSheet, Text, View,FlatList,Dimensions,Pressable,Image,ScrollView } from 'react-native'
import React,{useState} from 'react'
import { Entypo } from '@expo/vector-icons';
import Ionicons from "@expo/vector-icons/Ionicons"
import FontAwesome from "@expo/vector-icons/FontAwesome"
const {width,height} = Dimensions.get('window')
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Color from '../../../ColourThemes/theme1';
import {checkSavedScrapbook,saveScrapbook,deleteSavedScrapbook} from "../../fetchData/scrapbooks.js"
import {addLike,checkLike,unLike} from "../../fetchData/scrapbookUtils.js"

const ViewScrap = ({navigation,route}) => {
	const {scrapId,userId} = route.params
	const [image,setImage] = useState(null)
	const [name,setName] = useState('A Fresh Start')
	const [liked,setLiked] = React.useState(false)
	const [saved,setSaved] = React.useState(false)
	const [description,setDescription] = useState('Collection of my adventures from hiking through the Rocky Mountains to surfing in Hawaii')

	const [data,setData] = React.useState([2,2,2,2,2])
	const [currentIndex,setCurrentIndex]=useState(0)
	return (
		<View style={{flex:1}}>
			<View style={
					{
						width:'95%',
						alignSelf:'center',
						height:70,
						marginTop:50,
						flexDirection:'row',
						justifyContent:'space-evenly',
						alignItems:'center',
						shadowOffset: {width: 3, height: 5},  
						shadowColor: Color.midColor,  
						shadowOpacity: 1,
						shadowRadius: 5,
					}}>
					<Pressable 
						style={[styles.btnView,{backgroundColor:Color.lightColor,borderWidth:1}]}
						onPress={()=>navigation.goBack()}
					>
						<Text style={[styles.viewBtn,{color:Color.darkColor}]}>
							Go Back
						</Text>
					</Pressable>
					<Pressable style={styles.btnView}>
						<Text style={styles.viewBtn}>
							View In AR
						</Text>
					</Pressable>
					<Pressable style={styles.btnView}>
						<Text style={styles.viewBtn}>
							View Map
						</Text>
					</Pressable>
			</View>
			<ScrollView style={{height:height*0.65}}>
				<FlatList
					data={data}
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					onScroll={(event)=>{
						const x = event.nativeEvent.contentOffset.x
						setCurrentIndex((x/width).toFixed(0))
					}}
					renderItem={({item,index})=>{
						
						return(
							index==0?
							<View style={{width:width,height:height*0.65,justifyContent:'center',alignItems:'center'}}
							key={index}
							>
								<Pressable
									style={{width:'95%',height:'90%',backgroundColor:Color.darkColor,borderRadius:10}}
								>
									<View style={{width:'85%',height:'10%',marginTop:20,alignSelf:'center',borderRadius:10}}>
										<Text style={styles.scrapTitle}>{name}</Text>
									</View>
									<Pressable 
										style={{width:'85%',height:'55%',marginTop:30,backgroundColor:Color.lightColor,marginTop:20,alignSelf:'center',borderRadius:10}}
									>
										{
											image ? 
											<Image source={{uri:image}} style={{width:'100%',height:'100%',borderRadius:10}} /> 
											: 
											<Image
												source={require("../../../images/HomeImages/post6.jpg")}
												style={{width:'100%',height:'100%',borderRadius:10}}
											/>
										}
									</Pressable>

									<View style={{width:'85%',height:'20%',alignSelf:'flex-end',marginTop:20,alignSelf:'center',borderRadius:10}}>
										<Text style={styles.scrapDescription}>{description}</Text>
									</View>
								</Pressable>
							</View>
							:
							<View style={{width:width,height:height*0.65,justifyContent:'center',alignItems:'center'}}>
								<Pressable
									disabled={true}
									style={{width:'95%',height:'90%',backgroundColor:Color.darkColor,borderRadius:10,flexDirection:(index%2==0)?'column':'column-reverse'}}
								>
									<View style={styles.imgObject}>
										<Image
											source={require("../../../images/HomeImages/post6.jpg")}
											style={{width:'50%',height:'70%',borderRadius:10}}
										/>
										<View style={styles.imgDet}>
											<Text style={styles.imgTitle}>Scrapbook Name</Text>
											<Text style={styles.imgDescription}>Scrapbook Description</Text>
										</View>
									</View>
									<View style={[styles.imgObject,{flexDirection:'row-reverse'}]}>
										<Image
											source={require("../../../images/HomeImages/post6.jpg")}
											style={{width:'50%',height:'70%',borderRadius:10}}
										/>
										<View style={styles.imgDet}>
											<Text style={styles.imgTitle}>Scrapbook Name</Text>
											<Text style={styles.imgDescription}>Scrapbook Description</Text>
										</View>
									</View>
									<View style={{position:'absolute',top:0,right:0,overflow:'hidden',transform: [{rotateX:'95deg'}]}}>
										<Image
											style={{width:width,height:height,borderRadius:10}}
										/>
									</View>
								</Pressable>
							</View>
						)
					}}
				/>
				{/* <View style={{flexDirection:'row',width:width,justifyContent:'center',alignItems:'center'}}>
					{
						data.map((item,index)=>{
							return(
								<View style={
									{
										width:currentIndex==index?50:10,
										height:currentIndex==index?10:10,
										borderRadius:currentIndex==index?50:10,
										backgroundColor:currentIndex==index?'green':'grey',
										marginHorizontal:5}
									}>

								</View>
							)
						})
					}
				</View> */}
				<View style={styles.postOptions}>
						<View style={{flexDirection:'row'}}>
						<Pressable style={styles.postOpt}>
							{
								liked ? 
								<Entypo 
									name="heart" 
									size={30} 
									color={Color.darkColor}
									onPress={async ()=>{
										const res = await unLike(scrapId,userId)
										const liked = await checkLike(scrapId,userId)
										setLiked(liked)
										}
									}
								/>
								:
								<Entypo 
									name={"heart-outlined"} 
									size={30} 
									color={Color.textMidColor}
									onPress={async ()=>{
										const res = await addLike(scrapId,userId)
										const liked = await checkLike(scrapId,userId)
										setLiked(liked)

									}}
								/>
							}
							<Text style={styles.optionNum}></Text>
						</Pressable>
						<Pressable 
							style={styles.postOpt}
							onPress={()=>{navigation.navigate("CommentScrap",{scrapId:route.params.scrapId,userId:userId})}}
						>
							<FontAwesome 
								name="commenting" 
								size={24} 
								color={Color.textMidColor} 
							/>
							<Text style={styles.optionNum}></Text>
						</Pressable>
						</View>
						<Pressable style={styles.postOpt}>
							{
								saved ?
									<Ionicons 
										name="bookmark" 
										size={24} 
										color={Color.darkColor}
										onPress={async ()=>{
											const res = await deleteSavedScrapbook(userId,scrapId)
											const saved = await checkSavedScrapbook(userId,scrapId)
											setSaved(saved)
										}}
									/>
									:
									<Ionicons 
										name="bookmark-outline" 
										size={24} 
										color={Color.textMidColor}
										onPress={async ()=>{
											const res = await saveScrapbook(userId,scrapId)
											const saved = await checkSavedScrapbook(userId,scrapId)
											setSaved(saved)
										}}
									/>

							}
						</Pressable>
					</View>
				
			</ScrollView>

		</View>
	)
}

export default ViewScrap

const styles = StyleSheet.create({
	scrapTitle:{
		fontSize:30,
		fontStyle:'italic',
		fontWeight:'600',
		color:Color.lightColor,
		textAlign:'center',
		paddingVertical:10
	},
	scrapDescription:{
		fontSize:20,
		fontStyle:'italic',
		fontWeight:'600',
		color:Color.lightColor,
		textAlign:'center',
		paddingVertical:10
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
	imgObject:{
		width:'90%',
		height:'45%',
		marginTop:30,
		marginTop:20,
		alignSelf:'center',
		borderRadius:10,
		justifyContent:'center',
		flexDirection:'row',
		alignItems:'center'
	},
	imgDet:{
		width:'50%',
		height:'60%',
		borderRadius:10
	},
	imgTitle:{
		fontSize:18,
		fontStyle:'italic',
		fontWeight:'600',
		color:Color.lightColor,
		textAlign:'center',
		padding:10
	},
	imgDescription:{
		fontSize:15,
		fontStyle:'italic',
		fontWeight:'600',
		color:Color.lightColor,
		textAlign:'center',
		padding:10
	},
	postOptions:{
		width:'80%',
		flexDirection:'row',
		alignSelf:'center',
		justifyContent:'space-between',
		paddingTop:20,
		paddingBottom:10,
	},
	postOpt:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		paddingHorizontal:20
	},
	optionNum:{
		paddingHorizontal:5,
		fontWeight:'400',
		color:Color.blackColor,
		fontSize:16,	
	}



})