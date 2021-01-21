import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState(""); // стейт

  /* при нажатии на "Добавить" срабатывает слушатель onPress, 
  который вызывает функцию pressHandler */
  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      // error
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue} // получаем текущее значение импута
        value={value} // значение для тектового инпута
        placeholder="Введите название дела..."
      />
      <Button title="Добавить" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
});
