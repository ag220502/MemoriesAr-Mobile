import { Pressable, StyleSheet, Text, TextInput, View, ScrollView,FlatList,Image } from 'react-native'
import React,{useState} from 'react'
import BottomNavBar from '../../../components/BottomNavBar'
import Color from '../../../ColourThemes/theme1'
import Style from '../../../StyleSheets/main.js'
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar'


const ExploreScreen = ({navigation}) => {
    const post=[
		{
			userName:"Akshay Garg",
			post:require('../../../images/HomeImages/post.png')
		},
		{
			userName:"Dhruv Chaturvedi",
			post:require('../../../images/HomeImages/post.png')
		},
		{
			userName:"Mani Shankar",
			post:require('../../../images/HomeImages/post.png')
		},
		{
			userName:"Rajanssh Gadhvi",
			post:require('../../../images/HomeImages/post.png')
		},
		{
			userName:"Abdul Rehman",
			post:require('../../../images/HomeImages/post.png')
		},

	]
    const data=
	[
		{
			name:'Akshay',
			profile:require('../../../images/ProfileImages/profile.png')
		},
		{
			name:'Akshay',
			profile:require('../../../images/ProfileImages/profile.png')
		},
		{
			name:'Akshay',
			profile:require('../../../images/ProfileImages/profile.png')
		},
		{
			name:'Akshay',
			profile:require('../../../images/ProfileImages/profile.png')
		},
		{
			name:'Akshay',
			profile:require('../../../images/ProfileImages/profile.png')
		},
		{
			name:'Akshay',
			profile:require('../../../images/ProfileImages/profile.png')
		},
		{
			name:'Akshay',
			profile:require('../../../images/ProfileImages/profile.png')
		}
	]
    const [isFocus,setFocus] = useState(false)
    const [searchText,setSearchText] = useState("")
    return (
        <View style={Style.container}>
            <StatusBar style="light" />
            <View style={[Style.downMain]}>
                <TextInput
                    style={styles.searchBar}
                    value={searchText}
                    placeholder="Search"
                    onFocus={() =>setFocus(true) }
                    onChangeText={(text)=>{
                        setSearchText(text)
                    }}
                    onBlur={()=>
                        {
                            setSearchText("")
                            setFocus(false)
                        }}
                />
                <Pressable/>
            </View>
            <View style={Style.mainDown}>
                {isFocus ? <Text></Text>:
                <View>
                    <ScrollView style={styles.dataView}>
                        <Text style={[styles.viewHead]}>Recent Searches</Text>
                        <ScrollView horizontal={true} style={styles.recentSearchView}>
                            {
                                data.map((item,index)=>{
                                    return(
                                        <Pressable style={styles.userDetails} key={index}>
                                            <Image source={item.profile} style={styles.profile_img}/>
                                            <Text>{item.name}</Text>
                                        </Pressable>	
                                    )
                                })
                            }
                        </ScrollView>
                        <Text style={styles.viewHead}>Suggested Users</Text>
                        <ScrollView style={styles.suggView} horizontal={true}>
                            {
                                data.map((item,index)=>{
                                    return(
                                        <View style={styles.suggUser} key={index}>
                                            <Image source={item.profile} style={styles.suggProfileImg}/>
                                            <Text style={styles.usrText}>{item.name}</Text>
                                            <View style={styles.btnMainView}>
                                                <Pressable style={styles.btnView}>
                                                    <Text style={styles.btnText}>Add Firend</Text>
                                                </Pressable>
                                                <Pressable style={styles.btnView}>
                                                    <Text style={styles.btnText}>Remove</Text>
                                                </Pressable>
                                            </View>
                                        </View>	
                                    )
                                })
                            }
                            
                        </ScrollView>
                        {/* <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                            <Text style={styles.viewHead}>Suggested Memories</Text>
                            <Text style={styles.viewAllLink}>View All</Text>
                        </View>
                        <View style={styles.suggView}>
                            <View style={[{flexWrap:'wrap'}]}>
                                
                            </View>
                        </View>
                        <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                            <Text style={styles.viewHead}>Suggested Scrapbooks</Text>
                            <Text style={styles.viewAllLink}>View All</Text>
                        </View>
                        <View style={[styles.suggView,{marginBottom:80}]}>

                        </View> */}
                    </ScrollView>
                </View>}
            </View>
        <BottomNavBar navigation={navigation}/>
        </View>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({
    searchBar:{
        width:'70%',
        height:40,
        backgroundColor:Color.lightColor,
        borderRadius:10,
        alignSelf:'center',
        marginTop:30,
        padding:10,
        fontSize:16
    },
    dataView:{
		marginTop:50
	},
	recentSearchView:{
		width:'100%',
		height:80,
		marginVertical:20,
		flexDirection:'row',
		zIndex:-1
	},
	viewHead:{
		fontSize:18,
		fontWeight:'700',
		paddingHorizontal:15,
		marginTop:10
	},
	viewHead1:{
		marginTop:50,
	},
	suggView:{
		width:'100%',
		height:300,
		marginVertical:10,
	},
	userDetails:{
		flexDirection:'column',
		width:80,
		paddingHorizontal:15
	},
	profile_img:{
		width:50,
		height:50
	},
	suggUser:{
		width:200,
		height:250,
		borderWidth:0.5,
		borderRadius:10,
		marginHorizontal:15,
		marginVertical:15,
		justifyContent:'center',
		alignItems:'center'
	},
	usrText:{
		marginVertical:10,
		fontSize:16,
		fontWeight:'700'
	},
	btnMainView:{
		width:'100%',
		flexDirection:'row',
		justifyContent:'space-between',
		paddingHorizontal:10,
		marginVertical:15
	},
	btnView:{
		backgroundColor:Color.darkColor,

		padding:7,
		borderRadius:7
	},
	btnText:{
		color:Color.textLightColor,
		fontSize:16,
		
	},
	suggProfileImg:{
		width:100,
		height:100
	},
	viewAllLink:{
		paddingHorizontal:15,
		fontSize:15,
		fontWeight:'700',
		color:Color.textDarkColor,
		marginTop:10
	},
	recPost:{
		width:'33.3%',
		height:'50%',
		backgroundColor:'blue'
	}
})