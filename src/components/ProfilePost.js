import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ProfilePost = (data) => {
    return (
        <View style={styles.allPosts}>
            {
                data.data.length ?
                data.data.map((data,index)=>{
                    return(
                        <View style={styles.post} key={index}>
                            <Image source={{uri:data.photo}} style={styles.pic}/>
                        </View>
                    )
                }) : <Text>No Memories Uploaded</Text>
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
    }
})