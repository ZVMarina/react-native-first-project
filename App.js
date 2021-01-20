import React, {useState} from "react"; // с помощью useState будем создавать локальный стейт
import { StyleSheet, Text, View } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";

export default function App() {

  const [todos, setTodos] = useState([]) // стейт

  // ф-я изменяющая стейт
  // title получаем из формы
  const addTodo = (title) => {
     
    //формируем новый элемент
    /* const newTodo = {
      id: Date.now().toString(),
      title: title
    } */

    /* setTodos(todos.concat([newTodo])) */ // первый способ с изменением существующего стейта

/*     setTodos((prevTodos) => { // prevTodos - предыдущее состояние стейта
      return [
        ...prevTodos,
        newTodo
      ]
    }) */

    // возвращаем новый стейт, который состоит из нового элемента и копии прошлого
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title // ключ и значение совпадают, поэтому можно записать лишь значение
      },
    ]); 

  }
  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
