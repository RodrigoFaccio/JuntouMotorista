import * as React from "react";
import {
  Ionicons,
  Entypo,
  Feather,
  Foundation,
  MaterialIcons,
} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { color } from "../src/constants";

// Screens
import { Home, Finance } from "../src/screens";

const BottomTab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator(props: any) {
  return (
    <BottomTab.Navigator
      // shifting={false}
      labeled={false}
      activeColor={color.white}
      inactiveColor={color.white}
      barStyle={{
        backgroundColor: color.button,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        style={{ marginBottom: 16 }}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon3 name="home" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Financeiro"
        component={Finance}
        style={{ marginBottom: 16 }}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon2 name="attach-money" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon2(props: { name: string; color: string }) {
  return <MaterialIcons size={26} {...props} />;
}

function TabBarIcon3(props: { name: string; color: string }) {
  return <Feather size={26} {...props} />;
}

function TabBarIcon4(props: { name: string; color: string }) {
  return <Foundation size={26} {...props} />;
}
