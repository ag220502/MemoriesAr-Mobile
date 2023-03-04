import { Pressable, ScrollView,  StyleSheet, Text, View, Image } from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import Post from '../../../components/ProfilePost'; 
import Scrapbooks from '../../../components/ProfileScrapbooks';
const OtherUserProfileScreen = ({navigation,route}) => {
  const [showPosts,setShowPosts] = useState(true);

  const data = [
    { 
      post:require('../../../images/ProfileImages/posts.png'),
      name:"Akshay"
    },
    { post:require('../../../images/ProfileImages/posts.png')},    
    { post:require('../../../images/ProfileImages/posts.png')},
    { post:require('../../../images/ProfileImages/posts.png')}
  ]
  return (
  <View>
    <View style={styles.container}>
      <View style={styles.search}>
        <Pressable style={styles.buttonView}
            onPress={()=>navigation.navigate(route.params.backTo,{userId:route.params.logged})}
        >
            <Ionicons name="chevron-back" size={30} color="#F50057" />
        </Pressable>
        <Pressable style={styles.buttonView}
            onPress={()=>navigation.navigate("MainScreen")}
        >
            <Entypo name="dots-three-horizontal" size={24} color="#F50057" />
        </Pressable>
      </View>
      <View style={styles.main}>
        <View style={styles.profile_img}>
          <Image style={styles.pofile} source={require('../../../images/ProfileImages/profile.png')}/>
        </View>
        <View style={styles.profile_data}>
          <View style={styles.dataView}>
            <Text style={styles.dataNum}>300</Text>
            <Text style={styles.dataName}>Friends</Text>
          </View>
          <View style={styles.dataView}>
            <Text style={styles.dataNum}>30</Text>
            <Text style={styles.dataName}>Memories</Text>
          </View>
        </View>
        <View style={styles.userNameView}>
          <Text style={styles.userName}>Akshay Garg</Text>
        </View>
        <View style={styles.profile_bio}>
          <Text style={styles.bio_text}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </Text>
        </View>
        <View style={styles.followButtonView}>
          <Pressable style={styles.FollowbuttonView}>
            <Text style={styles.btnText}>Add Friend</Text>
          </Pressable>
          <Pressable style={styles.FollowbuttonView} >
            <Text  style={styles.btnText}>Message</Text>
          </Pressable>
        </View>
        <View style={styles.tabView}>
          <View style={{flexDirection:'row'}}>
            <Text style={
              showPosts? styles.tabTextActive: styles.tabText}
              onPress={()=>setShowPosts(true)}
              >Memories</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={
              showPosts? styles.tabText: styles.tabTextActive}
              onPress={()=>setShowPosts(false)}
              > Scrapbooks</Text>
          </View>
        </View>
        <ScrollView style={styles.postsView}>
          {
            showPosts ? <Post data={data}/> : <Scrapbooks/>
          }
        </ScrollView>
      </View>
    </View>
  </View>
  )
}

export default OtherUserProfileScreen

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'#F50057',
    alignItems:'center',
    justifyContent:'center'
  },
  search:{
    width:'95%',
    height:'15%',
    top:40,
    paddingVertical:20,
    paddingHorizontal:5,
    justifyContent:'space-between',
    flexDirection:'row'
  },
  buttonView:{
    width:45,
    height:45,
    backgroundColor:'#F5F6FA',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  main:{
    flexDirection:'column',
    backgroundColor:"#F5F6FA",
    width:'100%',
    height:'85%',
    borderTopLeftRadius:'60',
    borderTopRightRadius:'60',
    paddingTop:20,
  },
  FollowbuttonView:{
    height:45,
    backgroundColor:'#F50057',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    padding:10
  },
  FollowText:{
    color:'#F50057'
  },
  pofile:{
    alignSelf:'center',
  },
  profile_img:{
    position:'absolute',
    width:100,
    height:100,
    backgroundColor:'black',
    alignSelf:'center',
    marginTop:-50,
    borderRadius:100
  },
  profile_data:{
    flexDirection:'row',
    justifyContent:'space-between',
    
  },
  dataView:{
    width:'40%',
    flexDirection:'column',
    alignItems:'center',

  },
  dataNum:{
    fontWeight:'bold',
    fontSize:17,
    paddingBottom:2
  },
  dataName:{
    fontSize:16
  },
  userNameView:{
    alignSelf:'center',
    marginVertical:10
  },
  userName:{
    fontSize:23,
    padding:5,
    fontWeight:'bold'
  },
  profile_bio:{
    marginVertical:15,
    paddingHorizontal:15
  },
  bio_text:{
    fontSize:16,
    lineHeight:24,
    fontWeight:'500'
  },
  followButtonView:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-evenly',
    padding:10,
    marginTop:10
  },
  btnText:{
    color:'#F5F6FA',
    fontWeight:'500',
    fontSize:16
  },
  tabView:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:30,
    alignItems:'center'
  },
  tabText:{
    fontSize:20,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:5,
    paddingVertical:3,
    fontWeight:'500',
    color:'grey'
  },
  tabTextActive:{
    fontSize:20,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:5,
    paddingVertical:3,
    fontWeight:'bold'
  },
  postsView:{
    marginTop:20,
  }
})