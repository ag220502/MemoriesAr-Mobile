import { StyleSheet, Text, View, Image, Pressable,TextInput,Alert,Modal,ActivityIndicator  } from 'react-native'
import React, { useState } from 'react'
import Color from './../../../../ColourThemes/theme1.js'
import { StackActions } from '@react-navigation/native';
import DatePicker from 'react-native-modern-datepicker'
import { getToday,getFormatedDate } from 'react-native-modern-datepicker';
import moment from 'moment';
import { WEB } from '../../../../../var.js';
const PersonalInformation = ({navigation,route}) => {
	const [id,setId] = useState(route.params.userId)
	const [email,setEmail] = useState("")
	const [mobile,setMobile] = useState(null)
	const [dob,setDob] = useState(null)
	const [gender,setGen] = useState("")
    const [open,setOpen] = useState(false)
    const [profile,setProfile] = useState(null)
	const [getData,setGetData] = useState(false)
    const [loading,setLoading] = useState(true)
	const getUserData= async()=>
	{
		try
        {
            await fetch ({WEB}+'/api/users/personal/'+id,{
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
								setDob(moment.utc(data[0].dob).add(1,'days').format('YYYY/MM/DD'))
								setGen(data[0].gender)
                                setProfile(data[0].profilePhoto)
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
        setLoading(false)
	}

    
	const updateData=()=>{
        if(mobile!=null && mobile.length!=10)
        {   
            Alert.alert("Invalid Mobile Number","Please Enter Valid Mobile Number",[{
                text:"Ok",
                onPress:()=>{}
            }])
            return
        }
        if(mobile.trim().length==0)
        {
            Alert.alert("Invalid Mobile Number","Please Enter Valid Mobile Number",[{
                text:"Ok",
                onPress:()=>{}
            }])
            return
        }
        if(dob==null)
        {
            Alert.alert("Invalid Date Of Birth","Please Enter Valid Date Of Birth",[{
                text:"Ok",
                onPress:()=>{}
            }])
            return
        }

        fetch(WEB+"/api/users/updatePersonal",{
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
    const handleOnPress = () => {
        setOpen(!open)
    }
    const handleChange = (date) => {
        setDob(date)
        setOpen(!open)
    }

    if(loading)
    {
        return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
			<ActivityIndicator size={"large"}/>
		</View>)
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

                {
                    profile==null || profile==="" ? <Image style={styles.pofile} source={require('../../../../images/ProfileImages/default.png')}/> : <Image style={styles.pofile}  source={{uri:profile}}/>
                }

					
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
						<Pressable 
							style={styles.input}	
                            onPress={handleOnPress}
						>
                            <Text>{dob}</Text>
                        </Pressable>
                        <Modal
                            animationType='slide'
                            transparent={true}
                            visible={open}
                        >
                            <View style={styles.modalView}>
                                <View style={styles.modal}>
                                    <DatePicker
                                        selected={dob}
                                        locale="en"
                                        mode={"datepicker"}
                                        onDateChange={handleChange}
                                        
                                    />

                                    {/* <Pressable onPress={handleOnPress}><Text>Close</Text></Pressable> */}
                                </View>
                            </View>
                        </Modal>
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
    modalView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:22
    },
    modal:{
        margin:10,
        backgroundColor:Color.whiteColor,
        borderRadius:20,
        padding:15,
        alignItems:'center',
        width:'90%',
        shadowColor:Color.midColor,
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5
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