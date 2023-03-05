import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/screens/context/AuthContext.js';
import AppNav from './src/screens/navigation/AppNav.js';
import FriendRequest from './src/screens/AccountScreens/Request/FriendRequest.js';
export default function App() {
	return (
		<FriendRequest/>
		// <AuthProvider>
		// 	<NavigationContainer>
		// 		<AppNav/>
		// 	</NavigationContainer> 
		// </AuthProvider>
	);
}

