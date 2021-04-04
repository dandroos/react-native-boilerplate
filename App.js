import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme, Subheading } from "react-native-paper";
import Header from "./components/Header";
import Counter from "./components/Counter";
import { setCount } from "./state/actions";

const App = ({ dispatch }) => {
  const theme = useTheme();

  useEffect(() => {
    const getSavedData = async () => {
      const savedData = await AsyncStorage.getItem("counter");
      savedData
        ? dispatch(setCount(JSON.parse(savedData)))
        : dispatch(setCount(0));
    };
    getSavedData();
  }, []);
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
};

export default connect()(App);
