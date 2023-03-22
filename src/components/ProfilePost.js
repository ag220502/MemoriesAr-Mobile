import { StyleSheet, Text, View,Image, Pressable,Modal, Alert } from 'react-native'
import React,{useState} from 'react'
import { Entypo } from '@expo/vector-icons';
import Color from '../ColourThemes/theme1';
import {deletePost} from "../screens/fetchData/createPost.js"
import { StackActions } from '@react-navigation/native';
const ProfilePost = ({navigation,data,userId}) => {
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
                
                (data!=="No Memories Available"&&data!=="No Posts Available") &&
                data.length>0 ?
                data.map((data1,index)=>{
                    return(
                        <View style={styles.post} key={index}>
                            <Pressable 
                            onPress={handleOnPress}
                            style={{position:'absolute',top:0,right:0,zIndex:1,backgroundColor:Color.lightColor,paddingVertical:5,borderRadius:10}}>
                                <Entypo name="dots-three-vertical"  size={24} color="black" />
                            </Pressable>
                            <Modal
								animationType='slide'
								transparent={true}
								visible={openModel}
							>
                            	<View style={styles.modalView}>
                                	<View style={styles.modal}>
                                        {
                                            data1.userId==userId?
                                            <Pressable
                                            style={styles.modalOption}
                                            onPress={async ()=>{
                                                setOpenModel(!openModel)
                                                const res = await deletePost(data1.postId,userId)
                                                if(res==="Post deleted successfully")
                                                {
                                                    Alert.alert("Memory Deleted Successfully","",[
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
                                                <Text>Delete Memory</Text>
                                        </Pressable>
                                        :
                                        null
                                        }
                                        
                                        <Pressable
                                            style={styles.modalOption}
                                            onPress={()=>{
                                                setOpenModel(!openModel)
                                                navigation.navigate('ViewPost',{
                                                    postId:data1.postId,
                                                    userId:userId
                                                })

                                            }}
                                            >
                                                <Text>View Memory</Text>
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
                            <Image source={{uri:data1.photo}} style={styles.pic}/>
                        </View>
                    )
                }) : <Text style={{fontWeight:'700',fontSize:16,paddingVertical:10}}>No Memories Uploaded</Text>
                }
        </View>
    )
}

export default ProfilePost

const styles = StyleSheet.create({
    allPosts:{
        justifyContent:'space-evenly',
        display:'flex',   
        flexDirection:'row',
        flexWrap:'wrap'
    },
    post:{
        width:150,
        height:150,
        marginVertical:30,
        justifyContent:'center',
        alignItems:'center'

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