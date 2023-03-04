import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import React,{useEffect,useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import BottomNavBar from '../../components/BottomNavBar'
import TopNavBar from '../../components/TopNavBar'
import UserFeed from '../../components/UserFeed'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../context/AuthContext'
import { getHomeFeed } from '../fetchData/homeScreenData'

const MainScreen = ({navigation}) => {
	const [id,setId] = useState("")
    const [isLoaded,setIsLoaded] = useState(false)
	
    const getId = async ()=>{
        setIsLoaded(true)
        const user  = await AsyncStorage.getItem("userId")
        setId(user)
        if(id)
        {
            setIsLoaded(false)
        }
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
				<>

					<StatusBar barStyle="dark"/>
					<TopNavBar navigation={navigation}/>
					<UserFeed navigation={navigation} userId={id}/>
					<BottomNavBar navigation={navigation} userId={id}/>
				</>
			}
			
		</SafeAreaView>
  	)
}

export default MainScreen

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
})