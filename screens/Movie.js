import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";

const Btn = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: blue;
`;

const Movie = ({ navigation: { navigate } }) => {
  return (
    <Btn
      onPress={() => navigate("Stack", { screen: "Three" })}
      // style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Movie</Text>
    </Btn>
  );
};

export default Movie;
