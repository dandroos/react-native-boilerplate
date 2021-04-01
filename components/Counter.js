import React from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { setCount } from "../state/actions";

const Counter = ({ dispatch, count }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 80, marginBottom: 15 }}>{count}</Text>
      <View style={{ flexDirection: "row" }}>
        <Button mode="contained" onPress={() => dispatch(setCount(count - 1))}>
          -
        </Button>
        <View style={{ flexGrow: 0.1 }} />
        <Button mode="contained" onPress={() => dispatch(setCount(count + 1))}>
          +
        </Button>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps)(Counter);
