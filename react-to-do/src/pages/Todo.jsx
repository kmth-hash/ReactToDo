import React, {useContext} from 'react';
import { DarkModeContext } from '../context/DarkModeContext';


function Todo() {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

  return (
    <div className={darkMode ? `container bg-dark text-white` : `container bg-white text-dark` } >
      Todo
     <button onClick={toggleDarkMode}></button> 
     </div>
  )
}

export default Todo