import { Pressable, StyleSheet, Text, TextInput, View,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import style from '../../../StyleSheets/main.js'
import Color from '../../../ColourThemes/theme1.js'
import { StatusBar } from 'expo-status-bar'
import * as ImagePicker from 'expo-image-picker'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
const CoverPage = ({navigation,route}) => {

	const [name,setName] = useState('')
	const [description,setDescription] = useState('')
	const [image,setImage] = useState(null)
	const [lattitude,setLattitude] = useState(25.2047)
	const [longitude,setLongitude] = useState(55.2707)
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
	const getLocation=async()=>{
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			setErrorMsg('Permission to access location was denied');
			return;
		}
		let location = await Location.getCurrentPositionAsync({enableHighAccuracy:true});
		setLattitude(location.coords.latitude)
		setLongitude(location.coords.longitude)
	}
	getLocation();
	useEffect(()=>{
		getLocation()
	},[])
	return (
		<View style={style.container}>
			<StatusBar style="light" />
			<View style={style.downMain}>
				<Text style={style.frameHead}>Cover Page</Text>
			</View>
			<View style={[style.mainDown,{alignItems:'center'}]}>
				<Text style={{marginTop:20,paddingVertical:20,fontSize:18,fontWeight:'600'}}>
					Add All the details for the cover page
				</Text>
				<View style={{width:'90%',height:'70%',alignSelf:'center',backgroundColor:Color.darkColor,borderRadius:15}}>
					<View style={{width:'85%',height:'10%',backgroundColor:Color.lightColor,marginTop:20,alignSelf:'center',borderRadius:10}}>
						<TextInput
							style={{fontSize:18,fontWeight:'600',color:Color.textDarkColor,width:'100%',height:'100%',paddingHorizontal:10}}
							placeholder="Scrapbook Title"
							onChangeText={(text)=>setName(text)}
							value={name}

						/>
					</View>
					<Pressable 
						style={{width:'85%',height:'55%',marginTop:30,backgroundColor:Color.lightColor,marginTop:20,alignSelf:'center',borderRadius:10}}
						onPress={() => {pickImage()}}
					>
						{
							image ? 
							<Image source={{uri:image}} style={{width:'100%',height:'100%',borderRadius:10}} /> 
							: 
							<View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
								<MaterialCommunityIcons name="image-plus" size={34} color="black" />
								<Text style={{padding:15,fontSize:16,fontWeight:'600'}}>Add Cover Photo</Text>
							</View>
						}
					</Pressable>

					<View style={{width:'85%',height:'20%',alignSelf:'flex-end',backgroundColor:Color.lightColor,marginTop:20,alignSelf:'center',borderRadius:10}}>
						<TextInput
							multiline={true}
							style={{fontSize:18,fontWeight:'600',color:Color.textDarkColor,width:'100%',height:'100%',paddingHorizontal:10,paddingTop:10}}
							placeholder="Scrapbook Description"
							onChangeText={(text)=>setDescription(text)}
							value={description}
						/>
					</View>
				</View>
				<View style={styles.btnView1}>
					<Pressable 
						style={[styles.btnView,{backgroundColor:Color.lightColor,borderWidth:1,borderColor:Color.darkColor}]}
						onPress={() => {navigation.navigate('CreateOption',{userId:route.params.userId})}}
					>
						<Text style={[styles.btnText,{color:Color.darkColor}]}>
							Cancel
						</Text>
					</Pressable>
					<Pressable 
						style={styles.btnView}
						onPress={()=>{navigation.navigate('CreateScrapImages',{userId:route.params.userId,name:name,description:description,image:image,lattitude:lattitude,longitude:longitude,template:route.params.templateId})}}
					>
						<Text style={styles.btnText}>
							Next
						</Text>
					</Pressable>
				</View>
			</View>
		</View>
		
	)
}

export default CoverPage

const styles = StyleSheet.create({
	btnView1:{
		width:'100%',
		height:100,
		justifyContent:'space-evenly',
		alignItems:'center',
		marginTop:20,
		flexDirection:'row'

	},
	btnView:{
		width:'30%',
		
		height:50,
		backgroundColor:Color.darkColor,
		borderRadius:10,
		alignSelf:'center',
		marginTop:10,
		justifyContent:'center',
		alignItems:'center'
	},
	btnText:{
		fontSize:18,
		fontWeight:'600',
		color:Color.lightColor,
		
		
	}
})