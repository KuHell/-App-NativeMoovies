import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
  // background-color: ${(props) => props.theme.mainBgColor};
`;

const Title = styled.Text`
  // color: ${(props) => props.theme.textColor};
`;

const Movie = ({ navigation: { navigate } }) => {
  return (
    <Btn
      onPress={() => navigate("Stack", { screen: "Three" })}
      // style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Title>Movie</Title>
    </Btn>
  );
};

export default Movie;
