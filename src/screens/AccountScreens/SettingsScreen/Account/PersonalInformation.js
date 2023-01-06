import { StyleSheet, Text, View, Image, Pressable,TextInput  } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 

const PersonalInformation = () => {
  return (
    <View style={styles.container}>
        <View style={styles.search}>
            <Pressable style={styles.buttonView}
                onPress={()=>navigation.navigate("ProfileScreen")}
            >
                <Text style={styles.btnText}>Cancel</Text>
            </Pressable>
            <Text style={styles.headText}>Personal Information</Text>
            <Pressable style={styles.buttonView}
                onPress={()=>navigation.navigate("ProfileScreen")}
            >
                <Text style={styles.btnText}>Save</Text>
            </Pressable>
        </View>
        <View style={styles.main}>
            <View style={styles.profile_img}>
                <Image style={styles.pofile} source={require('../../../../images/ProfileImages/profile.png')}/>
            </View>
            <View style={styles.detailsView}>
                <View style={styles.inputView}>
                    <Text style={styles.label}>Email Id</Text>
                    <TextInput style={styles.input}/>
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.label}>Mobile Number</Text>
                    <TextInput style={styles.input}/>
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.label}>Date Of Birth</Text>
                    <TextInput style={styles.input}/>
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.label}>Country</Text>
                    <TextInput style={[styles.input,styles.input]}/>
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.label}>State</Text>
                    <TextInput style={styles.input}/>
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.label}>City</Text>
                    <TextInput style={[styles.input]} />
                </View>
                
            </View>
        </View>
    </View>
  )
}

export default PersonalInformation

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#F50057'
    },
    search:{
        width:'100%',
        top:40,
        paddingVertical:20,
        justifyContent:'space-between',
        paddingHorizontal:20,
        flexDirection:'row'
    },
    headText:{
        fontSize:22,
        fontWeight:'bold',
        alignSelf:'center',
        justifyContent:'center',
        color:'#F5F6FA'
    },
    selectPic:{
        position:'absolute',
        backgroundColor:'#F50057',
        padding:10,
        borderRadius:20,
        bottom:-10,
        right:-10
    },
    buttonView:{
        height:45,
        paddingHorizontal:10,
        backgroundColor:'#F5F6FA',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    main:{
        flexDirection:'column',
        bottom:0,
        position:'absolute',
        backgroundColor:"#F5F6FA",
        width:'100%',
        height:'80%',
        borderTopLeftRadius:'60',
        borderTopRightRadius:'60',
        paddingTop:20,
    },
    pofile:{
        alignSelf:'center',
    },
    profile_img:{
        position:'absolute',
        width:100,
        height:100,
        backgroundColor:'black',
        alignSelf:'center',
        marginTop:-50,
        borderRadius:100
    },
    detailsView:{
        marginTop:50,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    inputView:{
        marginVertical:10
    },
    label:{
        fontSize:18,
        color:'#919191',
        paddingLeft:15
    },
    input:{
        elevation:10,
        backgroundColor:'#FFFFFF',
        width:300,
        borderRadius:20,
        height:40,
        margin:10,
        padding:10,
        fontSize:17,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    inputMultiple:
    {
        height:100,
        paddingTop:15
    },
    btnText:{
        color:'#F50057',
        fontWeight:'700'
    }
})