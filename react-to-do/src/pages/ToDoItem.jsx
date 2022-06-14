import React from "react";
import './todo.css';

function ToDoItem() {
  return (
    <div className="d-flex todo-Item justify-content-between">
      <div className="todo-icon-start">
        <i className="bi bi-circle todo-icon"></i>
      </div>
      <div className="todo-text">
        <h5>Currently working on this </h5>
      </div>
      <div className="todo-icon-close">
        <i className="bi bi-x-lg todo-icon"></i>
      </div>
    </div>
  );
}

export default ToDoItem;
