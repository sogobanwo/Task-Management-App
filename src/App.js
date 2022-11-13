// import logo from './logo.svg';
import TotalContainer from "./pages/todolist-homapage"
import React, { useEffect, useState } from "react"
import './stylesheets/todolist.css'
import { Routes, Route} from "react-router-dom";
import { DetailsPage } from "./pages/todoDetails";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [todo, setTodo] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const fetchTodos= async ()=>{
    const response = await axios.get("http://localhost:8080/todos")
    setTodo(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTodos();
  }, []);
  

  return (
    <React.Fragment>
    <ToastContainer />
    <Routes>
      <Route index element= {< TotalContainer isLoading={isLoading} todo={todo} setTodo={setTodo} fetchTodos={fetchTodos}/>} />
      <Route path="/details/:id" element= {< DetailsPage todo={todo}/>} />
    </Routes>
    </React.Fragment>
    // <TotalContainer todo={todo} />
  );
}

export default App;
