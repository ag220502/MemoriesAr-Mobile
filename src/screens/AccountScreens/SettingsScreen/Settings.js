import { StyleSheet, Text, View,StatusBar,Pressable, FlatList,Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import Color from '../../../ColourThemes/theme1.js'
import SimpleModal from '../../../components/Modals/SimpleModal.js';
import { AuthContext } from '../../context/AuthContext.js';

const Settings = ({navigation,route}) => {

    const {logout} = useContext(AuthContext)
    const data = [
        {
            name:"General",
            subSettings:[
                {
                    name:"Personal Information",
                    link:"PersonalInformation"
                },
                {
                    name:"Saved Memories",
                    link:"SavedMemories"
                },
                {
                    name:"Your Friends",
                    link:"UserFriends"
                },
            ]
        },
        {
            name:"Account",
            subSettings:[
                {
                    name:"Change Theme",
                    link:"SelectTheme"
                },
                {
                    name:"Deactivate Account",
                    link:"DeactivateAccount"
                },
                {
                    name:"Delete Account",
                    link:"DeleteAccount"
                }
            ]
        },
        {
            name:"Privacy",
            subSettings:[
                {
                    name:"Blocked Accounts",
                    link:"BlockedAccount"
                },
                {
                    name:"Account Visibility",
                    link:"ChangeVisibility"
                }
            ]
        },
        {
            name:"Security",
            subSettings:[
                {
                    name:"Change Password",
                    link:"ChangePassword"
                },
            ]
        },
        {
            name:"Log Out",
            exception:true,
            link:"SignIn"
        }
    ]
    const [curIndex,setCurIndex] = useState(null)
    const [isModalVisible,setModalVisible] = useState(false)
    const [chooseData,setChooseData] = useState("")
    const changeModalVisible = (bool)=>{
        setModalVisible(bool)
    }
    const setData =(data)=>{
        setChooseData(data)
        if(data=="Yes")
        {
            logout()            
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"}/>
            <View style={styles.search}>
                <Pressable style={styles.buttonView}
                    onPress={()=>navigation.navigate("ProfileScreen",{userId:route.params.userId})}
                >
                    <Ionicons name="chevron-back" size={30} color={Color.textDarkColor} />
                </Pressable>
                <Text style={styles.head}>Settings</Text>
            </View>
            <View style={styles.main}>
                <View style={styles.listView}>
                    { 
                        data.map((item,index)=>{
                            return (
                                <View key={index}>
                                <Pressable 
                                    key={index}
                                    onPress={()=>{
                                        item.exception ? changeModalVisible(true):
                                        setCurIndex(index)
                                    }}
                                    style={styles.nameBtn}
                                >
                                    <Modal
                                        transparent={true}
                                        animationType='fade'
                                        visible={isModalVisible}
                                        nRequestClose={()=>changeModalVisible(false)}
                                    >
                                        <SimpleModal
                                            changeModalVisible={changeModalVisible}
                                            setData={setData}    
                                            navigation={navigation}
                                            header={"Logout Account"}
                                            mdText={"Are you Sure You Want To Logout?"}
                                        />
                                    </Modal>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text>
                                    {  

                                        item.exception ? "" :
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
                                                return  (
                                                        <Pressable 
                                                            style={styles.subListTextView}
                                                            onPress={()=>{
                                                                navigation.navigate(item.link,{userId:route.params.userId})
                                                            }}
                                                        >
                                                            
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

export default Settings

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:Color.darkColor,
        alignItems:'center',
        justifyContent:'center'
    },
    search:{
        width:'90%',
        height:'15%',
        top:40,
        paddingVertical:20,
        paddingHorizontal:10,
        alignItems:'center'
    },
    buttonView:{
        width:45,
        height:45,
        backgroundColor:Color.lightColor,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-start',
    },
    main:{
        flexDirection:'column',
        backgroundColor:Color.lightColor,
        width:'100%',
        height:'85%',
        borderTopLeftRadius:'60',
        borderTopRightRadius:'60',
        paddingTop:20,
    },
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
    head:{
        position:'absolute',
        alignSelf:'center',
        top:30,
        fontSize:24,
        color:Color.textLightColor,
        fontWeight:'bold'
    }

})