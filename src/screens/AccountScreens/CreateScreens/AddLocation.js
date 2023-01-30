import { StyleSheet, Text, View,Pressable } from 'react-native'
import React,{useState,useEffect} from 'react'
import MapView,{Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import Color from '../../../ColourThemes/theme1';
import { StackActions } from '@react-navigation/native';

const AddLocation = ({navigation}) => {
	const [mapRegion, setMapRegion] = useState(null)
	const userLocation = async () => {
		  
		  let { status } = await Location.requestForegroundPermissionsAsync();
		  if (status !== 'granted') {
			setErrorMsg('Permission to access location was denied');
			return;
		  }
	
		  let location = await Location.getCurrentPositionAsync({enableHighAccuracy:true});
		  setMapRegion({
			latitude:location.coords.latitude,
			longitude:location.coords.longitude,
			latitudeDelta:0.0922,
			longitudeDelta:0.0421
		});
		};
		userLocation();
		useEffect(()=>{
			userLocation()
		},[])
	  
	return (
		<View style={styles.container}>
			<MapView 
				style={styles.map} 
				region={mapRegion}
			>
				<Marker
					coordinate={mapRegion}
					title="Marker"
				/>
			</MapView>
			<Pressable style={styles.addLocBtn} onPress={
				()=>{
					userLocation();
					navigation.dispatch(
						StackActions.replace('CreateScreen',{location:mapRegion})
					)
				}
			}>
				<Text style={styles.addLocTxt}>Add Location</Text>
			</Pressable>
		</View>
	)
}

export default AddLocation

const styles = StyleSheet.create({
	container: {
		flex: 1,
	  },
	  map: {
		width: '100%',
		height: '100%',
	  },
	  addLocBtn:{
		position:'absolute',
		backgroundColor:Color.textDarkColor,
		bottom:100,
		alignSelf:'center',
		justifyContent:'center',
		alignItems:'center',
		paddingHorizontal:15,
		borderRadius:10,
		paddingVertical:10
	  },
	  addLocTxt:{
		fontSize:16,
		fontWeight:'800',
		color:Color.textLightColor
	  }
})