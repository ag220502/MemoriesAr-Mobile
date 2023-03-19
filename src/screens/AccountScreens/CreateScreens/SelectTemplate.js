import { StyleSheet, Text, View,Pressable,FlatList } from 'react-native'
import React,{useState} from 'react'
import style from '../../../StyleSheets/main.js'
import Color from '../../../ColourThemes/theme1.js'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';

const SelectTemplate = ({navigation,route}) => {
	const data = [
        {
            name:"Sports",
            subSettings:[
                {
					id:1,
                    name:"Sports Template 1",
                },
				{
					id:2,
                    name:"Sports Template 2",
                }
            ]
        },
        {
            name:"Education",
            subSettings:[
                {
					id:1,
                    name:"Education Template 1",
                },
				{
					id:2,
                    name:"Education Template 2",
                }
            ]
        },
        {
            name:"Tourism",
            subSettings:[
                {
					id:1,
                    name:"Tourism Template 1",
                },
				{
					id:2,
                    name:"Tourism Template 2",
                }
            ]
        }
    ]
	const [curIndex,setCurIndex] = useState(null)
	return (
		<View style={style.container}>
            <StatusBar style="light"/>
			<View style={style.downMain}>
				<Text style={style.frameHead}>Select Template</Text>
			</View>
			<View style={style.mainDown}>
			<View style={styles.listView}>
                    {
                        data.map((item,index)=>{
                            return (
                                <View key={index}>
                                <Pressable 
                                    key={index}
                                    onPress={()=>{
                                        setCurIndex(index)
                                    }}
                                    style={styles.nameBtn}
                                >
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text>
                                    {
                                        index === curIndex ? 
                                            <Entypo name="chevron-up" size={24} color={Color.blackColor} onPress={()=>setCurIndex(null)}/>
                                            : 
                                            <Entypo name="chevron-down" size={24} color={Color.blackColor} />
                                    }
                                    </Text>
                                </Pressable>
                                <View>
                                {   index === curIndex&&
                                    (
                                    <View style={styles.subListView}>
                                        <FlatList
                                            data={item.subSettings}
                                            renderItem={({ item }) => {
                                                return (
                                                        <Pressable 
															onPress={()=>{
																navigation.navigate('CreateScrapDetails',{
																	templateId:item.id,
																	userId:route.params.userId
																})}}
                                                            style={styles.subListTextView}>
                                                            
                                                            <Text style={styles.subListText}>{item.name}</Text>
                                                                <Entypo name="chevron-right" size={24} color={Color.blackColor} />
                                                        </Pressable>
                                                    )}}
                                        />        
                                    </View>)
                                }                                    
                                </View>
                                </View>
                            )
                        })
                    }
                </View>
			</View>
		</View>
	)
}

export default SelectTemplate

const styles = StyleSheet.create({
	listView:
    {
        marginTop:50,
        width:'90%',
        alignSelf:'center',
        
    },
    nameBtn:{
        paddingVertical:20,
        paddingHorizontal:10,   
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:'grey',
        borderBottomWidth:0.8
    },
    name:{
        fontSize:18,
        fontWeight:'bold'
    },
    subListView:{
        paddingHorizontal:20,
        paddingVertical:20,
    },
    subListText:{
        fontSize:16
    },
    subListTextView:{
        paddingVertical:15,
        borderBottomColor:'grey',
        borderBottomWidth:0.3,
        flexDirection:'row',
        justifyContent:'space-between'
    },
})