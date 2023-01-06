import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/screens/LoginScreens/Welcome.js'
import SignIn from './src/screens/LoginScreens/SignIn.js';
import SignUp from './src/screens/LoginScreens/SignUp.js';
import SignUpVerification from './src/screens/LoginScreens/SignUpVerification/SignUpVerification.js'
import AccountVerified from './src/screens/LoginScreens/SignUpVerification/AccountVerified.js'
import FirstScreen from './src/screens/LoginScreens/FirstScreen.js'
import ForPassVerification from './src/screens/LoginScreens/ForgetPassword/ForPassVerification.js'
import NewPassword from './src/screens/LoginScreens/ForgetPassword/NewPassword.js'
import PasswordUpdated from './src/screens/LoginScreens/ForgetPassword/PasswordUpdated.js'
import ResetPassword from './src/screens/LoginScreens/ForgetPassword/ResetPassword.js'
import MainScreen from './src/screens/AccountScreens/MainScreen.js';
import CreateScreen from './src/screens/AccountScreens/CreateScreens/CreateScreen.js'
import MenuScreen from './src/screens/AccountScreens/MenuScreens/MenuScreen.js'
import ProfileScreen from './src/screens/AccountScreens/ProfileScreens/ProfileScreen.js'
import SearchScreen from './src/screens/AccountScreens/SearchScreens/SearchScreen.js'
import ChatScreen from './src/screens/AccountScreens/ChatScreens/ChatScreen.js';
import UserChatScreen from './src/screens/AccountScreens/ChatScreens/UserChatScreen.js';

import EditProfile from './src/screens/AccountScreens/ProfileScreens/EditProfile.js';
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
        <Stack.Navigator>
          <Stack.Screen 
            name="Welcome" 
            component={Welcome}
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
            name="SearchScreen"
            component={SearchScreen}
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
        </Stack.Navigator>
      </NavigationContainer> 
  );
}

