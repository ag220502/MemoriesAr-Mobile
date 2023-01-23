import { StyleSheet } from "react-native";
import Color from "../ColourThemes/theme1.js";
const style = StyleSheet.create({
    container:
    {
        width:'100%',
        height:'100%',
        backgroundColor:Color.darkColor,
    },
    mainUp:{
        width:'100%',
        height:'87%',
        backgroundColor:Color.lightColor,
        borderBottomLeftRadius:60,
        borderBottomRightRadius:60,
    },
    mainDown:{
        width:'100%',
        height:'87%',
        backgroundColor:Color.lightColor,
        borderTopLeftRadius:60,
        borderTopRightRadius:60,
    },
    downMain:{
        width:'100%',
        height:'13%',
        alignItems:'center',
        justifyContent:'center'
    },
    frameHead:{
        textAlign:'center',
        color:Color.textLightColor,
        fontWeight:'bold',
        fontSize:25,
        marginTop:20
    }
})

export default style