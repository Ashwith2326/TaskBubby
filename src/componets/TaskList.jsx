function TaskList({tasks, updateTask,deleteTask }){
    // spred opertre[...]

    const toggleComplete=(index)=>{
        const updated ={...tasks[index],completed : !tasks[index].completed};
        updateTask(updateTask,index);
        updateTask(updated,index);
    }; 

    return (
        <ul className="task-list">
            {tasks.map((task, index)=>(
                <li key={index}  className= {task.completed ? "completed" :" "}>
                    <div>
                        <span>{task.text}  
                            <small>({task.priority} ,{task.category})</small> 
                        </span>
                    </div>

                    <div>
                        <button onClick={()=>toggleComplete(index)}>{task.completed ? "undo":"Complete"} </button>
                        <button onClick={()=>deleteTask(index)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}
export default TaskList;
