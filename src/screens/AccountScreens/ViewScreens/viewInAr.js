import { StyleSheet, Text, View,Pressable,Image,Dimensions } from 'react-native'
import React,{useState,useEffect,useRef} from 'react'
import { Camera } from 'expo-camera'
const {width,height} = Dimensions.get('window')
import { PinchGestureHandler } from 'react-native-gesture-handler';
import ImageZoom from 'react-native-image-pan-zoom';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Color from '../../../ColourThemes/theme1';
const ViewInAr = ({navigation,route}) => {
	
	const [hasCameraPermission, setHasCameraPermission] = useState(null);
	const [camera, setCamera] = useState(null);
	const [image, setImage] = useState(route.params.image);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [zoom, setZoom] = useState(0);
	useEffect(() => {
		(async () => {
			const cameraStatus = await Camera.requestCameraPermissionsAsync();
			setHasCameraPermission(cameraStatus.status === 'granted');
		})();
	}, []);
	
	if (hasCameraPermission === false) {
	return <Text>No Camera Access</Text>;
	}
	const changeZoom = (event) => {
		if (event.nativeEvent.scale > 1 && zoom < 1) {
		  setZoom(zoom + 0.005);
		}
		if (event.nativeEvent.scale < 1 && zoom > 0) {
		  setZoom(zoom - 0.005);
		}
	  };

	  const imageRef = useRef(null);

	return (
		<GestureHandlerRootView style={styles.container}>

			<View style={[styles.cameraContainer,{height:height*0.85}]}>
				<Camera ref={ref => setHasCameraPermission(ref)}
					style={styles.fixedRatio}
					type={type}
					zoom={0}
				>
					 <ImageZoom 
					  ref={imageRef}
					 cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={200}
					   panToMove={true}
                       imageHeight={200}
					   >
						<Image style={{width:200, height:200, resizeMode:'contain'}}
							source={image?{uri:image}:require("../../../images/HomeImages/post6.jpg")}/>
					</ImageZoom>
				</Camera>
				<View>
					<Pressable 
						onPress={()=>{
							navigation.goBack()
						}}

					style={{alignSelf:'center',justifyContent:'center',alignItems:'center',backgroundColor:Color.darkColor,borderRadius:10,marginVertical:10}}>
						<Text style={{color:Color.lightColor,fontSize:17,fontWeight:'600',padding:10}}>Go Back</Text>
					</Pressable>

						
				</View>
			</View>
			
		</GestureHandlerRootView>
	)
}

export default ViewInAr

const styles = StyleSheet.create({
	container:{
		width:'100%',
		height:'100%',
		backgroundColor:'white'

	},
	cameraContainer: {
		
	},
	fixedRatio: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		contentFill: 'center'
	}
})