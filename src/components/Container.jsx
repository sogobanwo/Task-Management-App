import React from "react";
import "../stylesheets/todolist.css";
import { DifferentPages } from "./DifferentPages";
import { Items } from "./Items";
import { useState } from "react";
import { Header } from "./Header";

export const Container = ({ todo, setTodo, isLoading, fetchTodos }) => {
  const [todoToUpdate, settodoToUpdate] = useState("");
  const [editMode, setEditMode] = useState(false);
  return (
    <section id="main">
      <Header
        todo={todo}
        setTodo={setTodo}
        todoToUpdate={todoToUpdate}
        settodoToUpdate={settodoToUpdate}
        editMode={editMode}
        setEditMode={setEditMode}
        fetchTodos={fetchTodos}
      />
      <DifferentPages />
      <Items
        isLoading={isLoading}
        todo={todo}
        setTodo={setTodo}
        settodoToUpdate={settodoToUpdate}
        editMode={editMode}
        setEditMode={setEditMode}
        fetchTodos ={fetchTodos}
      />
    </section>
  );
};