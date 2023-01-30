import { Pressable, StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
const UploadImage = () => {

    const [hasGalleryPer,setGalleryPer] = useState(null)
    const [image,setImage] = useState()

    useEffect(()=>{
        (async ()=>{
            
            const galleryPermission = await ImagePicker.requestCameraPermissionsAsync()
            console.log("Asking Permission")
            setGalleryPer(galleryPermission === 'granted');
            console.log(setGalleryPer)

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
            console.log("Image Added")
        }

    }
    // if(!hasGalleryPer)
    // {
    //     console.log("No Permission")
    //     return
    // }

    return (
        <View style={styles.container}>
            <Pressable 
            style={[{backgroundColor:'red',padding:10}]} 
            onPress={
                ()=>{
                    pickImage()
                }
            }> 
                <Text >UploadImage</Text></Pressable>
            
            {image && <Image source={{uri:image}} style={[{width:100,height:100}]}/>}
        </View>
    ) 
}

export default UploadImage

const styles = StyleSheet.create({
    container: {
		flex: 1,
        justifyContent:'center',
        alignItems:'center'
	  },
})