import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home/Home';
import Login from './src/components/Login/Login';
import Signup from './src/components/Signup/Signup';
import DrawerMain from './src/components/Dashboard/Navbar/DrawerMain';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={Home}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Drawer" component={DrawerMain} />

              </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router