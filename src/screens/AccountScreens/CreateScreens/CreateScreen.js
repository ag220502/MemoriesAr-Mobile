import { StyleSheet, Text, View,StatusBar, Pressable, TextInput, ScrollView,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import BottomNavBar from '../../../components/BottomNavBar.js'
import { Entypo } from '@expo/vector-icons';
import style from '../../../StyleSheets/main.js'
import * as ImagePicker from 'expo-image-picker'
import Color from '../../../ColourThemes/theme1.js'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { StackActions } from '@react-navigation/native';
import {createPost} from '../../fetchData/createPost.js';
import { getProfileData } from '../../fetchData/profileData.js';
import * as FileSystem from 'expo-file-system';

const CreateScreen = ({navigation,route,location}) => {
	
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
	if(!data)
	{
		getProfileData(route.params.userId).then((data)=>{
			setData(data)
			setProfile(data.profilePhoto)
			setName(data.firstName+" "+data.lastName)
		})
	}
	
	

    useEffect(()=>{
        (async ()=>{
            if(!hasGalleryPer)
			{
				const galleryPermission = await ImagePicker.requestCameraPermissionsAsync()
				console.log("Asking Permission")
				setGalleryPer(galleryPermission === 'granted');
			}
        })()
    },[])

    const pickImage = async ()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        })
        if(!result.canceled)
        {
            setImage(result.assets[0].uri)
        }
    }

	const createNew = async ()=>{
		console.log("Creating New Post")
		if (image) {
			const base64 = await FileSystem.readAsStringAsync(image, {
				encoding: FileSystem.EncodingType.Base64,
			});
			const result = await createPost(route.params.userId,caption,lattitude,longitude,postType,base64,taggedUsers)
			console.log("Result is "+result)
			// Convert the image to a base64-encoded string
			// RNImageToBase64(response.uri)
			//   	.then(async (base64String) => {
					// 
			//   	})
		}
		
	}

	return (
		<View style={style.container}>
			<StatusBar barStyle={"light-content"}/>
			<View style={style.downMain}>
				<View style={styles.userDetails}>
					<Pressable style={styles.buttonView}
						onPress={()=>navigation.dispatch(
							StackActions.replace('CreateOption',{userId:route.params.userId})
						)}
					>
						<Entypo name="cross" size={24} color={Color.textDarkColor} />
					</Pressable>
					<Text style={styles.userName}>Create Memory</Text>
					<Pressable style={styles.buttonView} onPress={()=>{
						createNew()
					}}>
						<Text color={Color.textDarkColor} style={{fontWeight:'700'}}>Post</Text>
					</Pressable>
				</View>
			</View>
			<ScrollView style={style.mainDown}>
				<View style={styles.userPosting}>
					{
						profile? <Image
							source={{uri:profile}}
							style={styles.userProfile}
						/> : <Image
							source={require('../../../images/ProfileImages/default.png')}
							style={styles.userProfile}
						/>
					}
					<Text style={styles.userText}>
						{name}
					</Text>
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
			</ScrollView>
			{/* <BottomNavBar navigation={navigation} userId={route.params.userId}/> */}
		</View>
	)
}

export default CreateScreen

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