import { StyleSheet, Text, View, Image, Pressable,TextInput,Alert  } from 'react-native'
import React,{useState,useEffect} from 'react'
import editPic from '../../../images/ProfileImages/editProfile.png'
import { Ionicons } from '@expo/vector-icons'; 
import Color from './../../../ColourThemes/theme1.js'
import { StackActions } from '@react-navigation/native';
import { WEB } from '../../../../var';
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system';


const EditProfile = (props) => {
    const [id,setId] = useState(props.route.params.userId)
    const [fName,setFName] = useState(props.route.params.fname)
    const [lName,setLName] = useState(props.route.params.lname)
    const [bio,setBio] = useState(props.route.params.bio)
    const [profilePic,setProfilePic] = useState(props.route.params.profilePic)
    const [hasGalleryPer,setGalleryPer] = useState(false)
    const [hasChanged,setChanged] = useState(false)
    useEffect(()=>{
        (async ()=>{
            if(!hasGalleryPer)
			{
				const galleryPermission = await ImagePicker.requestCameraPermissionsAsync()
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
            setProfilePic(result.assets[0].uri)
            setChanged(true)
        }
    }
    const updateData= async ()=>{
        console.log(id)
        if(fName==="" || fName.trim()==="")
        {
            Alert.alert("Please fill First Name")
            return
        }
        if(hasChanged)
        {
            const base64 = await FileSystem.readAsStringAsync(profilePic, {
				encoding: FileSystem.EncodingType.Base64,
			});
            setProfilePic(base64)
        }
        fetch(WEB+"/api/users/updateProfile",{
            method:"PATCH",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:id,
                firstName:fName,
                lastName:lName,
                bio:bio,
                profilePhoto:profilePic
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data==="Profile Updated")
            {
                Alert.alert("Profile Updated Successfully","",[{
                    text:"Ok",
                    onPress:()=>{
                        props.navigation.dispatch(
                            StackActions.replace('ProfileScreen',{userId:id})
                        )
                    }
                }])
            }
        })
    }


    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Pressable style={styles.buttonView}
                    onPress={()=>props.navigation.navigate("ProfileScreen",{userId:id})}
                >
                    <Text style={styles.btnText}>Cancel</Text>
                </Pressable>
                <Text style={styles.headText}>Edit Profile</Text>
                <Pressable style={styles.buttonView}
                    onPress={()=>updateData()}
                >
                    <Text style={styles.btnText}>Save</Text>
                </Pressable>
            </View>
            <View style={styles.main}>
                <View style={styles.profile_img}>
                    <Image style={styles.pofile} source={{uri:profilePic}}/>
                    <Pressable 
                        onPress={()=>pickImage()}
                        style={styles.selectPic}
                    >
                        <Ionicons name="images" size={24}  color={Color.lightColor}/>
                    </Pressable>
                </View>
                <View style={styles.detailsView}>
                    
                    <View style={styles.inputView}>
                        <Text style={styles.label}>First Name</Text>
                        <TextInput
                            style={styles.input}
                            value={fName}
                            onChangeText = {(text)=>{
                                setFName(text)
                            }}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.label}>Last Name</Text>
                        <TextInput 
                            style={styles.input}
                            value={lName}
                            onChangeText = {(text)=>{
                                setLName(text)
                            }}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.label}>Bio</Text>
                        <TextInput 
                            style={[styles.input,styles.inputMultiple]}
                            multiline
                            value={bio}
                            onChangeText = {(text)=>{
                                setBio(text)
                            }}
                        />
                    </View>
                </View>
                <View style={styles.picView}>
                    <Image source={editPic} resizeMode={'contain'} style={styles.pic}/>
                </View>
            </View>
        </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:Color.darkColor
    },
    search:{
        width:'100%',
        top:40,
        paddingVertical:20,
        justifyContent:'space-between',
        paddingHorizontal:20,
        flexDirection:'row'
    },
    headText:{
        fontSize:22,
        fontWeight:'bold',
        alignSelf:'center',
        justifyContent:'center',
        color:Color.textLightColor
    },
    selectPic:{
        position:'absolute',
        backgroundColor:Color.darkColor,
        padding:10,
        borderRadius:20,
        bottom:-10,
        right:-10
    },
    buttonView:{
        height:45,
        paddingHorizontal:10,
        backgroundColor:Color.lightColor,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    main:{
        flexDirection:'column',
        bottom:0,
        position:'absolute',
        backgroundColor:Color.lightColor,
        width:'100%',
        height:'80%',
        borderTopLeftRadius:'60',
        borderTopRightRadius:'60',
        paddingTop:20,
    },
    pofile:{
        alignSelf:'center',
        width:100,
        height:100,
        borderRadius:100
    },
    profile_img:{
        position:'absolute',
        width:100,
        height:100,
        backgroundColor:'black',
        alignSelf:'center',
        marginTop:-50,
        borderRadius:100
    },
    detailsView:{
        marginTop:50,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    inputView:{
        marginVertical:10
    },
    label:{
        fontSize:18,
        color:Color.textMidColor,
        paddingLeft:15
    },
    input:{
        elevation:10,
        backgroundColor:Color.whiteColor,
        width:300,
        borderRadius:20,
        height:40,
        margin:10,
        padding:10,
        fontSize:17,
        shadowColor: Color.blackColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    inputMultiple:
    {
        height:80,
        paddingTop:15
    },
    btnText:{
        color:Color.darkColor,
        fontWeight:'700'
    },
    picView:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        height:200,
        marginVertical:20
      },
      pic:{
        width:'70%',
        height:'100%',
      },
})