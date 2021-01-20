import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";
//for navigation
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
//////////////////////////////

import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Achta from "./Screens/Achta";

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator initialRouteName="Login">
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{
        headerTitle: "Login",
      }}
    />

    {/* <AuthStack.Screen name="SignUp" component={SignUp} /> */}
  </AuthStack.Navigator>
);

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: "Home",
      }}
    />
    <RootStack.Screen
      name="Achta"
      component={Achta}
      options={{
        headerTitle: "Achta",
      }}
    />
  </RootStack.Navigator>
);

export default function App() {
  const [token, setToken] = useState("jghjgjhgjgg");

  SecureStore.setItemAsync("token", "blablabla");

  console.log(SecureStore.getItemAsync("token"));

  return (
    <NavigationContainer>
      {token ? <RootStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}
