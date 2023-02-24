import { StyleSheet, Text, View, StatusBar, Pressable, Image, Alert } from 'react-native'
import React,{useState,useContext} from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import deletePic from '../../../../images/SettingImages/delete.png'
import Color from './../../../../ColourThemes/theme1.js'
import SimpleModal from '../../../../components/Modals/SimpleModal';

import { AuthContext } from '../../../context/AuthContext.js';


const DeleteAccount = ({navigation,route}) => {
	const {logout} = useContext(AuthContext)
	const deleteAcc= async()=>{
		try{
			await fetch ('http://localhost:3000/api/users/delete',{
				method:"DELETE",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body:JSON.stringify({
					"id":route.params.userId
				})
			}).then(
				res => {
					if(res.status===200)
					{
						res.json().then((data)=>{
							if(data=="Account Deleted")
							{
								Alert.alert("Account Deleted Successfully","",[{
									text:"Ok",
									onPress:async ()=>{
										try
										{
											logout()
										}
										catch(err)
										{
											console.log(err)
										}
									}
								}])
							}
						})
					}
					else if(res.status==400)
					{
						console.log("Res"+res)
					}
			})
		}
		catch(err)
		{

		}
	}

	return (
		<View style={styles.container}>
			<StatusBar barStyle={"light-content"}/>
			<View style={styles.search}>
				<Pressable style={styles.buttonIconView}
					onPress={()=>navigation.navigate("Settings",{userId:route.params.userId})}
				>
					<Ionicons name="chevron-back" size={30} color={Color.textDarkColor} />
				</Pressable>
				<Text style={styles.head}>Delete Account</Text>
			</View>
			<View style={styles.main}>
				<View style={styles.picView}>
					<Image source={deletePic} resizeMode={'contain'} style={styles.pic}/>
				</View>
				<View style={styles.textView}>
					<Text style={styles.deleteText}>We're sorry to see you go, If you want to permanently delete your Account click on Delete Accout. Deleting your account will remove all your data from our platform.</Text>
				</View>
				<Pressable 
					style={styles.buttonView}
					onPress={()=>{
						Alert.alert("Delete Account","Are you sure you want to delete your account?",[{
							text:"Cancel",
							onPress:()=>{
							}
							},
							{
								text:"Yes",
								onPress:()=>{
									deleteAcc()
								}
							}
						])
					}}
				>
					<Text style={styles.buttonText}>Delete Account</Text>
				</Pressable>
			</View>
		</View>
	)
}

export default DeleteAccount

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:Color.darkColor,
    alignItems:'center',
    justifyContent:'center'
  },
  search:{
    width:'90%',
    height:'15%',
    top:40,
    paddingVertical:20,
    paddingHorizontal:10,
    alignItems:'center'
  },
  buttonView:{
    width:45,
    height:45,
    backgroundColor:Color.lightColor,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-start',
  },
  buttonIconView:{
    width:45,
    height:45,
    backgroundColor:Color.lightColor,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-start',
},
  main:{
    flexDirection:'column',
    backgroundColor:Color.lightColor,
    width:'100%',
    height:'85%',
    borderTopLeftRadius:'60',
    borderTopRightRadius:'60',
    paddingTop:20,
    alignItems:'center',
    justifyContent:'flex-start',
    flexDirection:'column'
  },
  head:{
    position:'absolute',
    alignSelf:'center',
    top:30,
    fontSize:24,
    color:Color.textLightColor,
    fontWeight:'bold',
   
  },
  picView:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    height:400,
  },
  pic:{
    width:'70%',
    height:'70%',
  },
  textView:{
    paddingHorizontal:20,
    marginVertical:20
  },
  deleteText:{
    fontSize:17,
    lineHeight:25,
    fontWeight:'500'
  },
  buttonView:{
    borderRadius:30,
    backgroundColor:Color.darkColor,
    padding:10,
    margin:20,
    height:45
  },
  buttonText:{
      textAlign:'center',
      fontSize:20,
      color:Color.whiteColor,
      paddingHorizontal:20,
  }
})