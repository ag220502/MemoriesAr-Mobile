import { StyleSheet, View, Text, SafeAreaView, Pressable } from 'react-native'
import React,{useEffect,useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import BottomNavBar from '../../components/BottomNavBar'
import TopNavBar from '../../components/TopNavBar'
import UserFeed from '../../components/UserFeed'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../context/AuthContext'
import { getHomeFeed } from '../fetchData/homeScreenData'
import UserScrap from '../../components/UserScrap'

import Color from '../../ColourThemes/theme1'

const MainScreen = ({navigation}) => {
	const context = React.useContext(AuthContext)
	// console.log(context)
	const [id,setId] = useState(null)
	const [show,setShow] = useState(0)
    const getId = async ()=>{
        const user  = await AsyncStorage.getItem("userId")
		setId(parseInt(user))
    }
    useEffect(()=>{
		if(!id)
		{
			getId()
		}
	}, [])

  	return (

		<SafeAreaView style={styles.container}>
			{
			Number.isInteger(id) &&
				<>
					<StatusBar barStyle="dark"/>
					<TopNavBar navigation={navigation} userId={id}/>
					<View style={{width:'100%',marginTop:50,height:70,backgroundColor:Color.lightColor,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
						<Pressable style={styles.postBtn}
							onPress={()=>{
								setShow(0)
							}}
						>
							<Text style={styles.btnText}>Memories</Text>
						</Pressable>
						<Pressable style={styles.postBtn}
							onPress={()=>{
								setShow(1)
							}}
						>
							<Text style={styles.btnText}>Scrapbooks</Text>
						</Pressable>
					</View>
					{
						show == 0?
						<UserFeed navigation={navigation} userId={id}/>
						:
						<UserScrap navigation={navigation} userId={id}/>
					}
					
					<BottomNavBar navigation={navigation} userId={id}/>
				</>
			}
		</SafeAreaView>
  	)
}

export default MainScreen

const styles = StyleSheet.create({
	postBtn:{
		width:'40%',
		height:40,
		backgroundColor:Color.darkColor,
		borderRadius:10,
		justifyContent:'center',
		alignItems:'center'

	},
	btnText:{
		color:Color.lightColor,
		fontSize:20,
		fontWeight:'700'
		
	},
    container:{
        width: '100%',
        height: '100%',
    },
})