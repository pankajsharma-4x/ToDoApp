
import  { useState,useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from './components/TodoList';

function App() {
 
  const [inputText ,setInputText] = useState('');
  const [todos ,setTodos] = useState([]);
  const [status , setStatus] = useState("all");
  const [filteredTodos , setFilteredTodos] = useState([]);
  
  //RUN Once when the app start 
  useEffect(() => {
    getLocalTodos();
    },[]);

   //use effect
   useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos,status]);

  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo =>todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo =>todo.completed === false))
        break; 
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  //save to local host  code 
  const saveLocalTodos =() =>{
   localStorage.setItem('todos',JSON.stringify(todos));
  };
  const getLocalTodos = () =>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
     let todoLocal =JSON.parse(localStorage.getItem("todos"));
     setTodos(todoLocal);
  }
  }
  return (
    <div>
    <header>
     <h1>To Do List</h1>
    </header>
     <Form 
       todos = {todos}                //Declaring the props 
       setTodos = {setTodos}          //Declaring the props 
       inputText = {inputText}        //Declaring the props 
       setInputText = {setInputText}  //Declaring the props 
       setStatus = {setStatus}
     />
     <TodoList 
       setTodos = {setTodos}
       todos = {todos}
       filteredTodos ={filteredTodos}
     />
    </div>
  );
}

export default App;
