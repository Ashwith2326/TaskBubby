import Taskform from './componets/Taskform';
import TaskList from './componets/TaskList';
import Tracker from './componets/tracker';
import { useEffect, useState } from "react";
import "./Style.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem
    ("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_,i)=>i!=index))
      
  }

  const clearTasks = () => {
    setTasks([])
  }

  return(
    <div className="App">
      <header >
      <h1 className="title" >Task Focus</h1>
      <p className="tagline">Our friendly TaskManager</p>
      </header>
      <Taskform addTask = {addTask}/>
      <TaskList tasks = {tasks} 
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
     <Tracker tasks={tasks} />

      {tasks.length>0 && 
      (<button onClick={clearTasks} className="clear-btn">Clear all tasks</button>)}
      
    </div>
  )
}
