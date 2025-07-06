import React from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import { useSelector } from "react-redux";
import VisualTypes from "./Components/VisualTypes";
import visualTypesConstants from "./Constants/visualTypes";

const App = () => {
  const allTodos = useSelector((state) => state.todos)
  const filterType = useSelector((state) => state.filter)
  
  const filterTodos = () => {
    if (filterType === visualTypesConstants.SHOW_ALL) {
      return allTodos
    } else if (filterType === visualTypesConstants.SHOW_COMPLETED) {
      return allTodos.filter((todo) => todo.completed)
    } else if (filterType === visualTypesConstants.SHOW_ACTIVE) {
      return allTodos.filter((todo) => !todo.completed)
    }
  }
  return (
    <>
      <AddTodo />
      <TodoList todos={filterTodos()} />
      <VisualTypes />
    </>
  );
};
export default App;
 