import { Pressable, StyleSheet, Text, TextInput, View, ScrollView,FlatList,Image } from 'react-native'
import React,{useState} from 'react'
import BottomNavBar from '../../../components/BottomNavBar'
import Color from '../../../ColourThemes/theme1'
import Style from '../../../StyleSheets/main.js'
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar'
import { recentSearch, searchUser } from '../../fetchData/searchData.js'


const ExploreScreen = ({navigation,route}) => 
{
    const data=
	[
		{
			name:'Ken',
			profile:require('../../../images/ProfileImages/profile10.jpg')
		},
		{
			name:'Leona',
			profile:require('../../../images/ProfileImages/profile9.jpg')
		},
		{
			name:'Kenneth',
			profile:require('../../../images/ProfileImages/profile8.jpg')
		},
		{
			name:'Lee',
			profile:require('../../../images/ProfileImages/profile7.jpg')
		},
		{
			name:'Alicia',
			profile:require('../../../images/ProfileImages/profile6.jpg')
		},
		{
			name:'Harold',
			profile:require('../../../images/ProfileImages/profile4.jpg')
		},
		{
			name:'Melissa',
			profile:require('../../../images/ProfileImages/profile2.jpg')
		}
	]
    const [isFocus,setFocus] = useState(false)
    const [searchText,setSearchText] = useState("")
	const [searchedUser,setSearchedUser] = useState([])
	const [recent,setRecent] = useState([])
	const searchByName = (searchText) => {
		setSearchText(searchText)
		const users = searchUser(searchText)
		setSearchedUser(users)
		console.log(searchedUser)
	}
	setRecent(recentSearch(route.params.userId))
	console.log(recent)
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
						searchByName(text)
                        
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
                {isFocus ? 
					<></>
					// <FlatList
					// 	data={searchedUser}
					// 	renderItem={({item}) => {
					// 		return (
					// 			<Pressable style={styles.userDetails}>
					// 				<Image source={item.profile} style={styles.profile_img}/>
					// 				<Text style={[{alignSelf:'center',paddingVertical:5}]}>{item.name}</Text>
					// 			</Pressable>
					// 		)
					// 	}}
					// 	keyExtractor={(item,index) => index.toString()}
					// />
					:
                <View>
                    <ScrollView style={styles.dataView}>
                        <Text style={[styles.viewHead]}>Recent Searches</Text>
                        <ScrollView horizontal={true} style={styles.recentSearchView}>
                            {
                                data.map((item,index)=>{
                                    return(
                                        <Pressable style={styles.userDetails} key={index}>
                                            <Image source={item.profile} style={styles.profile_img}/>
                                            <Text style={[{alignSelf:'center',paddingVertical:5}]}>{item.name}</Text>
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
        <BottomNavBar navigation={navigation} userId={route.params.userId}/>
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
		height:50,
		borderRadius:100
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
		height:100,
		borderRadius:100
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