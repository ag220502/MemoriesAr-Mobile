import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import style from '../../../StyleSheets/main.js'
import Color from '../../../ColourThemes/theme1.js'
import { StatusBar } from 'expo-status-bar'
import * as ImagePicker from 'expo-image-picker'
const CoverPage = () => {
	const [name,setName] = useState('')
	const [description,setDescription] = useState('')
	const [image,setImage] = useState(null)
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

	return (
		<View style={style.container}>
			<StatusBar style="light" />
			<View style={style.downMain}>
				<Text style={style.frameHead}>Cover Page</Text>
			</View>
			<View style={[style.mainDown,{justifyContent:'center',alignItems:'center'}]}>
				<View style={{width:'90%',height:'70%',alignSelf:'center',backgroundColor:Color.darkColor,borderRadius:15}}>
					<View style={{width:'85%',height:50,backgroundColor:Color.lightColor,marginTop:20,alignSelf:'center',borderRadius:10}}>
						<TextInput
							style={{fontSize:18,fontWeight:'600',color:Color.textDarkColor,width:'100%',height:'100%',paddingHorizontal:10}}
							placeholder="Scrapbook Title"
						/>
					</View>
					<Pressable 

						style={{width:'85%',height:200,marginTop:30,backgroundColor:Color.lightColor,marginTop:20,alignSelf:'center',borderRadius:10}}
						onPress={() => {pickImage()}}
					>
						{
							image ? 
							<Image source={{uri:image}} style={{width:'100%',height:'100%',borderRadius:10}} /> 
							: 
							<View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}></View>
						}
					</Pressable>
					<View style={{width:'85%',height:100,backgroundColor:Color.lightColor,marginTop:20,alignSelf:'center',borderRadius:10}}>
						<TextInput
							multiline={true}
							style={{fontSize:18,fontWeight:'600',color:Color.textDarkColor,width:'100%',height:'100%',paddingHorizontal:10,paddingTop:10}}
							placeholder="Scrapbook Description"
						/>
					</View>
				</View>
			</View>
		</View>
		
	)
}

export default CoverPage

const styles = StyleSheet.create({})