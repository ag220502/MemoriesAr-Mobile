import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/screens/context/AuthContext.js';
import AppNav from './src/screens/navigation/AppNav.js';
import FriendRequest from './src/screens/AccountScreens/Request/FriendRequest.js';
import AllFriends from './src/screens/AccountScreens/ProfileScreens/AllFriends.js';
export default function App() {
	return (
		<AllFriends/>
		// <AuthProvider>
		// 	<NavigationContainer>
		// 		<AppNav/>
		// 	</NavigationContainer> 
		// </AuthProvider>
	);
}

