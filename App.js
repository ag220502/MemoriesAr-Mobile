import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/screens/context/AuthContext.js';
import AppNav from './src/screens/navigation/AppNav.js';
import BottomModal from './src/components/BottomModal.js';
export default function App() {
	return (
		// <BottomModal/>
		<AuthProvider>
			<NavigationContainer>
				<AppNav/>
			</NavigationContainer> 
		</AuthProvider>
	);
}

