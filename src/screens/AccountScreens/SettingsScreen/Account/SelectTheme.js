import { FlatList, Pressable, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import style from '../../../../StyleSheets/main.js';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import Color from '../../../../ColourThemes/theme1.js';
import { getAllThemes } from '../../../fetchData/themes.js';


const SelectTheme = () => {
    const [curTheme,setCurTheme] = React.useState(Color)
    
    const [themes,setThemes] = React.useState([])
    if(!themes.length)
    {
        getAllThemes().then((data)=>{
            setThemes(data)
        })
    }
    
    return (
        <View style={style.container}>
            <StatusBar style="light"/>
            <View style={[style.downMain,{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}]}>
                <Pressable style={[styles.btnView,{width:45}]} onPress={()=>{}}>
                    <Entypo name="chevron-left" size={24} color="black" />
                </Pressable>
                <View>
                    <Text style={style.frameHead}>Select Theme</Text>
                </View>
                <View>
                    <Pressable style={[styles.btnView,{marginLeft:0,marginRight:20}]} onPress={()=>{}}>
                        <Text style={styles.btnText}>Save</Text>
                    </Pressable>
                </View>
            </View>
            <View style={[style.mainDown]}>
                <ScrollView style={styles.viewTheme} contentContainerStyle={{flexDirection:'row',
        flexWrap:'wrap',justifyContent:'space-evenly'}}>
                {themes.map((data,index)=>{
                    {
                        
                    }
                    return(
                        <Pressable style={[styles.showTheme,{backgroundColor:data.darkClr}]} key={index}>
                            <Text style={[styles.themeText,{color:data.lightClr}]}>Style Text</Text>
                        </Pressable>
                    )
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