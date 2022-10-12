import './App.css'
import React from 'react'
import { useState } from 'react';

export const Todo = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState ([]);
    const [editId, setEditId] = useState(0);
    const [button,setButton] = useState("ADD");
const [complete, setComplete] = useState ([]);

    const handleSubmit = () =>{
      setButton("ADD");
       // Chnage State of Button on clicking it
        if(editId){
        const editTodo = todos.find((i)=> i.id === editId); //find the element through its id
        const updatedTodos = todos.map((t)=> t.id === editTodo.id ? (t={id:t.id,todo:t.data}):{id:t.id , todo:t.data}); //if the eklement is desired one then update it else give it default value
        setTodos(updatedTodos);
        setEditId(0);
        setTodo("");
      }
    var obj ={
    data : todo,
    id : Math.random()*100
}
if(obj.data ===""){
  alert("error");
} else
     setTodos([...todos,obj]);
      setTodo("");
    }
    const takeInput=(e)=>{
        let val=e.target.value; 
        setTodo(val); // todo variable will store the entered value
    }
    const handleDelete1 = (id) => {
      // filter the array by matching the id of the items stored in the array
      const delTodo = todos.filter ((del)=> del.id !== id); 
      setTodos([...delTodo]); //update the todos array
  }
  const handleDelete2 = (id) => {
    // On clicking Delete button from the completed task
    const delComplete = complete.filter ((del)=> del.id !== id); 
    setComplete([...delComplete]); //Display new array in the completed section
}
  // Edit Functionality in TODO List
  const handleEdit1 = (id) => { 
    for(let i=0;i<todos.length;i++){
      if(todos[i].id===id){
        setTodo(todos[i].data);
        todos.splice(i,1)
        setTodos([...todos]) //it will covert it into array
        setButton("UPDATE");
      }
    }
  }
  //Edit Functionality in Completed List
  const handleEdit2 = (id) => {
    for(let i=0;i<complete.length;i++){
      if(complete[i].id===id){
        setTodo(complete[i].data);
        complete.splice(i,1)
        setComplete([...complete]) //it will covert it into array
        setButton("UPDATE") 
      }
    }
  }
  // Check Box Functionality in the TODO list
  const checkHandle1=(id)=>{
    for(let i=0;i<todos.length;i++){
      if(todos[i].id===id){   
        var obj ={
          data : todos[i].data,
          id : todos[i].id,
        }
       setComplete([...complete,obj]) ;
       todos.splice(i,1); 
      }
    }
  }
  //Check Box Functionality in the Completed list
  const checkHandle2=(id)=>{
    for(let i=0;i<complete.length;i++){
      if(complete[i].id===id){   
        var obj ={
          data : complete[i].data,
          id : complete[i].id,
        }
       setTodos([...todos,obj]) ;
       complete.splice(i,1); 
      }
    }
  }
  return (
    <div className="container">
    <h2>TODO LIST</h2>
    <h3>Add Item</h3>
    <p>
    <input id="new-task" type="text" onChange={takeInput} value ={todo}/><button onClick={handleSubmit}>{button}</button>
    </p>

    <h3>Todo</h3>

   <ul className='todo-task'>
   {todos.map((e)=>(
        <li  key={e.id}>
        <input type="checkbox" checked = {false} onClick={()=>checkHandle1(e.id)}/><label>{e.data}</label>
        <button className="edit" onClick = {() => handleEdit1(e.id)} >Edit</button>
        <button className="delete" onClick = {()=> handleDelete1(e.id)}>Delete</button>
        </li>
        ))}
      </ul>  

    <h3>Completed</h3>
    
    <ul id="completed-tasks">
      {complete.map((e)=>(
        <li key={e.id}><input type="checkbox" checked = {true} onClick={()=>checkHandle2(e.id)}/><label>{e.data}</label><input type="text" /><button className="edit" onClick = {() => handleEdit2(e.id)} >Edit</button><button className="delete" onClick = {()=> handleDelete2(e.id)}>Delete</button></li>
        ))}
    </ul>
</div>
  )
}
export default Todo