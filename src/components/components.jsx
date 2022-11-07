import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/todolist.css"
import { Loader } from "./loader";


export const DifferentPages =()=>{
  return(
    <ul className="totalLinks">
      <Link to='/'>  Home </Link>
      <Link to='/'>  Contact Us  </Link>
    </ul>
  
  )
}

export const ClickableIcons = ({ classname, icons, func }) => {
  return <span onClick={()=>func()} className={classname}>{icons}</span>;
};

export const ListItems = ({ todos, todo, setTodo, setTodoText, setEditMode }) => {
  const { id, item, isComplete} = todos
  const deleteTodo = () => {
    const updatedTodoDB = todo.filter((sogo) => sogo.id !== todos.id );
    setTodo(updatedTodoDB)
  };

  const toggleComplete =()=>{
  const findCheckbox = todo.find((e) => e.id === todos.id);
  if (findCheckbox.isComplete === true) {
    findCheckbox.isComplete = false;
  } else {
    findCheckbox.isComplete = true;
  }
  const dbUpdate = todo.map((e) => (e.id === todos.id ? findCheckbox : e));
  setTodo(dbUpdate)
};

function updateTodoList() {
  setEditMode(true)
  const FindWhatToUpdate = todo.find(
    (e) => e.id === todos.id
  );

  setTodoText (FindWhatToUpdate.item)
}
 

  return (
    <li className= {`new  ${isComplete ? "markComplete" : undefined}`} >
      {item} 
      <span>
        <Link to={`/details/${id}`} className="view" >V</Link> 
        <ClickableIcons classname="toggle" icons="T" func={toggleComplete}/>
        <ClickableIcons classname="edit" icons="E" func={updateTodoList} />
        <ClickableIcons classname="close" icons="X" func={deleteTodo}/>
      </span>
    </li>
  );
};

export const Items = ({ todo, setTodo, setTodoText, editMode, setEditMode, isLoading }) => {
  
  return (
    <section>
      {isLoading && <Loader/>}
      {!isLoading && todo.length === 0 && <p>No record</p>}
      <ul id="listContainer" className="todo-list">
        {todo.map((todos) => {
          return <ListItems  key={todos.id} todo={todo} setTodo={setTodo} todos={todos}  setTodoText={setTodoText} editMode={editMode}
          setEditMode={setEditMode} />;
        })}
      </ul>
    </section>
  );
};
