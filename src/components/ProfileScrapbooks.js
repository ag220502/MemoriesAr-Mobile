import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ProfileScrapbooks = (data) => {
    const postInfo = [
        {
            postProfile:require('../images/ProfileImages/scrap.png'),
        },
        {
            postProfile:require('../images/ProfileImages/scrap.png'),
        },
        {
            postProfile:require('../images/ProfileImages/scrap.png'),
        },
        {
            postProfile:require('../images/ProfileImages/scrap.png'),
        },
        {
            postProfile:require('../images/ProfileImages/scrap.png'),
        },
        {
            postProfile:require('../images/ProfileImages/scrap.png'),
        }
    ]
    {postInfo.map((data,index)=>{
        console.log(data.postProfile)
    })}
  return (
    
    <View style={styles.allPosts}>
        {
            postInfo.map((data,index)=>{
                return(
                    <View style={styles.post}>
                        <Image source={data.postProfile} style={styles.pic}/>
                    </View>
                )
            })}
        
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