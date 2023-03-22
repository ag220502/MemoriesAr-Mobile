import { StyleSheet, Text, View,Image,Pressable,Modal,ImageBackground,Alert } from 'react-native'
import React,{useState} from 'react'
import { Entypo } from '@expo/vector-icons';
import Color from '../ColourThemes/theme1'
import {deleteScrapbook} from "../screens/fetchData/scrapbooks.js"
import { StackActions } from '@react-navigation/native';
const ProfileScrapbooks = ({navigation,data,userId}) => {
    const [openModel,setOpenModel] = useState(false)
    const handleOnPress = () => {
        setOpenModel(!openModel)
    }
    if(data==undefined)
    {
        return <Text>Loading...</Text>
    }
  return (
    
    <View style={styles.allPosts}>
        {
            data!=="No Scrapbooks Available" &&
            data.length ?
            data.map((data1,index)=>{
                return(
                    <ImageBackground style={styles.post} key={index} source={{uri:data.coverPhoto}}>
                        <Pressable 
                            onPress={handleOnPress}
                            style={{position:'absolute',top:0,right:0,zIndex:1,backgroundColor:Color.lightColor,paddingVertical:5,borderRadius:10,marginTop:15,marginHorizontal:15}}>
                                <Entypo name="dots-three-vertical"  size={24} color="black" />
                            </Pressable>
                            <Modal
								animationType='slide'
								transparent={true}
								visible={openModel}
							>
                            	<View style={styles.modalView}>
                                	<View style={styles.modal}>
                                        <Pressable
                                            style={styles.modalOption}
                                            onPress={async ()=>{
                                                setOpenModel(!openModel)
                                                const res = await deleteScrapbook(data1.scrapId)
                                                if(res==="Scrapbook deleted successfully")
                                                {
                                                    Alert.alert("Scrapbook Deleted Successfully","",[
                                                        {
                                                            text:"Ok",
                                                            onPress:()=>{
                                                                navigation.dispatch(
                                                                    StackActions.replace('ProfileScreen',{userId:userId})
                                                                  )
                                                            }
                                                        }
                                                    ])
                                                }
                                            }}
                                        >
                                                <Text>Delete Scrapbook</Text>
                                        </Pressable>
                                        <Pressable
                                            style={styles.modalOption}
                                            onPress={()=>{
                                                setOpenModel(!openModel)
                                                navigation.navigate("ViewScrap",{
                                                    scrapId:data1.scrapId,
                                                    userId:userId,
                                                })

                                            }}
                                            >
                                                <Text>View Scrapbook</Text>
                                        </Pressable>
                                        <Pressable
                                        style={styles.modalOption}
                                        onPress={()=>{
                                            setOpenModel(!openModel)
                                        }}
                                        >
                                            <Text>Close</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </Modal>
                        
                    </ImageBackground>
                )
            })
            :
            <Text style={{fontWeight:'700',fontSize:16,paddingVertical:10}}>No Scrapbooks Uploaded</Text>
        
        }
        
  </View>
  )
}

export default ProfileScrapbooks

const styles = StyleSheet.create({
    allPosts:{
        justifyContent:'space-evenly',
        display:'flex',   
        flexDirection:'row',
        flexWrap:'wrap'
    },
    post:{
        width:'90%',
        height:200,
        marginVertical:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        borderRadius:15
    },
    pic:{
        width:160,
        height:180,
        borderRadius:25,
    },
    modalView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:22
    },
	modalOption:{
		padding:15,
		borderBottomWidth:0.3,
		width:'100%',
		borderBottomColor:Color.midColor,
	},
    modal:{
        margin:10,
        backgroundColor:Color.whiteColor,
        borderRadius:20,
        padding:15,
        alignItems:'center',
        width:'70%',
        shadowColor:Color.midColor,
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.5,
        shadowRadius:4,
        elevation:5
    },
})