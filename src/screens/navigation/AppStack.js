import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

//Home Screens
import MainScreen from '../AccountScreens/MainScreen.js';
import ViewPost from '../AccountScreens/ViewScreens/ViewPost.js';
import Comments from '../AccountScreens/ViewScreens/Comments.js';
import FriendRequest from '../AccountScreens/Request/FriendRequest.js';
import ReportPost from '../AccountScreens/ReportObjs/ReportPost.js';
import ReportUsers from '../AccountScreens/ReportObjs/ReportUsers.js';

//Create Post Screens
import CreateScreen from '../AccountScreens/CreateScreens/CreateScreen.js';
import AddLocation from '../AccountScreens/CreateScreens/AddLocation.js';
import CreateOption from '../AccountScreens/CreateScreens/CreateOption.js';
import CreateScrapImages from '../AccountScreens/CreateScreens/CreateScrapImages.js';
import CreateScrapDetails from '../AccountScreens/CreateScreens/CreateScrapDetails.js';
import SelectTemplate from '../AccountScreens/CreateScreens/SelectTemplate.js';
//Menu Screens
import MenuScreen from '../AccountScreens/MapScreens/PostsMap'
import UserPosts from '../AccountScreens/MenuScreens/UserPosts.js';
import UserGroups from '../AccountScreens/MenuScreens/UserGroups.js';

//Chat Screens
import ChatScreen from '../AccountScreens/ChatScreens/ChatScreen.js';
import UserChatScreen from '../AccountScreens/ChatScreens/UserChatScreen.js';

//Profile Screens
import EditProfile from '../AccountScreens/ProfileScreens/EditProfile.js';
import ProfileScreen from '../AccountScreens/ProfileScreens/ProfileScreen.js'
import AllFriends from '../AccountScreens/ProfileScreens/AllFriends.js';


//Search Screens
import OtherUserProfileScreen from '../AccountScreens/SearchScreens/OtherUserProfileScreen.js'
import ExploreScreen from '../AccountScreens/SearchScreens/ExploreScreen.js';

//Setting Screens
import Settings from '../AccountScreens/SettingsScreen/Settings.js';
import PersonalInformation from '../AccountScreens/SettingsScreen/Account/PersonalInformation.js'
import SavedMemories from '../AccountScreens/SettingsScreen/Account/SavedMemories.js'
import DeactivateAccount from '../AccountScreens/SettingsScreen/Account/DeactivateAccount.js'
import DeleteAccount from '../AccountScreens/SettingsScreen/Account/DeleteAccount.js'
import UserFriends from '../AccountScreens/SettingsScreen/Account/UserFriends.js'
import BlockedAccount from '../AccountScreens/SettingsScreen/Privacy/BlockedAccount.js';
import ChangePassword from '../AccountScreens/SettingsScreen/SecurityScreen/ChangePassword.js';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
		<Stack.Navigator screenOptions={{ animation: 'none' }}>
            <Stack.Screen 
                name="MainScreen"
                component={MainScreen}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="ViewPost"
                component={ViewPost}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="Comments"
                component={Comments}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="FriendRequest"
                component={FriendRequest}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="ReportPost"
                component={ReportPost}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="ReportUsers"
                component={ReportUsers}
                options={{headerShown:false}} />
                
            <Stack.Screen 
                name="ChatScreen"
                component={ChatScreen}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="UserChatScreen"
                component={UserChatScreen}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="CreateScreen"
                component={CreateScreen}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="CreateOption"
                component={CreateOption}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="CreateScrapImages"
                component={CreateScrapImages}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="CreateScrapDetails"
                component={CreateScrapDetails}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="SelectTemplate"
                component={SelectTemplate}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="MenuScreen"
                component={MenuScreen}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="ProfileScreen"
                component={ProfileScreen}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="ExploreScreen"
                component={ExploreScreen}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="EditProfile"
                component={EditProfile}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="AllFriends"
                component={AllFriends}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="Settings"
                component={Settings}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="PersonalInformation"
                component={PersonalInformation}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="SavedMemories"
                component={SavedMemories}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="DeactivateAccount"
                component={DeactivateAccount}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="DeleteAccount"
                component={DeleteAccount}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="UserFriends"
                component={UserFriends}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="BlockedAccount"
                component={BlockedAccount}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="ChangePassword"
                component={ChangePassword}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="OtherUserProfileScreen"
                component={OtherUserProfileScreen}
                options={{headerShown:false}} />
                
            <Stack.Screen 
                name="AddLocation"
                component={AddLocation}
                options={{headerShown:false}} />
            <Stack.Screen 
                name="UserPosts"
                component={UserPosts}
                options={{headerShown:false}} />
                
            <Stack.Screen 
                name="UserGroups"
                component={UserGroups}
                options={{headerShown:false}} />
        </Stack.Navigator>
  )
}

export default AppStack
