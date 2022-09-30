import React, { useEffect, useState } from "react";
// import styled from "styled-components/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import tw from "tailwind-react-native-classnames";
import Swiper from "react-native-swiper";
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
    <ScrollView bounces={false}>
      <Swiper
        horizontal
        loop
        autoplay
        autoplay
        autoplaytimeout={3.5}
        autoplaytimeout={3.5}
        showsButtons={false}
        showsButtons={false}
        showsPagination={false}
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
                <View style={tw`flex-row h-full justify-center items-center`}>
                  <Image
                    style={tw`w-28 h-40 rounded-md`}
                    source={{ uri: makeImgPath(movie.backdrop_path) }}
                  />
                  <View style={tw`w-5/12 ml-4`}>
                    <Text style={tw`text-base font-bold text-black`}>
                      {movie.original_title}
                    </Text>
                    <Text>{movie.overview}</Text>
                  </View>
                </View>
              </BlurView>
            </View>
          );
        })}
      </Swiper>
    </ScrollView>
  );
};

export default Movie;
