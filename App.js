import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/screens/context/AuthContext.js';
import AppNav from './src/screens/navigation/AppNav.js';

export default function App() {
	return (
		<AuthProvider>
			<NavigationContainer>
				<AppNav/>
			</NavigationContainer> 
		</AuthProvider>
	);
}

