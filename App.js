import { NavigationContainer } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import React,{useState} from 	'react';
import { AuthProvider } from './src/screens/context/AuthContext.js';
import AppNav from './src/screens/navigation/AppNav.js';
// import BottomModal from './src/components/BottomModal.js';
// import ChangeVisibility from './src/screens/AccountScreens/SettingsScreen/Privacy/changeVisibility.js';
import Comments from './src/screens/AccountScreens/ViewScreens/Comments.js';
import SelectTheme from './src/screens/AccountScreens/SettingsScreen/Account/SelectTheme.js';
export default function App() {
	const [connection,setConnection] = useState(false)
	const checkConnection = () => {
		NetInfo.fetch().then(state => {
			if(state.isConnected)
			{
				setConnection(true)
			}
			else
			{
				setConnection(false)
			}
		});
	}

	if(!connection)
	{
		checkConnection()
	}
	checkConnection()
	return (
		// <ChangeVisibility/>
		// <BottomModal/>
		<Comments/>
		// <AuthProvider>
		// 	{
		// 		connection ? 
		// 		<NavigationContainer>
		// 			<AppNav/>
		// 		</NavigationContainer> 
		// 		: null
		// 	}
		// </AuthProvider>
	);
}

