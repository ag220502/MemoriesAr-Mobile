import { StyleSheet, Text, View,FlatList,Image, Pressable } from 'react-native'
import React,{useState} from 'react'
import Feather from "@expo/vector-icons/Feather"
import AntDesign from "@expo/vector-icons/AntDesign"
import Ionicons from "@expo/vector-icons/Ionicons"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Entypo } from '@expo/vector-icons';
import Color from '../ColourThemes/theme1'


const UserFeed = ({navigation}) => {
	const postInfo = [
        {
            postTitle:"Benjamin Conley",
            postTag:"AAR225 and 2 others",
            postLocation:"Dubai",
            postType:"Fictional",
            postProfile:require('../images/ProfileImages/profile3.jpg'),
            postImage:require('../images/HomeImages/post10.jpg'),
            likes:230,
            comments:23,
            isLiked:true,
            isDisliked:true,
            isSaved:false,
        },
        {
            postTitle:"Shelia Huntley",
            postTag:"AAR225 and 2 others",
            postLocation:"Dubai",
            postType:"Fictional",
            postProfile:require('../images/ProfileImages/profile1.jpg'),
            postImage:require('../images/HomeImages/post5.jpg'),
            likes:765,
            comments:9,
            isLiked:true,
            isDisliked:false,
            isSaved:false,
        },
		{
            postTitle:"Theresia Hall",
            postTag:"AAR225 and 2 others",
            postLocation:"Dubai",
            postType:"Fictional",
            postProfile:require('../images/ProfileImages/profile2.jpg'),
            postImage:require('../images/HomeImages/post1.jpg'),
            likes:10,
            comments:1,
            isLiked:true,
            isDisliked:false,
            isSaved:false,
        },
		{
            postTitle:"Gary Dame",
            postTag:"AAR225 and 2 others",
            postLocation:"Dubai",
            postType:"Fictional",
            postProfile:require('../images/ProfileImages/profile4.jpg'),
            postImage:require('../images/HomeImages/post2.jpg'),
            likes:90,
            comments:0,
            isLiked:true,
            isDisliked:false,
            isSaved:false,
        },
        {
            postTitle:"Peggy Justus",
            postTag:"AAR225 and 2 others",
            postLocation:"Dubai",
            postType:"Fictional",
            postProfile:require('../images/ProfileImages/profile5.jpg'),
            postImage:require('../images/HomeImages/post7.jpg'),
            likes:854,
            comments:23,
            isLiked:false,
            isDisliked:true,
            isSaved:false,
        },
        {
            postTitle:"Angelo Edwards",
            postTag:"AAR225 and 2 others",
            postLocation:"Dubai",
            postType:"Fictional",
            postProfile:require('../images/ProfileImages/profile8.jpg'),
            postImage:require('../images/HomeImages/post3.jpg'),
            likes:98,
            comments:23,
            isLiked:true,
            isDisliked:true,
            isSaved:true,
        }

    ]
	return (
		<View style={styles.container}>
			<FlatList
            data={postInfo}
            renderItem={
                (element)=>{
                    return(
                        <View style={styles.userPost}>
                            <View style={styles.postUserDetails}>
								<View style={styles.userDetails}>
									<Image
										source={element.item.postProfile}
										style={styles.userProfile}
									/>
									<Text style={styles.userName}>{element.item.postTitle}</Text>
								</View>
								<View style={styles.moreOptions}>
									<Entypo name="dots-three-horizontal" size={24} color="black" />
								</View>
							</View>
							<View style={styles.userPostPic}>
								<Image
									source={element.item.postImage}
									style={styles.postImage}
								/>
								<Pressable style={styles.postBtn}>
									<Text style={styles.postBtnText}>View Post</Text>
								</Pressable>
							</View>
							<View style={styles.postOptions}>
								<Pressable style={styles.postOpt}>
									<Entypo 
										name={"heart-outlined"} 
										size={30} 
										color={Color.textMidColor}
									/>
									<Text style={styles.optionNum}>{element.item.likes}</Text>
								</Pressable>
								<Pressable style={styles.postOpt}>
									<FontAwesome 
										name="commenting" 
										size={24} 
										color={Color.textMidColor} 
									/>
									<Text style={styles.optionNum}>{element.item.comments}</Text>
								</Pressable>
								<Pressable style={styles.postOpt}>
								<Ionicons 
									name="bookmark-outline" 
									size={24} 
									color={Color.textMidColor}
								/>
								</Pressable>
							</View>
                        </View>
                    )
                }
            }
        />
		</View>
	)
}

export default UserFeed

const styles = StyleSheet.create({
	container:{
		width:'100%',
		marginVertical:50,
		backgroundColor:Color.lightColor
	},
	userPost:{
		width:'90%',
		alignSelf:'90%',
		alignSelf:'center'
	},
	postUserDetails:{
		width:"100%",
		paddingVertical:10,
		flexDirection:'row',
		justifyContent:'space-between',
	},
	userDetails:
	{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		alignContent:'flex-start'
	},
	userProfile:{
		height:50,
		width:50,
		borderRadius:100
	},
	userName:{
		paddingHorizontal:15,
		fontSize:16,
		fontWeight:'700'
	},
	moreOptions:{
		justifyContent:'center',
		alignItems:'center'
	},
	userPostPic:{
		width:'100%',
		borderRadius:15,
		paddingVertical:5
	},
	postImage:{
		borderRadius:20,
		width:'100%',
		height:250
	},
	postBtn:{
		position:'absolute',
		backgroundColor:Color.whiteColor,
		padding:5,
		borderRadius:10,
		opacity:0.6,
		bottom:20,
		right:15
	},
	postBtnText:{
		color:Color.textDarkColor,
		fontWeight:'800',
		paddingHorizontal:8
	},
	postOptions:{
		width:'60%',
		flexDirection:'row',
		justifyContent:'space-between',
		paddingVertical:5,
		paddingBottom:20
	},
	postOpt:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
	},
	optionNum:{
		paddingHorizontal:5,
		fontWeight:'400',
		color:Color.blackColor,
		fontSize:16,
		
	}
})