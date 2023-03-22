import { StyleSheet, Text, View,Pressable,ScrollView,Alert } from 'react-native'
import React from 'react'
import style from '../../../StyleSheets/main.js'
import Color from '../../../ColourThemes/theme1.js'
import { StatusBar } from 'expo-status-bar'
import { Entypo } from '@expo/vector-icons';
import {reportAccount} from '../../fetchData/report.js'

const ReportUsers = ({navigation,route}) => {

    const data = [
        {
            name:"This Account Is Inappropriate",
        },
        {
            name:"This Account Is Spam",
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
                                            Alert.alert("Report User","Are you sure you want to report this user?",[{
                                               text:"Yes",
                                               onPress:async ()=>{
                                                    const res = await reportAccount(route.params.userId,route.params.reportedId,item.name)
                                                    console.log(res)
                                                    if(res=="User Reported Successfully."){
                                                        Alert.alert("Report Account","Account Reported Successfully",[
                                                            {
                                                                text:"Ok",
                                                                onPress:()=>{

                                                        navigation.goBack()
                                                                }
                                                            }
                                                        ])
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

export default ReportUsers

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