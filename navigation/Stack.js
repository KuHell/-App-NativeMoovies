import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";

const ScreenOne = ({ navigation: { navigate } }) => (
  <>
    <TouchableOpacity onPress={() => navigate("Two")}>
      <Text>Go Two</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigate("Three")}>
      <Text>Go Three</Text>
    </TouchableOpacity>
  </>
);

const ScreenTwo = ({ navigation: { navigate, goBack, setOptions } }) => (
  <>
    <TouchableOpacity onPress={() => navigate("Three")}>
      <Text>Go Three</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => goBack()}>
      <Text>Go Back</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => setOptions({ title: "Hello" })}>
      <Text>Change Title</Text>
    </TouchableOpacity>
  </>
);

const ScreenThree = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("One")}>
    <Text>Go One</Text>
  </TouchableOpacity>
);

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator
    screenOptions={{
      // presentation: "modal",
      animation: "fade",
      headerTintColor: "black",
      headerBackTitleVisible: false,
    }}
  >
    <NativeStack.Screen name="One" component={ScreenOne} />
    <NativeStack.Screen name="TwoT" component={ScreenTwo} />
    <NativeStack.Screen
      options={{ presentation: "modal" }}
      name="Three"
      component={ScreenThree}
    />
  </NativeStack.Navigator>
);

export default Stack;
