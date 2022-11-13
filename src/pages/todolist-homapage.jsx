import React from "react";
import "../stylesheets/todolist.css";
import { Container } from "../components/Container";



const TotalContainer = ({ todo, setTodo, isLoading, fetchTodos }) => {
  return (
    <div id="container">
      <Container
        isLoading={isLoading}
        todo={todo}
        setTodo={setTodo}
        fetchTodos={fetchTodos}
      />
    </div>
  );
};
export default TotalContainer;
