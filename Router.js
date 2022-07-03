import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/Home/Home";
import Login from "./src/components/Login/Login";
import Signup from "./src/components/Signup/Signup";
import DrawerMain from "./src/components/Dashboard/Navbar/DrawerMain";
import AddBankAccount from "./src/components/BankAccount/AddBankAccount";
import AddNewSlip from "./src/components/Dashboard/AddNewSlip";
import BankAccount from "./src/components/Dashboard/BankAccount";
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Drawer" component={DrawerMain} />
        <Stack.Screen name="Add Bank Account" component={AddBankAccount} />
        <Stack.Screen name="Add New Slip" component={AddNewSlip} />
        <Stack.Screen name="Bank Account" component={BankAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
