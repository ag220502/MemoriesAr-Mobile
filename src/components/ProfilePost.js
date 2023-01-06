import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ProfilePost = (data) => {
    const postInfo = [
        {
            postProfile:require('../images/ProfileImages/posts.png'),
        },
        {
            postProfile:require('../images/ProfileImages/posts.png'),
        },
        {
            postProfile:require('../images/ProfileImages/posts.png'),
        },
        {
            postProfile:require('../images/ProfileImages/posts.png'),
        },
        {
            postProfile:require('../images/ProfileImages/posts.png'),
        },
        {
            postProfile:require('../images/ProfileImages/posts.png'),
        }
    ]
  return (
    
    <View style={styles.allPosts}>
        {
            postInfo.map((data,index)=>{
                return(
                    <View style={styles.post} key={index}>
                        <Image source={data.postProfile} style={styles.pic}/>
                    </View>
                )
            })} 
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
    }
})