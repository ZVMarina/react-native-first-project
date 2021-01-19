import React from "react"; // импортируем react
import { View, Text, StyleSheet } from "react-native"; // импортируем набор компонентов из react native

export const Navbar = ({ title }) => {
  // экспортируем компонент Navbar, который будем использовать в шаблоне
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#3949ab",
    paddingBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
