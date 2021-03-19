import * as React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ColorSchemeName } from "react-native";

import BottomTabNavigator from "./BottomTabNavigator";

// screens
import {
  Login,
  Register,
  Profile,
  Embark,
  Debarkation,
  Finalization,
} from "../src/screens";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Embark" component={Embark} />
      <Stack.Screen name="Debarkation" component={Debarkation} />
      <Stack.Screen name="Finalization" component={Finalization} />

      <Stack.Screen name="Bottom" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
