import React from "react";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import store from "./state/store";
import AppLoading from "expo-app-loading";
import {
  DefaultTheme,
  configureFonts,
  Provider as ThemeProvider,
} from "react-native-paper";
import { useFonts } from "expo-font";
import { Comfortaa_500Medium } from "@expo-google-fonts/comfortaa";
import App from "./App";

const Main = () => {
  const [loaded] = useFonts({
    appFont: Comfortaa_500Medium,
  });

  const fontConfig = {
    default: {
      regular: {
        fontFamily: "appFont",
        fontWeight: "normal",
      },
    },
  };

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#536162",
      accent: "#co6014",
      background: "#f3f4ed",
    },
    fonts: configureFonts(fontConfig),
  };

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  );
};

registerRootComponent(Main);
