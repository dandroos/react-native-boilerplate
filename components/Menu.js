import React from "react";
import { connect } from "react-redux";
import { Platform } from "react-native";
import { Appbar, Menu as PaperMenu } from "react-native-paper";
import { setCount, setShowMenu } from "../state/actions";

const Menu = ({ dispatch, isOpen }) => {
  const moreIcon = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
  return (
    <PaperMenu
      visible={isOpen}
      onDismiss={() => dispatch(setShowMenu(false))}
      anchor={
        <Appbar.Action
          icon={moreIcon}
          onPress={() => dispatch(setShowMenu(true))}
        />
      }
    >
      <PaperMenu.Item
        title="Reset"
        onPress={() => {
          dispatch(setCount(0));
          dispatch(setShowMenu(false));
        }}
      />
    </PaperMenu>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.showMenu,
});

export default connect(mapStateToProps)(Menu);
