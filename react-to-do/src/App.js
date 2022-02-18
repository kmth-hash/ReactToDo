import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [todos, settodos] = useState([]);
  const [todo, settodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newtodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };

    settodos([...todos].concat(newtodo));
    settodo("");
  }


  function deletefn(idVal) {
    console.log(idVal);
    const otherValues = [...todos].filter((itm)=>itm.id!==idVal);

    settodos(otherValues);

  }

  function updateTodo(idVal) {
    const updatedTodos = [...todos].map((itm)=>{
      if(itm.id===idVal)
      {
        itm.completed = !itm.completed
      }
      return itm
    });

    settodos(updatedTodos);
    
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => settodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Addd Todo</button>
      </form>

      {todos.map((itm) => (
        <>
        <div key={itm.id}>{itm.text}</div>
        <button onClick={()=> deletefn(itm.id)}>Delete Todo</button>
        <input type="checkbox" onClick={()=>updateTodo(itm.id)}  checked={itm.completed}/>
        </>
      ))}
    </div>
  );
}

export default App;
