import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import React from 'react'
import Color from '../../ColourThemes/theme1.js';
import { StackActions } from '@react-navigation/native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = 150;

const SimpleModal = (props) => {

    const closeModal = (bool,data)=>{
        props.changeModalVisible(bool);
        props.setData(data);
    }

    return (
        <Pressable
            disabled={true}
            style={styles.container}
        >
            <View style={styles.modal}>
                <View style={styles.textView}>
                    <Text style={styles.mdHeader}>{props.header}</Text>
                    <Text  style={styles.mdDesc}>{props.mdText}</Text>
                </View>
                <View style={styles.btnView}>
                    <Pressable 
                        style={styles.btn}
                        onPress={()=>{
                            closeModal(false,'cancel')
                        }}
                    >
                        <Text style={styles.btnText}>Cancel</Text>                    
                    </Pressable>
                    <Pressable 
                        style={styles.btn}
                        onPress={()=>{
                            closeModal(false,'Yes')

                        }}
                    >
                        <Text style={[styles.btnText,{color:Color.textDarkColor,fontWeight:'800'}]}>Confirm</Text>                    
                    </Pressable>
                </View>
            </View>
        </Pressable>
    )
}

export default SimpleModal

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    modal:{
        height:HEIGHT,
        width:WIDTH-80,
        paddingTop:10,
        backgroundColor:Color.whiteColor,
        borderRadius:15
    },
    textView:{
        flex:1,
        alignItems:'center'
    },
    mdHeader:{
        margin:5,
        fontSize:18,
        fontWeight:'bold'
    },
    mdDesc:{
        margin:5,
        fontSize:16,
        fontWeight:'500',
        paddingHorizontal:15
    },
    btnView:{
        width:'100%',
        flexDirection:'row'
    },
    btn:{
        flex:1,
        paddingVertical:10,
        alignItems:'center'
    },
    btnText:{
        margin:5,
        fontSize:16,
        fontWeight:'600',
    }
})