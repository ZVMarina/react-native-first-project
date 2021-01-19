import React from "react"; // импортируем react
import { StyleSheet, Text, View } from "react-native"; // импортируем набор компонентов из react native
import { Navbar } from "./src/Navbar"; //

export default function App() {
  // экспортируем компонент App
  return (
    <View style={styles.container}>
      <Navbar title="Todo App" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
