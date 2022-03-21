import React,{useState} from "react";

// function Form(props) 
function Form({setInputText ,setTodos ,todos ,inputText ,setStatus}){  //Simplified way of using multiple props (this is called passing the props)

  //Using the States
  function inputTextHandler(event){
    console.log(event.target.value);

    // props.setInputText(event.target.value);    traditional method of using the props 

    setInputText(event.target.value);              //using the props in easy way
                                                   //event.target.value is a java script predefined term try to remeber 
    
  }

  const submitTodoHandler =(event) => {           //Function to stop the default refresh behavior (prevent.default) of the button Click
    event.preventDefault();
    setTodos([
      ...todos,{text :inputText,completed:false ,id:Math.random()*1000}
    ]);
    setInputText("");                 //Set the state back to zero/ empty
  };
  const statusHandler =(e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);
  }
return(
    <form className="todo-list">
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
);
};

export default Form;