import React ,{ useState, useEffect, useContext } from 'react';
import ToDoReducer from './reducers/ToDoReducer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Todo from './pages/Todo';
import TodoButton from './components/TodoButton';
import {DarkModeContext, DarkModeProvider} from  './context/DarkModeContext';
import Navbar from './pages/Navbar';
import Page from './pages/Page';

function App() {
  
  useEffect(() => {
    
    // console.log(ToDoReducer);
    return () => {
      
    }
  }, []);
  


  return (
    <div className="App">
      <DarkModeProvider>
        <div className="App-header ">
          
          <Todo/>
        </div>
      </DarkModeProvider>
    </div>
  );
}

export default App;
