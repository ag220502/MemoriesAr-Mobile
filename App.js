import { NavigationContainer } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import React,{useState} from 	'react';
import { AuthProvider } from './src/screens/context/AuthContext.js';
import AppNav from './src/screens/navigation/AppNav.js';
import ViewScrap from './src/screens/AccountScreens/ViewScreens/ViewScrap.js';
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
		// <ViewScrap/>
		// <ChangeVisibility/>
		// <BottomModal/>
		// <Comments/>
		<AuthProvider>
			{
				connection ? 
				<NavigationContainer>
					<AppNav/>
				</NavigationContainer> 
				: null
			}
		</AuthProvider>
	);
}

