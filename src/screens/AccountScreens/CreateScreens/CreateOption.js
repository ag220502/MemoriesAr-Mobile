import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import style from '../../../StyleSheets/main.js'
import Color from '../../../ColourThemes/theme1.js'
import { StatusBar } from 'expo-status-bar'
import BottomNavBar from '../../../components/BottomNavBar.js'

const CreateOption = ({navigation,route}) => {
	return (
		<View style={style.container}>
			<StatusBar style="light" />
			<View style={style.downMain}>
				<Text style={style.frameHead}>Create Option</Text>
			</View>
			<View style={[style.mainDown,{justifyContent:'center',alignItems:'center'}]}>
				<Pressable 
					style={styles.option}
					onPress={()=>navigation.navigate('CreateScreen',{userId:route.params.userId})}
				>
					<Text style={styles.optionText}>Memories</Text>
				</Pressable>
				<Pressable 
					style={styles.option}
					onPress={()=>navigation.navigate('SelectTemplate',{userId:route.params.userId})}
				>
					<Text style={styles.optionText}>Scrapbooks</Text>
				</Pressable>
			</View>
			<BottomNavBar navigation={navigation} userId={route.params.userId}/>
		</View>
	)
}

export default CreateOption

const styles = StyleSheet.create({
	option:{
		backgroundColor:Color.darkColor,
		width:'50%',
		height:200,
		alignSelf:'center',
		justifyContent:'center',
		alignItems:'center',
		marginVertical:50,
		borderRadius:20,
	},
	optionText:{
		fontSize:23,
		color:Color.textLightColor,
		fontWeight:'bold',
	}
})
