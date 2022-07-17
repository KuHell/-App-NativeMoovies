import AppLoading from "expo-app-loading";
import React, { useState } from "react";

export default function App() {
  const [ready, setReady] = useState(false);
  if (!ready) {
    return <AppLoading />;
  }
  return null;
}
