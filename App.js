import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { useTheme, Subheading } from "react-native-paper";
import Header from "./components/Header";
import Counter from "./components/Counter";

export default function App() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Header />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Subheading style={{ textAlign: "center" }}>
          This is a simple counter app to get you started quickly!
        </Subheading>
        <Counter />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
