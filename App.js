import React, { useState } from "react"; // с помощью useState будем создавать локальный стейт
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";
import { Todo } from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
    { id: 4, title: "Item 4" },
    { id: 5, title: "Item 5" },
    { id: 6, title: "Item 6" },
    { id: 7, title: "Item 7" },
    { id: 8, title: "Item 8" },
    { id: 9, title: "Item 9" },
  ]); // стейт

  const addTodo = (title) => {
    // возвращаем новый стейт, который состоит из нового элемента и копии прошлого
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title, // ключ и значение совпадают, поэтому можно записать лишь значение
      },
    ]);
  };

  return (
    <View style={{ flex: 1 }}>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({ item }) => {
            return <Todo todo={item} />;
          }}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    flex: 1,
  },
});
