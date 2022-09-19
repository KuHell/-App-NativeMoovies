import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Movie = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity
      onPress={() => navigate("Stack", { screen: "Three" })}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Movie good boy</Text>
    </TouchableOpacity>
  );
};

export default Movie;
