import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";

const ScreenOne = ({ navigation: { navigate } }) => (
  <>
    <TouchableOpacity onPress={() => navigate("Two")}>
      <Text>Go Two</Text>
    </TouchableOpacity>
  </>
);

const ScreenTwo = ({ navigation: { navigate, goBack, setOptions } }) => (
  <>
    <TouchableOpacity onPress={() => navigate("Three")}>
      <Text>Go Three</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigate("Tabs", { screen: "Tv" })}>
      <Text>Go Tv</Text>
    </TouchableOpacity>
  </>
);

const ScreenThree = ({ navigation: { navigate } }) => (
  <>
    <TouchableOpacity onPress={() => navigate("One")}>
      <Text>Go One</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigate("Tabs", { screen: "Search" })}>
      <Text>Go to search</Text>
    </TouchableOpacity>
  </>
);

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator
    screenOptions={{
      headerTintColor: "black",
      headerBackTitleVisible: false,
    }}
  >
    <NativeStack.Screen name="One" component={ScreenOne} />
    <NativeStack.Screen name="Two" component={ScreenTwo} />
    <NativeStack.Screen name="Three" component={ScreenThree} />
  </NativeStack.Navigator>
);

export default Stack;
