import { Pressable, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import BottomModalSheet from './BottomModalSheet'
import {Provider} from 'react-native-paper'

const BottomModal = () => {
	const [showModal, setShowModal] = useState(false)
	return (
		<Provider>
			<View style={styles.container}>
				<Pressable onPress={onPress=()=>{setShowModal(true)}}>
					<Text>Click Here</Text>
				</Pressable>
				<BottomModalSheet
					show={showModal}
					onDismiss={()=>{setShowModal(false)}}
				/>
			</View>
		</Provider>
	)
}

export default BottomModal

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',

	}
})