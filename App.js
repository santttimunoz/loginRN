import { StyleSheet, Text, View } from 'react-native';
import {styles} from './assets/styles/allstyles'
import LoginScreen from './components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import Settings from './components/Settings';
import  Chat  from './components/Chat';
import MyTabs from './components/myTab';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='MyTab'
      >
        <Stack.Screen name="MyTabs" component={MyTabs} options={{title:'menu'}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{title:'inicio de sesion'}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'inicio de sesion'}}/>
        <Stack.Screen name="Chat" component={Chat} options={{title:'Chat'}}/>
        <Stack.Screen name="Settings" component={Settings} options={{title:'Configuracion'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


