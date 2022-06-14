import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import ToDoItem from "./ToDoItem";
import "./todo.css";

function Todo() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    
    <div  className={
           darkMode
             ? `container todo-container bg-dark text-white`
             : `container todo-container bg-white text-dark`
         }>
           <h3 className="todo-header">TODO</h3>
           <br />
           <div className="todo-newTodo">
            <input type="text" className="todo-input " placeholder="Type something ?"/>
           </div>
           <div className="todo-items">
             <ToDoItem />
             <ToDoItem />
             <ToDoItem />
             <ToDoItem />
             <ToDoItem />
             <ToDoItem />
           </div>
           <div className="d-flex justify-content-around">
              <span>5 Items left</span>
              <span>All</span>
              <span>Active</span>
              <span>Completed</span>
              <span>Clear Completed</span>
           </div>
    </div>
  );
}

export default Todo;
