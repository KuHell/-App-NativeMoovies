import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import Stack from "./navigation/Stack";
import axios from "axios";
import Root from "./navigation/Root";

export default function App() {
  // useEffect(() => {
  //   const body = {
  //     email: "1234",
  //   };
  //   axios
  //     .post("http://15.165.158.22:7272/api/game/rnTest", body)
  //     .then((result) => {
  //       console.log("result: ", result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
