import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useState} from 'react'
import style from '../../../StyleSheets/main.js'
import BottomNavBar from '../../../components/BottomNavBar.js'
import MapView,{Marker,Callout} from 'react-native-maps'
import { FontAwesome } from '@expo/vector-icons';

const PostsMap = ({navigation}) => {
    const [mapRegion, setMapRegion] = useState({
        latitude: 25.198250960817184, 
        longitude: 55.2784072510761,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    const data = [
        {
            id: 0,
            name:"Akshay Garg",
            coords: {
                latitude: 25.198250960817184,
                longitude:  55.2784072510761,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            img: require('../../../images/ProfileImages/profile1.jpg'),
        },
        {
            id: 1,
            name:"Akshay Garg",
            coords: {
                latitude: 25.20752335924735,
                longitude: 55.24247966565375,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            img: require("../../../images/ProfileImages/profile2.jpg")
        },
        {
            id: 3,
            name:"Akshay Garg",
            coords: {
                latitude: 25.23635104089914,
                longitude: 55.296084726773536,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            img: require("../../../images/ProfileImages/profile3.jpg")
        },
        {
            id: 4,
            name:"Akshay Garg",
            coords: {
                latitude: 25.101886655774518,
                longitude: 55.156375617337,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            img: require("../../../images/ProfileImages/profile4.jpg")
        },
        {
            id: 0,
            name:"Akshay Garg",
            coords: {
                latitude: 25.118821831469266,
                longitude: 55.203167708250106,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            img: require("../../../images/ProfileImages/profile5.jpg")
        },
    ]
    return (
        <View style={style.container}>
            <MapView
                region={mapRegion}
                style={style.container}>
                {data.map((val,i) => {
                    return(
                        <Marker 
                            coordinate={val.coords}
                            key={i}
                            style={{width:50,height:50}}
                        >
                            <Image source={val.img} style={{width:50,height:50,borderRadius:50,borderWidth:2,borderColor:"#F50057"}}/>
                            {/* <FontAwesome name="map-marker" size={34} color="#F50057" /> */}
                            <Callout tooltip>
                                <View style={{backgroundColor:'white',padding:10,borderRadius:10,width:190,flexDirection:'row',justifyContent:'center',alignItems:"center"}}>
                                    <Image source={val.img} style={{width:50,height:50,borderRadius:50}}/>
                                    <View style={{paddingHorizontal:10}}>
                                        <Text style={{fontWeight:'bold',fontSize:15,paddingVertical:5}}>{val.name}</Text>
                                        <Text 
                                            style={{color:'#F50057',fontWeight:'600'}}
                                            onPress={()=>{
                                                navigation.navigate("OtherUserProfileScreen",{
                                                    userId:18,
                                                    backTo:"MenuScreen"
                                                })
                                            }}    
                                        >View Profile</Text>
                                    </View>
                                </View>
                            </Callout>
                        </Marker>
                    )
                    })}
            </MapView>
            <BottomNavBar navigation={navigation}/>
        </View>
    )
}

export default PostsMap

const styles = StyleSheet.create({})