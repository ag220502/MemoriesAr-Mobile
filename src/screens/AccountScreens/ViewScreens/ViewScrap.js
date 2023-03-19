import { StyleSheet, Text, View,FlatList,Dimensions,Pressable } from 'react-native'
import React,{useState} from 'react'
const {width,height} = Dimensions.get('window')
const ViewScrap = () => {
	const [data,setData] = React.useState([2,2,2,2,2])
	const [currentIndex,setCurrentIndex]=useState(0)
	return (
		<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
			<View style={{height:height/2}}>
			<FlatList data={data} showsHorizontalScrollIndicator={false} pagingEnabled onScroll={e=>{ const x=e.nativeEvent.contentOffset.x; setCurrentIndex((x / width),toFixed(0)) }} horizontal renderItems={({item,index})=>{
				return(
					<View key={index} style={{width: width - 50,height: currentIndex == index? (height/2)+50: height / 2 ,justifyContent:'Center',alignItems:'Center'}}>
			<TouchableOpacity disabled={true} style={{width:'90%', height:'90%',backgroundColor:'green',borderRadius:10}}>
			</TouchableOpacity>
					</View>
				)
				}} />
			</View>
			<View style={{flexDirection:'row',width:width,justifyContent:'center',alignItems:'center'}}>
					{
						data.map((item,index) => {
							return (
								<View style={{width:10,height:10,borderRadius:5,backgroundColor:'black',margin:5}}>

								</View>
							)
						})

					}
			</View>
		</View>
	)
}

export default ViewScrap

const styles = StyleSheet.create({

})