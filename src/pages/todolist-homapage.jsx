import React from "react";
import "../stylesheets/todolist.css";
import { DifferentPages, Items } from "../components/components";
import { useState } from "react";

export const Header = ({
  hideForm,
  todo,
  setTodo,
  todoText,
  setTodoText,
  editMode,
  setEditMode
}) => {
  const addTodo = () => {
    const newTask = {
      id: crypto.randomUUID(),
      item: todoText,
      isComplete: false,
    };
    setTodo([...todo, newTask]);
  };

  return (
    <>
      <h1>To Do List</h1>
      {hideForm ? null : (
        <React.Fragment>
          <input
            type="text"
            id="new-todo-item"
            className="new-todo-item"
            name="todo"
            placeholder="Add Task . . ."
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          {editMode ? (
            <button
              className="add-todo-item  update-todo-item"
              onClick={() => {
                // const FindWhatToUpdate = todo.find(
                //   (e) => e._id === todos._id
                // );
                // const updateTaskTitle = todo.map((e) =>
                //   e._id === todos._id ? FindWhatToUpdate : e
                // );
                // setTodo(updateTaskTitle)
                setEditMode(false)
              }}
            >
              Update
            </button>
          ) : (
            <button
              id="add-todo-item"
              className="add-todo-item"
              onClick={addTodo}
            >
              Add
            </button>
          )}
        </React.Fragment>
      )}
    </>
  );
};

export const Container = ({ todo, setTodo, isLoading }) => {
  const [todoText, setTodoText] = useState("");
  const [editMode, setEditMode] = useState(false);
  return (
    <section id="main">
      <Header
        todo={todo}
        setTodo={setTodo}
        todoText={todoText}
        setTodoText={setTodoText}
        editMode={editMode}
      />
      <DifferentPages />
      <Items 
        isLoading={isLoading} 
        todo={todo}
        setTodo={setTodo}
        setTodoText={setTodoText}
        editMode={editMode}
        setEditMode={setEditMode}
      />
    </section>
  );
};

const TotalContainer = ({ todo, setTodo, isLoading }) => {
  return (
    <div id="container">
      <Container isLoading={isLoading} todo={todo} setTodo={setTodo} />
    </div>
  );
};
export default TotalContainer;
