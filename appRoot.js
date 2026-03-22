import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import AddCar from './screens/addcar';
import Settings from './screens/appSettings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from './screens/Dashboard';
import Rewards from './screens/Rewards';

const Tab = createBottomTabNavigator();

const Root = () => {
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
  
          if (route.name === 'Cars') {
            // iconName = focused ? 'home' : 'home-outline';
            iconName = focused ? 'car' : 'car-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Add Car') {
            iconName = focused ? 'car' : 'car-outline';
          } else if (route.name === 'Home') {
            // iconName = focused ? 'shapes' : 'shapes-outline';
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Rewards') {
            iconName = focused ? 'gift' : 'gift-outline';
          } 
  
          return <Ionicons name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {fontSize: 13.7},
        tabBarStyle: {height: 45}
      })}>
        <Tab.Screen name="Home" component={Dashboard}  />
        <Tab.Screen name="Cars" component={Home}  />
        { /* <Tab.Screen name="Add Car" component={AddCar} /> */ }
        <Tab.Screen name="Rewards" component={Rewards} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    );
  };

  export default Root;