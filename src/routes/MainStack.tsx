import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const AuthTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen name="AuthTabs" component={AuthTabs} options={{ title: 'Music App', headerShown: false }}/> 
       <Stack.Screen name="Home" component={Home} options={{ title: 'Music App', headerShown: false  }}/>
    </Stack.Navigator>
  );
};

export default MainStack;
