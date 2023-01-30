import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Login Screens
import StartApp from './src/screens/LoginScreens/StartApp.js';
import SignUp from './src/screens/LoginScreens/SignUp.js';
import SignUpVerification from './src/screens/LoginScreens/SignUpVerification/SignUpVerification.js';
import AccountVerified from './src/screens/LoginScreens/SignUpVerification/AccountVerified.js';
import SignIn from './src/screens/LoginScreens/SignIn.js';
import ResetPassword from './src/screens/LoginScreens/ForgetPassword/ResetPassword.js';
import ForPassVerification from './src/screens/LoginScreens/ForgetPassword/ForPassVerification.js';
import NewPassword from './src/screens/LoginScreens/ForgetPassword/NewPassword.js';
import PasswordUpdated from './src/screens/LoginScreens/ForgetPassword/PasswordUpdated.js';

//Home Screens
import MainScreen from './src/screens/AccountScreens/MainScreen.js';

//Create Post Screens
import CreateScreen from './src/screens/AccountScreens/CreateScreens/CreateScreen.js';
import AddLocation from './src/screens/AccountScreens/CreateScreens/AddLocation.js';

//Menu Screens
import MenuScreen from './src/screens/AccountScreens/MenuScreens/MenuScreen.js'
import UserPosts from './src/screens/AccountScreens/MenuScreens/UserPosts.js';
import UserGroups from './src/screens/AccountScreens/MenuScreens/UserGroups.js';

//Chat Screens
import ChatScreen from './src/screens/AccountScreens/ChatScreens/ChatScreen.js';
import UserChatScreen from './src/screens/AccountScreens/ChatScreens/UserChatScreen.js';

//Profile Screens
import EditProfile from './src/screens/AccountScreens/ProfileScreens/EditProfile.js';
import ProfileScreen from './src/screens/AccountScreens/ProfileScreens/ProfileScreen.js'

//Search Screens
import OtherUserProfileScreen from './src/screens/AccountScreens/SearchScreens/OtherUserProfileScreen.js'
import ExploreScreen from './src/screens/AccountScreens/SearchScreens/ExploreScreen.js';

//Setting Screens
import Settings from './src/screens/AccountScreens/SettingsScreen/Settings.js';
import PersonalInformation from './src/screens/AccountScreens/SettingsScreen/Account/PersonalInformation.js'
import SavedMemories from './src/screens/AccountScreens/SettingsScreen/Account/SavedMemories.js'
import DeactivateAccount from './src/screens/AccountScreens/SettingsScreen/Account/DeactivateAccount.js'
import DeleteAccount from './src/screens/AccountScreens/SettingsScreen/Account/DeleteAccount.js'
import UserFriends from './src/screens/AccountScreens/SettingsScreen/Account/UserFriends.js'
import BlockedAccount from './src/screens/AccountScreens/SettingsScreen/Privacy/BlockedAccount.js';
import ChangePassword from './src/screens/AccountScreens/SettingsScreen/SecurityScreen/ChangePassword.js';


const Stack = createNativeStackNavigator();
export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ animation: 'none' }}>
          <Stack.Screen
            name="StartApp"
            component={StartApp}
            options={{headerShown:false}}/>
          <Stack.Screen 
            name="SignIn" 
            component={SignIn}
            options={{headerShown:false}} />
          <Stack.Screen 
            name="SignUp" 
            component={SignUp}
            options={{headerShown:false}} />
          <Stack.Screen 
            name="SignUpVerification"
            component={SignUpVerification}
            options={{headerShown:false}} />
          <Stack.Screen 
            name="AccountVerified"
            component={AccountVerified}
            options={{headerShown:false}} />
          <Stack.Screen 
            name="ResetPassword"
            component={ResetPassword}
            options={{headerShown:false}} />
          <Stack.Screen 
            name="ForPassVerification"
            component={ForPassVerification}
            options={{headerShown:false}} />
          <Stack.Screen 
            name="NewPassword"
            component={NewPassword}
            options={{headerShown:false}} />
          <Stack.Screen 
            name="PasswordUpdated"
            component={PasswordUpdated}
            options={{headerShown:false}} />
          <Stack.Screen 
            name="MainScreen"
            component={MainScreen}
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
      </NavigationContainer> 
  );
}

