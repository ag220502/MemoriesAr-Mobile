import { FlatList, Pressable, StyleSheet, Text, View, ScrollView,ActivityIndicator,Alert } from 'react-native'
import React from 'react'
import style from '../../../../StyleSheets/main.js';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import Color from '../../../../ColourThemes/theme1.js';
import { getAllThemes,getUserTheme,selectUserTheme } from '../../../fetchData/themes.js';


const SelectTheme = ({navigation,route}) => {
    const [orgTheme,setOrgTheme] = React.useState('')
    const [curTheme,setCurTheme] = React.useState('')
    const [loading,setLoading] = React.useState(true)

    const [themes,setThemes] = React.useState([])
    if(!themes.length)
    {
        getAllThemes().then((data)=>{
            setThemes(data)
            getUserTheme(route.params.userId).then((data)=>{
                setCurTheme(data[0].themeId)
                setOrgTheme(data[0].themeId)
                setLoading(false)
            })

        })
    }
    
    if(loading)
	{
		return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
			<ActivityIndicator size={"large"}/>
		</View>)
	}
    return (
        <View style={style.container}>
            <StatusBar style="light"/>
            <View style={[style.downMain,{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}]}>
                <Pressable style={[styles.btnView,{width:45}]} onPress={()=>{navigation.goBack()}}>
                    <Entypo name="chevron-left" size={24} color="black" />
                </Pressable>
                <View>
                    <Text style={style.frameHead}>Select Theme</Text>
                </View>
                <View>
                    <Pressable style={[styles.btnView,{marginLeft:0,marginRight:20}]} onPress={()=>{
                        if(curTheme!=orgTheme)
                        {
                            selectUserTheme(route.params.userId,curTheme).then((data)=>{
                                if(data==="Theme changed successfully.")
                                {
                                    Alert.alert("Theme Changed","Theme changed successfully",[
                                        {
                                            text:"Ok",
                                            onPress:()=>{navigation.goBack()}
                                        }
                                    ])
                                }
                            })
                        }   
                        else
                        {
                            Alert.alert("No Changes","You have not changed the theme",[
                                {
                                    text:"Ok",
                                    onPress:()=>{navigation.goBack()}
                                }
                            ])
                            
                        }
                        
                    }}>
                        <Text style={styles.btnText}>Save</Text>
                    </Pressable>
                </View>
            </View>
            <View style={[style.mainDown]}>
                <ScrollView style={styles.viewTheme} contentContainerStyle={{flexDirection:'row',
        flexWrap:'wrap',justifyContent:'space-evenly'}}>
                {themes.map((data,index)=>{
                    return (
                        <>
                    {
                        curTheme==data.id? 
                        <>
                        
                            <Pressable style={[styles.showTheme,{backgroundColor:data.darkClr,borderWidth:4,borderColor:'#F50057'}]} key={index}>
                                <Text style={[styles.themeText,{color:data.lightClr}]}>Style Text</Text>
                            </Pressable>
                        
                        </>:<>
                            <Pressable style={[styles.showTheme,{backgroundColor:data.darkClr}]} key={index} onPress={()=>{
                                setCurTheme(data.id)
                            }
                            }>
                                <Text style={[styles.themeText,{color:data.lightClr}]}>Style Text</Text>
                            </Pressable>


                        </>
                    }
                    </>)
                    
                })}
                </ScrollView>
            </View>
        </View>
    )
}

export default SelectTheme

const styles = StyleSheet.create({
    btnView:{
        height:45,
        backgroundColor:Color.lightColor,
        borderRadius:10,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20
    },
    btnText:{
        color:Color.blackColor,
        fontWeight:'700',
        paddingHorizontal:10
    },
    viewTheme:{
        paddingVertical:20,
        width:'100%',
        height:'100%',
    },  
    showTheme:{
        width:'40%',
        height:100,
        backgroundColor:'red',
        borderRadius:20,
        alignContent:'center',
        alignSelf:'center',
        marginVertical:20,
        justifyContent:'flex-end',
    },
    themeText:
    {
        alignSelf:'flex-end',
        padding:15,
        fontSize:20,
    }

})