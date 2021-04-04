import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, Button } from "react-native-paper";
import { setCount } from "../state/actions";

const Counter = ({ dispatch, count }) => {
  const handleClick = (type) => {
    switch (type) {
      case "add":
        dispatch(setCount(count + 1));
        break;
      case "minus":
        dispatch(setCount(count - 1));
        break;
    }
  };

  useEffect(() => {
    if (typeof count === "number") {
      AsyncStorage.setItem("counter", JSON.stringify(count), (err) => {
        if (err) {
          console.error(err);
        }
        console.log(`Successfully updated stored count to ${count}`);
      });
    }
  }, [count]);

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 80, marginBottom: 15 }}>{count}</Text>
      <View style={{ flexDirection: "row" }}>
        <Button mode="contained" onPress={() => handleClick("minus")}>
          -
        </Button>
        <View style={{ flexGrow: 0.1 }} />
        <Button mode="contained" onPress={() => handleClick("add")}>
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
