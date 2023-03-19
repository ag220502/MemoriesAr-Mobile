import { StyleSheet, Text, View,Pressable,Image,TextInput } from 'react-native'
import React,{useState} from 'react'
import style from '../../../StyleSheets/main.js'
import Color from '../../../ColourThemes/theme1.js'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { StackActions } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

const CreateScrapbooks = ({navigation,route}) => {
	const [data,setData] = useState('')
	const [profile,setProfile] = useState('')
	const [name,setName] = useState('')
	const [hasGalleryPer,setGalleryPer] = useState(false)
    const [image,setImage] = useState('')
	const [caption,setCaption] = useState('')
	const [postLocation,setPostLocation] = useState('')
	const [lattitude,setLattitude] = useState(25.2048)
	const [longitude,setLongitude] = useState(55.2708)
	const [postType,setPostType] = useState(1)
	const [taggedUsers,setTaggedUsers] = useState([])
	return (
		<View style={style.container}>
			<View style={style.downMain}>
				<View style={styles.userDetails}>
					<Pressable style={styles.buttonView}
						onPress={()=>navigation.dispatch(
							StackActions.replace('CreateOption',{userId:route.params.userId})
						)}
					>
						<Entypo name="cross" size={24} color={Color.textDarkColor} />
					</Pressable>
					<Text style={styles.userName}>Create Scrapbook</Text>
					<Pressable style={styles.buttonView} onPress={()=>{
						navigation.navigate("CoverPage")
					}}>
						<Text color={Color.textDarkColor} style={{fontWeight:'700'}}>Next</Text>
					</Pressable>
				</View>
			</View>
			<View style={style.mainDown}>
				<View style={[styles.postCaption,{height:40,marginTop:50}]}>
					<TextInput
						style={[styles.caption,{height:40}]} 
						placeholder="Enter Scrapbook Name"
						value={caption}
						onChangeText={(text)=>setCaption(text)}
						blurOnSubmit = {true}
					/>
				</View>
				<View style={styles.postCaption}>
					<TextInput 
						multiline style={styles.caption} 
						placeholder="What's in your mind?"
						value={caption}
						onChangeText={(text)=>setCaption(text)}
						blurOnSubmit = {true}
					/>
				</View>
				<View style={styles.postOptions}>
					<Pressable 
						style={styles.option}
						onPress={
							()=>pickImage()}
					>
						<MaterialIcons name="add-photo-alternate" size={32} color="black" />
						{image? <Text style={styles.postOptionText}>Image Uploaded</Text> : <Text style={styles.postOptionText}>Upload Photo Or Video</Text>}
					</Pressable>
					<Pressable 
						style={styles.option}
						onPress={
							()=>navigation.dispatch(
								StackActions.replace('AddLocation')
							)}
					>
						<MaterialIcons name="add-location-alt" size={32} color="black" />
						<Text style={styles.postOptionText}>Add Location</Text>
					</Pressable>
					<Pressable style={styles.option}>
						<FontAwesome name="user-plus" size={28} color="black" />
						<Text style={styles.postOptionText}>Tag People</Text>
					</Pressable>
					<View style={styles.postType}>
						<Text style={styles.contentHead}>Select Content Type</Text>
						<View style={styles.typeOptions}>
							<Pressable style={styles.typeOption}>
								<Text style={styles.typeText}>Fictional</Text>
							</Pressable>
							<Pressable 
								style={styles.typeOption}
							>
								<Text style={styles.typeText}>Opinion</Text>
							</Pressable>
							
						</View>
					</View>
				</View>
			</View>
		</View>
	)
}

export default CreateScrapbooks

const styles = StyleSheet.create({
	userPosting:{
		marginTop:30,
		height:70,
		flexDirection:'row',
		alignContent:'flex-start',
		width:'90%',
		alignSelf:'center',
		alignItems:'center'
	},
	userProfile:{
		
		width:50,
		height:50,
		backgroundColor:'red',
		borderRadius:100
	},
	userText:{
		paddingHorizontal:15,
		fontSize:18,
		fontWeight:'600'
	},
	userDetails:{
        marginTop:40,
        flexDirection:'row',
		justifyContent:'space-between',
        paddingHorizontal:20,
        paddingVertical:10,
    },
	userName:{
        fontSize:22,
        fontWeight:'bold',
        alignSelf:'center',
		color:Color.textLightColor
    },
	buttonView:{
        width:45,
        height:45,
        backgroundColor:Color.lightColor,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
	postCaption:{
		marginTop:10,
	},
	caption:{
		width:'90%',
		height:200,
		backgroundColor:Color.whiteColor,
		alignSelf:'center',
		borderRadius:10,
		padding:10,
		paddingTop:15,
		fontSize:16
	},
	
	postOptions:{
		width:'90%',
		alignSelf:'center',
		marginTop:30,
	},
	option:{
		flexDirection:'row',
		alignContent:'flex-start',
		height:60,
		alignItems:'center',
		borderBottomWidth:0.2,
		borderBottomColor:Color.midColor
	},
	postOptionText:{
		fontSize:18,
		paddingHorizontal:10
	},
	postType:{
		marginTop:10,
		flexDirection:'column',
	},
	contentHead:{
		fontSize:18,
		fontWeight:'600'
	},
	typeOptions:{
		flexDirection:'row',
		paddingVertical:15
	},
	typeOption:{
		borderRadius:5,
		borderColor:Color.darkColor,
		borderWidth:1,
		marginRight:20
	},
	typeText:{
		fontSize:16,
		padding:5
	}
})