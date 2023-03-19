import { Pressable, StyleSheet, Text, View,ActivityIndicator, Alert } from 'react-native'
import React from 'react'
import style from "../../../../StyleSheets/main.js"
import Color from '../../../../ColourThemes/theme1.js'
import {getAccVisibility,makePublic,makePrivate} from "../../../fetchData/accVisibility.js"
const ChangeVisibility = ({navigation,route}) => {
	const [original, setOriginal] = React.useState(0)
	const [selected, setSelected] = React.useState(0)
	const [getData, setgetData] = React.useState(false)
	const [loading, setLoading] = React.useState(false)
	
	const data = async () => {
		
		const res = await getAccVisibility(route.params.userId)
		setOriginal(res[0].isPublic)
		setSelected(res[0].isPublic)
	}
	if(!getData){
		setLoading(true)
		data()
		setgetData(true)
		setLoading(false)
	}
	if(loading)
	{
		return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
			<ActivityIndicator size={"large"}/>
		</View>)
	}

	return (
		<View style={style.container}>
			<View style={style.downMain}>
				<Text style={style.frameHead}>Account Visibility</Text>
			</View>
			<View style={[style.mainDown,{alignItems:'center'}]}>
				<View style={{width:'100%',marginTop:50,justifyContent:'space-evenly',alignItems:'center'}}>
					{
						selected==1?
						<>
							<Pressable 
								style={[styles.option,{backgroundColor:Color.darkColor}]}
								onPress={() => setSelected(1)}
							>
								<Text style={{color:Color.lightColor}}>Private</Text>
							</Pressable>
							<Pressable 
								style={[styles.option,{backgroundColor:Color.lightColor,borderColor:Color.darkColor,borderWidth:1}]}
								onPress={() => setSelected(0)}
							>
								<Text style={{color:Color.darkColor}}>Public</Text>
							</Pressable>
						</>
						:	
						<>
							<Pressable 
								style={[styles.option,{backgroundColor:Color.lightColor,borderColor:Color.darkColor,borderWidth:1}]}
								onPress={() => setSelected(1)}>
							
								<Text style={{color:Color.darkColor}}>Private</Text>
							</Pressable>
							<Pressable 
								style={[styles.option]}
								onPress={() => setSelected(0)}
							>
								<Text style={{color:Color.lightColor}}>Public</Text>
							</Pressable>
						</>
					}
				</View>
				<View style={styles.press}>
					<Pressable style={styles.button} 
						onPress={() => {
							if(selected===original)
							{
								Alert.alert("No Changes Made")
							}
							else{
								Alert.alert(
									"Save Changes",
									"Are you sure you want to save changes?",
									[
										{
											text: "Cancel",
										},
										{ 
											text: "OK", 
											onPress: async () => {
												if(selected===1)
												{
													const res = await makePrivate(route.params.userId)
													if(res==="Private Account")
													{
														Alert.alert("Account is now Private","",[{
															text:"OK",
															onPress:() => navigation.goBack()
														}])
														
													}
												}
												else{
													const res = await makePublic(route.params.userId)
													if(res==="Public Account")
													{
														Alert.alert("Account is now Public","",[{
															text:"OK",
															onPress:() => navigation.goBack()
														}])
													}
												}
											}
										}
									])
							}
						}}

					>
						<Text style={styles.buttonText}>Save</Text>
					</Pressable>
					<Pressable 
						style={[styles.button,{backgroundColor:Color.lightColor,borderColor:Color.darkColor,borderWidth:1}]}
						onPress={() => {
							if(selected===original)
								navigation.goBack()
							else{
								Alert.alert(
									"Discard Changes",
									"Are you sure you want to discard changes?",
									[
										{
											text: "Cancel",
										},
										{ text: "OK", onPress: () => navigation.goBack() }
									])
							}
						}}
					>
						<Text style={[styles.buttonText,{color:Color.darkColor}]}>Cancel</Text>
					</Pressable>
					
				</View>
			</View>
		</View>

	)
}

export default ChangeVisibility

const styles = StyleSheet.create({
	option:{
		backgroundColor:Color.darkColor,
		width:'70%',
		height:150,
		borderRadius:10,
		justifyContent:'center',
		alignItems:'center',
		marginVertical:30
	},
	press:{
		width:'100%',
		justifyContent:'space-evenly',
		alignItems:'center',
		marginTop:50

	},
	button:{
		backgroundColor:Color.darkColor,
		width:'70%',
		height:50,
		borderRadius:10,
		justifyContent:'center',
		alignItems:'center',
		marginTop:20
	},
	buttonText:{
		color:Color.lightColor,
		fontSize:20,
		fontWeight:'bold'
	}

})