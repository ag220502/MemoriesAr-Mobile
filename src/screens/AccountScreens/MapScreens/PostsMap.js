import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import style from '../../../StyleSheets/main.js'
import BottomNavBar from '../../../components/BottomNavBar.js'
import MapView,{Marker,Callout} from 'react-native-maps'
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'

const PostsMap = ({navigation,route}) => {
    const [postData,setPostData] = useState([])
    const [id,setId] = useState(route.params.userId)
    const [isLoaded,setIsLoaded] = useState(false)
    const [data,setData] = useState(false)
    console.log("User Id "+id)
    
    const getData = async()=>{
        try{
            await fetch('http://localhost:3000/api/map/getPosts/'+id
            ).then(
                res => {

                    if(res.status===200)
                    {
                        res.json().then((data)=>{
                            if(data)
                            {
                                setPostData(JSON.parse(data))
                                setData(true)
                            }
                        })
                    }
                    else
                    {
                        console.log("Error in fetching data")
                    }
                }
            )
        }
        catch(err){
            console.log(err)
        }
    
    }
    if(!data)
    {
        getData()
        
    }
    // getData()
    
    const [mapRegion, setMapRegion] = useState({
        latitude: 25.276987, 
        longitude: 55.296249,
        latitudeDelta:0.6,
        longitudeDelta: 0.4,
    })
    return (
        <View style={style.container}>
            <MapView
                region={mapRegion}
                style={style.container}>
                {
                    
                postData.map((val,i) => {
                    const cords = {    
                        latitude: val.lattitude,
                        longitude: val.longitude}
                    return(
                        <Marker 
                            coordinate={cords}
                            key={i}
                            style={{width:50,height:50}}
                        >
                            <Image source={{uri:val.PhotoLink}} style={{width:50,height:50,borderRadius:50,borderWidth:2,borderColor:"#F50057"}}/>
                            {/* <FontAwesome name="map-marker" size={34} color="#F50057" /> */}
                            <Callout tooltip>
                                
                                <View style={{backgroundColor:'white',padding:10,borderRadius:10,width:190,flexDirection:'row',justifyContent:'center',alignItems:"center"}}>
                                    <Image source={{uri:val.profilePhoto}} style={{width:50,height:50,borderRadius:50}}/>
                                    <View style={{paddingHorizontal:10}}>
                                        <Text style={{fontWeight:'bold',fontSize:15,paddingVertical:5}}>{val.firstName}</Text>
                                        <Text 
                                            style={{color:'#F50057',fontWeight:'600'}}
                                            onPress={()=>{
                                                navigation.navigate("OtherUserProfileScreen",{
                                                    userId:val.userId,
                                                    logged:id,
                                                    backTo:"MenuScreen"
                                                })
                                            }}    
                                        >View Profile</Text>
                                    </View>
                                </View>
                            </Callout>
                        </Marker>
                    )
                    })
                    }
            </MapView>
            <BottomNavBar navigation={navigation} />
        </View>
    )
}

export default PostsMap

const styles = StyleSheet.create({})