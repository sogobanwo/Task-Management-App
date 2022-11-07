import React from "react";
import { useParams } from "react-router-dom";
import { DifferentPages } from "../components/components";
import "../stylesheets/todolist.css";
import { Header } from "./todolist-homapage";
import { useState, useEffect } from "react";
import axios from "axios";
import { Loader } from "../components/loader";

export const DetailsPage = () => {
  const param = useParams();
  const [ todos, setTodos ] = useState({})
  const [isFetching, setIsFetching] = useState(true)
  
  const fetchTodo= async ()=>{
    const response = await axios.get(`http://localhost:8080/todos/${param.id}`)
    setTodos(...response.data)
    setIsFetching(false)
  }

  useEffect(() => {
    fetchTodo();
  }, []);

  const { id, item, isCompleted } = todos


  return (
    <section id="main">
      <Header hideForm />
      <DifferentPages />
      {isFetching && <Loader/>}

      {!isFetching &&
      <>
      <h2>{item}</h2>
      <h4>{id}</h4>
      <h6>{isCompleted ? "Done": "Pending"}</h6>
      </>
    }
    </section>
  );
};
