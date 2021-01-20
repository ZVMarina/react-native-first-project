import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export const AddTodo = (onSubmit) => {

  // при событии onPress будет вызываться функция pressHandler
  const pressHandler = () => {
    onSubmit('Test Todo')
  }

  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title="Добавить" onPress={pressHandler}/>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "70%", // чтобы инпут занимал 70% от всего блока
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
});
