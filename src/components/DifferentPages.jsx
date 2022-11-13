import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/todolist.css"

export const DifferentPages =()=>{
  return(
    <ul className="totalLinks">
      <Link to='/'>  Home </Link>
      <Link to='/'>  Contact Us  </Link>
    </ul>
  
  )
}
