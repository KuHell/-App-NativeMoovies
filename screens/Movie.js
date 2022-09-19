import React from "react";
import styled from "styled-components/native";
// import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import tw from "tailwind-react-native-classnames";
import Swiper from "react-native-web-swiper";
import { ScrollView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

const Container = styled.ScrollView``;
const View = styled.View`
  flex: 1;
`;
const { height: Screen_HEIGHT } = Dimensions.get("window");

const Movie: React.FC<NativeStackScreenProps<any, "Movie">> = () => (
  <Container>
    <Swiper containerStyle={{ width: "100%", height: Screen_HEIGHT / 4 }}>
      <View style={{ backgroundColor: "red" }}></View>
      <View style={{ backgroundColor: "blue" }}></View>
      <View style={{ backgroundColor: "red" }}></View>
      <View style={{ backgroundColor: "blue" }}></View>
    </Swiper>
  </Container>
);

export default Movie;
