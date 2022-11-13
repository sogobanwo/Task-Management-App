import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../stylesheets/todolist.css"
import { ClickableIcons } from "./ClickableIcons";
import { FaCheckSquare, FaEye, FaPen, FaSlidersH, FaToggleOn, FaTrash, FaTrashAlt } from "react-icons/fa";
const Swal = require('sweetalert2')



export const EachItem = ({ todos, todo, setTodo, settodoToUpdate, setEditMode, fetchTodos }) => {
  const { id, item, isCompleted} = todos

  // Delete Task Function
  const deleteTodo = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then (async (result) => {
      if (result.isConfirmed) {
        await axios.post(`http://localhost:8080/delete/${id}`)
        const updatedTodoDB = todo.filter((sogo) => sogo.id !== id );
        setTodo(updatedTodoDB)
        Swal.fire(
          'Deleted!',
          'Your Task has been deleted.',
          'success'
        )
      }
    })
  };

  // Toggle task function
  const toggleComplete =async ()=>{
    toast.info("Updating task status, wait a moment",{
      position: "top-center"
    })
    await axios.patch(`http://localhost:8080/todos/${id}`)
    fetchTodos();
    toast.success("Task status Upadated",{
      position: "top-center"
    })

    // Method 2
  // const findCheckbox = todo.find((e) => e.id === todos.id);
  // if (findCheckbox.isComplete === true) {
  //   findCheckbox.isComplete = false;
  // } else {
  //   findCheckbox.isComplete = true;
  // }
  // const dbUpdate = todo.map((e) => (e.id === todos.id ? findCheckbox : e));
  // setTodo(dbUpdate)
};

// EditMode change Button
function updateTodoForm() {
  setEditMode(true)
  const FindWhatToUpdate = todo.find(
    (e) => e.id === todos.id
  );
  settodoToUpdate(FindWhatToUpdate)
  toast("You are in editmode, Edit your task above",
  {
    position: "bottom-center"
  })
}
 

  return (
    // Rendering on the UI
    <li className= {`new  ${isCompleted ? "markComplete" : undefined}`} >
      {item} 
      <span>
        <Link to={`/details/${id}`} className="view" ><FaEye/></Link> 
        <ClickableIcons classname="toggle" icons={<FaCheckSquare />} func={toggleComplete}/>
        <ClickableIcons classname="edit" icons={<FaPen />} func={updateTodoForm} />
        <ClickableIcons classname="close" icons={<FaTrashAlt />} func={deleteTodo}/>
      </span>
    </li>
  );
};