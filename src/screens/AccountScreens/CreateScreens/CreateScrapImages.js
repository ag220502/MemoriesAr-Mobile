import { StyleSheet, Text, View,StatusBar,Pressable,Image, Alert,TextInput,ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import Color from '../../../ColourThemes/theme1.js'
import style from '../../../StyleSheets/main.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import {createScrapbook,uploadImages} from "../../fetchData/Scrapbooks/uploadScrap.js"
import * as FileSystem from 'expo-file-system';
const CreateScrapImages = ({navigation,route}) => {
	
	const [image1,setImage1] = useState(null)
	const [image2,setImage2] = useState(null)
	const [title1,setTitle1] = useState("")
	const [title2,setTitle2] = useState("")
	const [des1,setDes1] = useState("")
	const [des2,setDes2] = useState("")

	
	const pickImage1 = async ()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        })
        if(!result.canceled)
        {
            setImage1(result.assets[0].uri)
        }
    }
	const pickImage2 = async ()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        })
        if(!result.canceled)
        {
            setImage2(result.assets[0].uri)
        }
    }
	const uploadScrapbook = async ()=>{
		let base64 = await FileSystem.readAsStringAsync(route.params.image, {
			encoding: FileSystem.EncodingType.Base64,
		});
		const result = await createScrapbook(route.params.userId,route.params.name,route.params.description,route.params.lattitude,route.params.longitude,0,base64,route.params.templateId)
		const id = result.insertId
		console.log(result)
		let base641 = await FileSystem.readAsStringAsync(image1, {
			encoding: FileSystem.EncodingType.Base64,
		});
		let base642 = await FileSystem.readAsStringAsync(image2, {
			encoding: FileSystem.EncodingType.Base64,
		});
		const arr = [
			{
				scrapId:id,
				image:base641,
				textHeading:title1,
				photoText:des1
			},
			{
				scrapId:id,
				image:base642,
				textHeading:title2,
				photoText:des2
			}
		]
		const result2 = await uploadImages(arr)
		console.log(result2)
	}
    return (
        <View style={style.container}>
            <StatusBar barStyle={"light-content"}/>
            <View style={style.downMain}>
				<View style={styles.userDetails}>
					<Pressable style={styles.buttonView}
						onPress={()=>navigation.goBack()}
					>
						<Entypo name="cross" size={24} color={Color.textDarkColor} />
					</Pressable>
					<Text style={styles.userName}>Scrapbook Images</Text>
					<Pressable style={styles.buttonView} onPress={()=>{
						uploadScrapbook()
					}}>
						<Text color={Color.textDarkColor} style={{fontWeight:'700'}}>Post</Text>
					</Pressable>
				</View>
			</View>
            <View style={style.mainDown}>
			<View style={{width:'90%',height:'45%',alignSelf:'center',marginTop:40}}>
				<Text style={{fontSize:17,fontWeight:'700',paddingHorizontal:20,paddingVertical:15}}>Image 1</Text>
				<View>
					<TextInput
						style={{width:'90%',height:40,alignSelf:'center',backgroundColor:'white',borderRadius:10,margin:10,padding:10}}
						placeholder={"Image Title"}
						value={title1}
						onChangeText={(text)=>setTitle1(text)}
					/>
				</View>
				<View>
					<TextInput
						style={{width:'90%',height:40,alignSelf:'center',backgroundColor:'white',borderRadius:10,margin:10,padding:10}}
						placeholder={"Image Description"}
						value={des1}
						onChangeText={(text)=>setDes1(text)}
					/>
				</View>
				<View>
					<Pressable 
							style={{width:'85%',height:'55%',marginTop:30,backgroundColor:Color.lightColor,borderColor:Color.darkColor,borderWidth:1,marginTop:20,alignSelf:'center',borderRadius:10}}
							onPress={() => {pickImage1()}}
						>
							{
								image1 ? 
								<Image source={{uri:image1}} style={{width:'100%',height:'100%',borderRadius:10}} /> 
								: 
								<View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
									<MaterialCommunityIcons name="image-plus" size={34} color="black" />
									<Text style={{padding:15,fontSize:16,fontWeight:'600'}}>Add Image</Text>
								</View>
							}
						</Pressable>
				</View>
			</View>
			<View style={{width:'90%',height:'45%',alignSelf:'center',}}>
			<Text style={{fontSize:17,fontWeight:'700',paddingHorizontal:20,paddingVertical:15}}>Image 2</Text>
				<View>
					<TextInput
						style={{width:'90%',height:40,alignSelf:'center',backgroundColor:'white',borderRadius:10,margin:10,padding:10}}
						placeholder={"Image Title"}
						value={title2}
						onChangeText={(text)=>setTitle2(text)}
					/>
				</View>
				<View>
					<TextInput
						style={{width:'90%',height:40,alignSelf:'center',backgroundColor:'white',borderRadius:10,margin:10,padding:10}}
						placeholder={"Image Description"}
						value={des2}
						onChangeText={(text)=>setDes2(text)}

					/>
				</View>
				<View>
					<Pressable 
							style={{width:'85%',height:'55%',marginTop:30,backgroundColor:Color.lightColor,marginTop:20,alignSelf:'center',borderColor:Color.darkColor,borderWidth:1,borderRadius:10}}
							onPress={() => {pickImage2()}}

						>
							{
								image2 ? 
								<Image source={{uri:image2}} style={{width:'100%',height:'100%',borderRadius:10}} /> 
								: 
								<View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
									<MaterialCommunityIcons name="image-plus" size={34} color="black" />
									<Text style={{padding:15,fontSize:16,fontWeight:'600'}}>Add Image</Text>
								</View>
							}
						</Pressable>
				</View>
			</View>
				
            </View>
        </View>
    )
}

export default CreateScrapImages

const styles = StyleSheet.create({
	userDetails:{
        marginTop:40,
        flexDirection:'row',
		justifyContent:'space-between',
        paddingHorizontal:20,
        paddingVertical:10,
    },
	buttonView:{
        width:45,
        height:45,
        backgroundColor:Color.lightColor,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
	userName:{
        fontSize:22,
        fontWeight:'bold',
        alignSelf:'center',
		color:Color.textLightColor
    },
	addIcon:{
		width:70,
		height:70,
		backgroundColor:Color.darkColor,
		position:'absolute',
		bottom:40,
		right:40,
		borderRadius:50,
		justifyContent:'center',
		alignItems:'center',
	},
    listView:
    {
        marginTop:50,
        width:'90%',
        alignSelf:'center',
    },
    nameBtn:{
        paddingVertical:20,
        paddingHorizontal:10,   
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:'grey',
        borderBottomWidth:0.8
    },
    name:{
        fontSize:18,
        fontWeight:'bold'
    },
    subListView:{
        paddingHorizontal:20,
        paddingVertical:20,
    },
    subListText:{
        fontSize:16
    },
    subListTextView:{
        paddingVertical:15,
        borderBottomColor:'grey',
        borderBottomWidth:0.3,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    head:{
        
        alignSelf:'center',
        
        fontSize:24,
		marginTop:30,
        color:Color.textLightColor,
        fontWeight:'bold'
    }
})