import { StyleSheet } from "react-native";
import Color from "../../../ColourThemes/theme1";
const style = StyleSheet.create({
    container:
    {
        width:'100%',
        height:'100%',
        backgroundColor:Color.darkColor,
        flexDirection:'column'
    },
    mainUp:{
        width:'100%',
        height:'87%',
        backgroundColor:Color.lightColor,
        borderBottomLeftRadius:60,
        borderBottomRightRadius:60,
    },
    downMain:{
        width:'100%',
        height:'10%',
        alignItems:'center',
        justifyContent:'center'
    },
    linkText:{
        textAlign:'center',
        color:Color.textLightColor,
        fontSize:17
    },
    logInButtonView:{
        borderRadius:15,
        backgroundColor:Color.darkColor,
        padding:10,
        minWidth:'80%',
        alignSelf:'center',
        margin:10
    },
    logInButtonText:{
        textAlign:'center',
        fontSize:20,
        color:Color.textLightColor,
    },
    loginWelcomeView:{
        marginTop:50,
        width:'100%',
        marginBottom:30,
        padding:20
    },
    loginWelcomeText:{
        fontSize:35,
        margin:15,
        textAlign:'left',
        color:Color.textDarkColor,
        fontWeight:'bold'
    },
    loginSignInText:{
        fontSize:18,
        marginLeft:20,
        fontWeight:'600'
    },
    mainInputView:{
        width:"80%",
        alignSelf:'center'
    },
    input:{
        backgroundColor:Color.whiteColor,
        width:'100%',
        borderRadius:10,
        height:40,
        marginVertical:10,
        padding:10,
        fontSize:17,
        shadowColor: Color.shadowColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    inputLabel:{
        fontSize:18,
        color:Color.midColor,
    },
})

export default style