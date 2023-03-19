import { StyleSheet, Text, View,Pressable,ScrollView,Alert } from 'react-native'
import React from 'react'
import style from '../../../StyleSheets/main.js'
import Color from '../../../ColourThemes/theme1.js'
import { StatusBar } from 'expo-status-bar'
import { Entypo } from '@expo/vector-icons';
import {reportMem} from '../../fetchData/report.js'

const ReportPost = ({navigation,route}) => {

    const data = [
        {
            name:"I Don't Like This Post",
        },
        {
            name:"This Post Is Inappropriate",
        },
        {
            name:"This Post Is Spam",
        },
        {
            name:"Nudity or Sexual Activity",
        },
        {
            name:"Bullying or Harassment",
        },
        {
            name:"False Information",
        },
        {
            name:"Hate Speech Or Symbols",
        },
        {
            name:"Violence Or Threats",
        },
        {
            name:"Sale Of Illegal Or Regulated Goods",
        },
        {
            name:"Self-Harm or Suicide",
        }

    ]

    return (
        <View style={style.container}>
            <StatusBar style='light'/>
            <View style={style.downMain}>
                <Text style={style.frameHead}>Report Memory</Text>
            </View>
            <View style={style.mainDown}>
                <ScrollView style={{marginTop:50,width:'90%',alignSelf:'center',marginBottom:40}}>
                    {
                        data.map((item,index)=>{
                            return(
                                <View key={index}>
                                    <Pressable
                                        onPress={()=>{
                                            Alert.alert("Report Post","Are you sure you want to report this post?",[{
                                               text:"Yes",
                                               onPress:async ()=>{
                                                    const res = await reportMem(route.params.postId,route.params.userId,item.name)
                                                    console.log(res)
                                                    if(res=="Post Reported Successfully"){
                                                        Alert.alert("Report Post","Post Reported Successfully")
                                                        navigation.goBack()
                                                    }
                                                    
                                               }
                                            },
                                            {
                                                text:"No",
                                                onPress:()=>{
                                                    
                                                }
                                             },
                                            ])
                                        }}
                                        style={styles.nameBtn}
                                    >
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text>
                                        {
                                            <Entypo name="chevron-right" size={24} color={Color.blackColor} style={{fontWeight:'100'}} />
                                        }
                                        </Text>
                                    </Pressable>
                                </View>
                            )
                        })
                    }
                    <Pressable
                        style={styles.nameBtn}
                        onPress={()=>{
                            navigation.goBack()
                        }}
                    >
                        <Text style={styles.name}>Cancel</Text>
                    </Pressable>
                </ScrollView>
                
            </View>
        </View>
    )
}

export default ReportPost

const styles = StyleSheet.create({
    nameBtn:{
        paddingVertical:20,
        paddingHorizontal:10,   
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:'grey',
        borderBottomWidth:0.8
    },
    name:{
        fontSize:18
    },
})