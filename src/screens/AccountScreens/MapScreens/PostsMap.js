import { StyleSheet, Text, View,Image,ScrollView, Pressable, FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import style from '../../../StyleSheets/main.js'
import BottomNavBar from '../../../components/BottomNavBar.js'
import MapView,{Marker,Callout} from 'react-native-maps'
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {WEB} from "../../../../var.js"
import Color from '../../../ColourThemes/theme1.js'

const PostsMap = ({navigation,route}) => {
    const [postData,setPostData] = useState([])
    // const [id,setId] = useState(route.params.userId)
    const [id,setId] = useState(18)
    const [isLoaded,setIsLoaded] = useState(false)
    const [data,setData] = useState(false)
    const [showFr,setShowFr] = useState(true)
    const getData = async()=>{
        try{
            await fetch(WEB+'/api/map/getPosts/'+id
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
    const [frData,setFrData] = useState([1,1,1,1,1])
    // getData()
    
    const [mapRegion, setMapRegion] = useState({
        latitude: 25.276987, 
        longitude: 55.296249,
        latitudeDelta:0.6,
        longitudeDelta: 0.4,
    })
    return (
        <View style={style.container}>
            <ScrollView style={styles.filter} horizontal showsHorizontalScrollIndicator={false}>
                <Pressable style={styles.filterOpt}>
                    <Text style={styles.filterText}>Memories</Text>
                </Pressable>
                <Pressable style={styles.filterOpt}>
                    <Text style={styles.filterText}>Scrapbooks</Text>
                </Pressable>
                <Pressable style={styles.filterOpt}>
                    <Text style={styles.filterText}>All</Text>
                </Pressable>
                <Pressable style={styles.filterOpt}>
                    <Text style={styles.filterText}>Friends</Text>
                </Pressable>
                <Pressable style={styles.filterOpt}>
                    <Text style={styles.filterText}>Other Users</Text>
                </Pressable>
            </ScrollView>
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
                            <Image source={{uri:val.PhotoLink}} style={{width:50,height:50,borderRadius:50,borderWidth:2,borderColor:Color.darkColor}}/>
                            <Callout tooltip>
                                
                                <View style={{backgroundColor:'white',padding:10,borderRadius:10,width:190,flexDirection:'row',justifyContent:'center',alignItems:"center"}}>
                                    {
                                         val.profilePhoto==null || val.profilePhoto===""?
                                         <Image source={require("../../../images/ProfileImages/default.png")} style={{width:50,height:50,borderRadius:50}}/>
                                         :
                                         <Image source={{uri:val.profilePhoto}} style={{width:50,height:50,borderRadius:50}}/>    
                                    }
                
                                    <View style={{paddingHorizontal:10}}>
                                        <Text style={{fontWeight:'bold',fontSize:15,paddingVertical:5}}>{val.firstName}</Text>
                                        <Text 
                                            style={{color:Color.darkColor,fontWeight:'600'}}
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
           
            <BottomNavBar navigation={navigation}  userId={route.params.userId}/>
        </View>
    )
}

export default PostsMap

const styles = StyleSheet.create({
    filter:{
        height:70,
        marginTop:50,
        flexDirection:'row',
        position:'absolute',
        zIndex:1,
        top:0,
    },
    filterOpt:{
        height:40,
        padding:10,  
        backgroundColor:Color.darkColor,
        borderRadius:10,
        marginHorizontal:10,
        marginVertical:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        minWidth:50

        
    }   ,
    filterText:{
        color:Color.lightColor,
        fontWeight:'bold',
        fontSize:16

    },
    userDisplay:{
        position:'absolute',
        zIndex:1,
        bottom:90,
        height:200,
        width:'100%',
    },
    frView:{
        width:'95%',
        backgroundColor:Color.lightColor,
        borderRadius:15,
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10
    }

})