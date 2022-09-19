import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movie from "../screens/Movie";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Movie"
      screenOptions={{
        tabBarActiveTintColor: "gold",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen name="Movie" component={Movie} />
      <Tab.Screen
        name="Tv"
        component={Tv}
        options={{
          // headerTitleStyle: { color: "gold" },
          headerLeft: () => (
            <View>
              <Text>hi</Text>
            </View>
          ),
          headerRight: () => (
            <View>
              <Text>hi</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default Tabs;
