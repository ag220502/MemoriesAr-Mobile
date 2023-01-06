import { StyleSheet, Text, View,Image, Touchable, TouchableOpacity,Modal, ScrollView } from 'react-native'
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
    <ScrollView style={styles.container}>
        {postInfo.map((data,index)=>{
            const [like, setlike] = useState(data.isLiked)
            const [dislike, setdislike] = useState(data.isDisliked)
            const [saved, setsaved] = useState(data.isSaved)

            return(
                <View
                    key={index}
                    style={styles.post}
                >
                    <View style={styles.postTitle}>
                        <View style={styles.post_user}>
                            <Image
                                source={data.postProfile}
                                style={styles.profile}
                            />
                            <View style={styles.user_details}>
                                <View style={{flexDirection:'row', marginBottom:-12}}>
                                    <Text style={styles.user_det}>
                                        {data.postTitle}
                                    </Text>
                                    <Text> is with {data.postTag} {"\n"}</Text>
                                </View>
                                <Text>{data.postLocation} - {data.postType} Post</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={()=>{<ModalComp vis={true}/>}}
                        >
                            <Feather name="more-horizontal" size={25}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.caption}>
                        <Text style={styles.caption_text}>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </Text>
                    </View>
                    <View style={styles.post_image}>
                        <Image source={data.postImage} style={styles.image}/>
                    </View>
                    <View style={styles.post_data}>
                        <Text style={styles.post_data_text}>{like ? "You and" : ""} {data.likes} Others liked the post</Text>
                        <Text style={styles.post_data_text}>{data.comments} Comments</Text>
                    </View>
                    <View style={styles.iconView}>
                        <TouchableOpacity
                            onPress={()=>setlike(!like)}    
                        >
                            <AntDesign 
                                name={like ? "like1" : "like2"} 
                                size={28} 
                                color={like ? "#F50057" : "black"}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>setdislike(!dislike)}
                        >
                            <AntDesign 
                            name={dislike ? "dislike1" : "dislike2"} 
                            size={28} 
                            color={dislike ? "#F50057" : "black"} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <FontAwesome5 
                            name="comments" 
                            size={28} 
                            color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>setsaved(!saved)}
                        >
                            <Ionicons 
                                name={saved ? "bookmarks" : "bookmarks-outline"} 
                                size={28} 
                                color={saved ? "#F50057" : "black"}/>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        })}
    </ScrollView>
  )
}

export default Post

const styles = StyleSheet.create({
    container:{
        marginVertical:50,

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