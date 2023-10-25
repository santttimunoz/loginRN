import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import  HomeScreen  from './HomeScreen'
import  Chat  from './Chat';
import LoginScreen from './LoginScreen'
import Settings from './Settings';
import { MaterialIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
     screenOptions={{
      headerShown:false,
      tabBarActiveBackgroundColor:'gray',
      tabBarInactiveTintColor:'green',
      tabBarActiveTintColor:'purple'}}>
      <Tab.Screen name="Home" component={HomeScreen} 
       options={{tabBarIcon:()=>(<MaterialIcons name='home' size='22' color='white'/>)}} 
      />
      <Tab.Screen name="Settings" component={Settings} 
      options={{tabBarIcon:()=>(<MaterialIcons name='settings' size='22' color='white'/>)}}
      />
      <Tab.Screen name="Chat" component={Chat} 
      options={{tabBarIcon:()=>(<MaterialIcons name='settings' size='22' color='white'/>)}}
      />
      <Tab.Screen name="LoginScreen" component={LoginScreen} options={{tabBarStyle:{display:'none'}}}/>
    </Tab.Navigator>
  );
}