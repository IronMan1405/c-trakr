import React from 'react';
import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Main from './main';
import AddCar from './screens/addcar';
import { MyListProvider } from './MyListContext';
import Toast from 'react-native-toast-message';
import CarData from './screens/cardata';
import Root from './appRoot';
import Signin from './screens/Signin';
import Signup from './screens/Signup';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <MyListProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name='Main' component={Main}></Stack.Screen> */}
          <Stack.Screen name='Sign In' component={Signin}></Stack.Screen>
          <Stack.Screen name='Sign Up' component={Signup}></Stack.Screen>
          <Stack.Screen name='Root' component={Root} options={{headerShown: false}} ></Stack.Screen>
          <Stack.Screen name='Home' component={Home}></Stack.Screen>
          <Stack.Screen name='Add Car' component={AddCar}></Stack.Screen>
          <Stack.Screen name='Car Details' component={CarData}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <Toast/>
    </MyListProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
