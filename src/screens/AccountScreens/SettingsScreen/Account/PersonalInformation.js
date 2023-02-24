import { StyleSheet, Text, View, Image, Pressable,TextInput,Alert  } from 'react-native'
import React, { useState } from 'react'
import Color from './../../../../ColourThemes/theme1.js'
import { StackActions } from '@react-navigation/native';
const PersonalInformation = ({navigation,route}) => {
	const [id,setId] = useState(route.params.userId)
	const [email,setEmail] = useState("")
	const [mobile,setMobile] = useState(null)
	const [dob,setDob] = useState(null)
	const [gender,setGen] = useState("")

	const [getData,setGetData] = useState(false)
	const getUserData= async()=>
	{
		try
        {
            await fetch ('http://localhost:3000/api/users/personal/'+id,{
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				  }
			}).then(
                res => {
					if(res.status===200)
					{
						res.json().then((data)=>{
							if(data[0].id)
							{
								setEmail(data[0].email)
								setMobile(data[0].mobile)
								setDob(data[0].dob)
								setGen(data[0].gender)
							}
						})
					}
					else if(res.status==400)
					{
						console.log(res)
					}
            })
        }
        catch(err)
        {
            console.log(err)
        }
	}
	if(!getData)
	{
		getUserData()
		setGetData(true)
	}

	const updateData=()=>{
        fetch("http://localhost:3000/api/users/updatePersonal",{
            method:"PATCH",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:id,
                dob:dob,
                countryCode:"971",
                mobile:mobile,
                gender:"0"
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data==="Personal Data Updated")
            {
                Alert.alert("Details Updated Successfully","",[{
                    text:"Ok",
                    onPress:()=>{
                        navigation.dispatch(
                            StackActions.replace('Settings',{userId:id})
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
					onPress={()=>navigation.navigate("Settings",{userId:route.params.userId})}
				>
					<Text style={styles.btnText}>Cancel</Text>
				</Pressable>
				<Text style={styles.headText}>Personal Information</Text>
				<Pressable style={styles.buttonView}
					onPress={()=>updateData()}
				>
					<Text style={styles.btnText}>Save</Text>
				</Pressable>
			</View>
			<View style={styles.main}>
				<View style={styles.profile_img}>
					<Image style={styles.pofile} source={require('../../../../images/ProfileImages/profile.png')}/>
				</View>
				<View style={styles.detailsView}>
					<View style={styles.inputView}>
						<Text style={styles.label}>Email Id</Text>
						<TextInput 
							style={[styles.input,{color:'grey'}]}
							value={email}
							editable={false}
							onChangeText={(text)=>{setEmail(text)}}
						/>
					</View>
					<View style={styles.inputView}>
						<Text style={styles.label}>Mobile Number</Text>
						<TextInput 
							style={styles.input}
							value={mobile}
							onChangeText={(text)=>{setMobile(text)}}
						/>
					</View>
					<View style={styles.inputView}>
						<Text style={styles.label}>Date Of Birth</Text>
						<TextInput 
							style={styles.input}
							value={dob}
							onChangeText={(text)=>{setDob(text)}}
						/>
					</View>
					{/* <View style={styles.inputView}>
						<Text style={styles.label}>Country</Text>
						<TextInput style={[styles.input,styles.input]}/>
					</View>
					<View style={styles.inputView}>
						<Text style={styles.label}>State</Text>
						<TextInput style={styles.input}/>
					</View>
					<View style={styles.inputView}>
						<Text style={styles.label}>City</Text>
						<TextInput style={[styles.input]} />
					</View> */}
					
				</View>
			</View>
		</View>
	)
}

export default PersonalInformation

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
        marginVertical:5
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
        borderRadius:10,
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
        height:100,
        paddingTop:15
    },
    btnText:{
        color:Color.blackColor,
        fontWeight:'700'
    }
})