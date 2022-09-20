import React, { useEffect, useState } from "react";
// import styled from "styled-components/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import tw from "tailwind-react-native-classnames";
import Swiper from "react-native-web-swiper";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import { makeImgPath } from "../utils";
import { BlurView, VibrancyView } from "@react-native-community/blur";

const API_KEY = "1224c35a1ddd3e3ddd3fdd67d6b5aace";

const { height: Screen_HEIGHT } = Dimensions.get("window");
const Movie: React.FC<NativeStackScreenProps<any, "Movie">> = () => {
  const [loading, setLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState([]);
  const getNowPlaying = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`
      )
    ).json();
    setNowPlaying(results);
    setLoading(false);
  };
  useEffect(() => {
    getNowPlaying();
  }, []);
  return loading ? (
    <View style={tw`flex-1 justify-center items-center`}>
      <ActivityIndicator />
    </View>
  ) : (
    <ScrollView>
      <Swiper
        loop
        timeout={3.5}
        controlsEnabled={false}
        containerStyle={{ width: "100%", height: Screen_HEIGHT / 4 }}
      >
        {nowPlaying.map((movie) => {
          return (
            <View style={tw`flex-1 justify-center items-center`} key={movie.id}>
              <Image
                style={tw`absolute w-full h-full`}
                source={{ uri: makeImgPath(movie.backdrop_path) }}
              />
              <BlurView
                intensity={80}
                blurType="light"
                style={tw`absolute w-full h-full`}
              >
                <Text>{movie.original_title}</Text>
              </BlurView>
            </View>
          );
        })}
      </Swiper>
    </ScrollView>
  );
};

export default Movie;
