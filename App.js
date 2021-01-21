import React, { useState } from "react"; // с помощью useState будем создавать локальный стейт
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";
import { Todo } from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([]); // стейт

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

  // метод для удаления
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View style={{ flex: 1 }}>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
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
