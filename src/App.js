import React from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import { useSelector } from "react-redux";

const App = () => {
  const allTodos = useSelector((state) => state.todos)
  return (
    <>
      <AddTodo />
      <TodoList todos={allTodos} />
    </>
  );
};
export default App;
 