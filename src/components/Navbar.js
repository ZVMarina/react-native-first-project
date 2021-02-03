import React from "react"; // импортируем react
import { View, StyleSheet } from "react-native"; // импортируем набор компонентов из react native
import { THEME } from "../theme";
import { AppTextBold } from "../components/ui/AppTextBold";

export const Navbar = ({ title }) => {
  // экспортируем компонент Navbar, который будем использовать в шаблоне
  return (
    <View style={styles.navbar}>
      <AppTextBold>{title}</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: THEME.MAIN_COLOR,
    paddingBottom: 10,
  },
});
