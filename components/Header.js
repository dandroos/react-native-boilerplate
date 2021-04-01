import React from "react";
import { Platform } from "react-native";
import { Appbar } from "react-native-paper";
import Menu from "./Menu";

const Header = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="DAD Starter" />
      <Menu />
    </Appbar.Header>
  );
};

export default Header;
