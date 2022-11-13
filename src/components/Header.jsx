import React from "react";
import "../stylesheets/todolist.css";
import { ToastContainer } from 'react-toastify';
import { AddTodoForm } from "./Forms/AddTodoForm";
import { EditTodoForm } from "./Forms/EditTodoForm";

export const Header = ({
  hideForm,
  editMode,
  setEditMode,
  todoToUpdate,
  fetchTodos,
}) => {
  

  return (
    <>
      <h1>Manage your task seamlessly</h1>
      {/* Conditionally rendering input form on the UI */}
      {hideForm ? null : (
        <React.Fragment>
          <ToastContainer />
          {editMode ? <EditTodoForm  todoToUpdate={todoToUpdate} setEditMode={setEditMode} fetchTodos={fetchTodos}/> : <AddTodoForm fetchTodos={fetchTodos} /> }
          
        </React.Fragment>
      )}
    </>
  );
};