import React from "react";
import { Welcome } from "./src/pages/Welcome";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold_Italic,
} from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold_Italic,
  });

  if (!fontsLoaded) return <AppLoading />;
  return <Welcome />;
}
