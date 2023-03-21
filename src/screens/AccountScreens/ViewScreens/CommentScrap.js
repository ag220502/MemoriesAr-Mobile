import { Pressable, StyleSheet, Text, View,ScrollView,TextInput,KeyboardAvoidingView, SafeAreaView, FlatList,Image, Alert } from 'react-native'
import React from 'react'
import style from '../../../StyleSheets/main.js'
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import Color from '../../../ColourThemes/theme1.js';
import { FontAwesome } from '@expo/vector-icons';  
import { getAllComments,createComment } from '../../fetchData/createComment.js';

const CommentScrap = ({navigation,route}) => {
    const [newComment,setNewComment] = React.useState("")
    const [comment,setComment] = React.useState([])
    if(!comment.length)
    {
        getAllComments(route.params.postId).then((data)=>{
            if(data!=="No comments found")
            {
                setComment(data)
            } 
        })
    }

    return (
    <View style={style.container}>
        <StatusBar style="light"/>
        <View style={[style.downMain,{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}]}>
            <Pressable style={styles.btnView} onPress={()=>{navigation.navigate("MainScreen")}}>
                <Entypo name="chevron-left" size={24} color="black" />
            </Pressable>
            <View style={styles.headView}>
                <Text style={style.frameHead}>Scrapbook Comments</Text>
            </View>
            <View></View>
        </View>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={style.mainDown}
        >
            <View style={{marginTop:40}}>
                <FlatList
                    data={comment}
                    renderItem={
                        (element)=>{
                            return(
                                <View style={styles.comment}>
                                    <View style={styles.commentUser}>
                                        {
                                            element.item.profilePhoto==="" || element.item.profilePhoto===null?
                                            <Image
                                                source={require("../../../images/ProfileImages/default.png")}
                                                style={styles.commentUserPic}
                                            />
                                            :
                                        <Image
                                            source={{uri:element.item.profilePhoto}}
                                            style={styles.commentUserPic}
                                        />
                                            
                                        }
                                        
                                    </View>
                                    <View style={styles.commentText}>
                                    <Text style={styles.commentUserName}>{element.item.firstName + " "}{element.item.lastName?element.item.lastName:""}</Text>
                                        <Text style={{paddingBottom:10}}>{element.item.comment}</Text>
                                    </View>
                                </View>
                            )
                        }
                    }
                    keyExtractor={(item)=>item.commentId}
                />  
            </View>
            
            <View style={styles.send_msg}>
                <TextInput 
                    style={styles.msg} 
                    placeholder={'Enter Comment'}
                    value={newComment}
                    onChangeText={(text)=>{setNewComment(text)}}
                />
                <Pressable 
                    style={styles.sendBtn}
                    onPress={()=>{
                        if(newComment==="" || newComment.trim()==="") 
                        {
                            Alert.alert("Please enter a comment")
                            return
                        }
                        createComment(route.params.postId,route.params.userId,newComment).then((data)=>{
                            getAllComments(route.params.postId).then((data)=>{
                                setComment(data)
                            })
                            setNewComment("")
                        })
                    }}
                >
                    <FontAwesome name="send" size={24} color={Color.textLightColor} />
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    </View>
  )
}

export default CommentScrap

const styles = StyleSheet.create({
    btnView:{
        width:45,
        height:45,
        backgroundColor:Color.lightColor,
        borderRadius:10,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20
    },
    headView:{
        alignSelf:'center',
        marginLeft:-30
    },
    send_msg:{
        width:'90%',
        marginVertical:10,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
        position:'absolute',
        bottom:10
    },
    msg:{
        width:'80%',
        backgroundColor:'white',
        height:45,
        color:'black',
        padding:10,
        marginHorizontal:10,
        fontSize:16,
        borderRadius:10
    },
    sendBtn:{
        width:45,
        height:45,
        backgroundColor: Color.darkColor,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    comment:{
        width:'90%',
        alignSelf:'center',
        marginVertical:10,
        borderBottomColor:Color.midColor,
        borderBottomWidth:0.2,        
        flexDirection:'row'
    },
    commentUser:{
        alignItems:'center',
        justifyContent:'flex-start'
    },
    commentUserPic:{
        width:40,
        height:40,
        borderRadius:20,
        marginRight:15,
        
    },
    commentUserName:{
        fontSize:16,
        fontWeight:'bold',
        paddingBottom:5
    },
    commentText:{
        width:'80%',
        
        borderRadius:10
    }

})