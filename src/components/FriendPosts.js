import { StyleSheet, Text, View,Image, Touchable, TouchableOpacity,Modal, ScrollView, FlatList } from 'react-native'
import React,{useState} from 'react'
import Feather from "@expo/vector-icons/Feather"
import AntDesign from "@expo/vector-icons/AntDesign"
import Ionicons from "@expo/vector-icons/Ionicons"
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"


const Post = () => {
    const postInfo = [
        {
            postTitle:"Akshay Garg",
            postTag:"AAR225 and 2 others",
            postLocation:"Dubai",
            postType:"Fictional",
            postProfile:require('../images/HomeImages/profile.png'),
            postImage:require('../images/HomeImages/post.png'),
            likes:765,
            comments:23,
            isLiked:true,
            isDisliked:true,
            isSaved:false,
        },
        {
            postTitle:"Akshay Garg",
            postTag:"AAR225 and 2 others",
            postLocation:"Dubai",
            postType:"Fictional",
            postProfile:require('../images/HomeImages/profile.png'),
            postImage:require('../images/HomeImages/post.png'),
            likes:765,
            comments:23,
            isLiked:true,
            isDisliked:false,
            isSaved:false,
        },
        {
            postTitle:"Akshay Garg",
            postTag:"AAR225 and 2 others",
            postLocation:"Dubai",
            postType:"Fictional",
            postProfile:require('../images/HomeImages/profile.png'),
            postImage:require('../images/HomeImages/post.png'),
            likes:765,
            comments:23,
            isLiked:false,
            isDisliked:true,
            isSaved:false,
        },
        {
            postTitle:"Akshay Garg",
            postTag:"AAR225 and 2 others",
            postLocation:"Dubai",
            postType:"Fictional",
            postProfile:require('../images/HomeImages/profile.png'),
            postImage:require('../images/HomeImages/post.png'),
            likes:765,
            comments:23,
            isLiked:true,
            isDisliked:true,
            isSaved:true,
        }

    ]

  return (
    <View horizontal={false} style={styles.container}>
        <FlatList
            data={postInfo}
            renderItem={
                (post)=>{
                    return(
                        <View style={styles.userPost}>
                            <Text>{post.postTitle}</Text>
                        </View>
                    )
                }
            }
        />
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
    container:{
        marginVertical:50,
        backgroundColor:'blue'
    },
    userPost:{
        backgroundColor:'red',
        width:'90%',
        alignSelf:'center'
    },













    post:{
        borderBottomColor:'grey',
        borderBottomWidth:0.5
    },
    postTitle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:15
    },
    post_user:{
        flexDirection:'row',
        alignItems:'center'
    },
    profile:{
        width:50,
        height:50,
        borderRadius:100,
    },
    user_details:{
        paddingLeft:10,
        flexDirection:'column'
    },
    user_det:{
        fontSize:15,
        fontWeight:'bold'
    },
    post_data:{
        flexDirection:'row',
        padding:10,
        justifyContent:'space-between',
        borderBottomColor:'grey',
        borderBottomWidth:0.5
    },
    post_data_text:{
        fontSize:15
    },
    post_image:{
        position:'relative',
        justifyContent:'center',
        alignItems:'center'
    },
    caption:{
        padding:10,
    },
    caption_text:{
        fontSize:15,
        lineHeight:18
    },
    image:{
        width:'100%',
        height:400
    },
    iconView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:10,
        marginHorizontal:20
    }
})