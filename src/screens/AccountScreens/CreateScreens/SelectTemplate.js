import { StyleSheet, Text, View,Pressable,FlatList,ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import style from '../../../StyleSheets/main.js'
import Color from '../../../ColourThemes/theme1.js'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import {getTemplatesByCategory,getAllCategories} from "../../fetchData/scrapbooks.js"

function Temp({id,navigation,route}){
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [getData,setGetData] = useState(false)
    if(!getData)
    {
        getTemplatesByCategory(id).then((data)=>{
            console.log(data)
            setData(data)
            setGetData(true)
        })
    }
    if(!getData)
    {
        return (<View style={styles.subListView}>
        <ActivityIndicator size={"large"}/>
    </View>)
    }
    return (
        <View style={styles.subListView}>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                            <Pressable 
                                onPress={()=>{
                                    navigation.navigate('CoverPage',{
                                        templateId:item.templateId,
                                        userId:route.params.userId
                                    })}}
                                style={styles.subListTextView}>
                                
                                <Text style={styles.subListText}>{item.templateName}</Text>
                                    <Entypo name="chevron-right" size={24} color={Color.blackColor} />
                            </Pressable>
                        )}}
            />        
        </View>)
}
const SelectTemplate = ({navigation,route}) => {
    const [catg,setCatg] = useState(null)
    const [loading,setLoading] = useState(false)
    const [getData,setGetData] = useState(false)
    const [curIndex,setCurIndex] = useState(null)
    if(!getData)
    {
        getAllCategories().then((data)=>{
            console.log(data)
            setCatg(data)
            setGetData(true)
        })
    }
    if(!getData)
    {
        return (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size={"large"}/>
    </View>)
    }
	
	return (
		<View style={style.container}>
            <StatusBar style="light"/>
			<View style={style.downMain}>
				<Text style={style.frameHead}>Select Template</Text>
			</View>
			<View style={style.mainDown}>
			<View style={styles.listView}>
                    {
                        catg.map((item,index)=>{
                            console.log(item)
                            return (
                                <View key={index}>
                                <Pressable 
                                    key={index}
                                    onPress={()=>{
                                        setCurIndex(index)
                                    }}
                                    style={styles.nameBtn}
                                >
                                    <Text style={styles.name}>{item.categoryName}</Text>
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
                                {   index === curIndex ?
                                     <Temp id={item.categoryId} route={route} navigation={navigation}/>         
                                     : null
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