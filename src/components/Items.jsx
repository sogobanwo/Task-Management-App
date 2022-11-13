import React from "react";
import "../stylesheets/todolist.css"
import { Loader } from "./loader";
import { EachItem } from "./EachItem";

export const Items = ({ todo, setTodo, settodoToUpdate, editMode, setEditMode, isLoading, fetchTodos }) => {
  
  return (
    <section>
      {/* displaying a loader when fetching data */}
      {isLoading && <Loader/>}
      {!isLoading && todo.length === 0 && <p>No record</p>}


      <ul id="listContainer" className="todo-list">
      {/* Rendering each list item */}

        {todo.map((todos) => {
          return <EachItem  key={todos.id} todo={todo} setTodo={setTodo} todos={todos}  settodoToUpdate={settodoToUpdate} editMode={editMode} setEditMode={setEditMode} fetchTodos={fetchTodos}/>;
        })}
      </ul>
    </section>
  );
};