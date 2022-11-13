import React from "react";
import "../stylesheets/todolist.css"


export const ClickableIcons = ({ classname, icons, func }) => {
  return <span onClick={()=>func()} className={classname}>{icons}</span>;
};
