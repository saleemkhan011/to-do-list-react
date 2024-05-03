import React, {useState} from "react";


function ToDoList(){

    const [tasks, setTasks] = useState(["Eat breakfast", "Take the Shower", "Go to gym"]);
    const [newTask, setNewTask] = useState("");

    function handleNewTask(event){
        setNewTask(event.target.value)
    }

    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index )
        setTasks(updatedTasks)
    }

    function moveTaskUp(index){

        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }

    }

    function moveTaskDown(index){

        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }

    }


    return(
        <div className = "to-do-list-container">

            <h1>To-Do-List</h1>

            <div className = "to-do-list-content">
            <input type = "text" placeholder = "Enter new task..." value = {newTask} onChange = {handleNewTask} />
            <button onClick = {addTask} className = "add-button">Add Task</button><br/>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key = {index}>
                       <span className = "text">
                            {task}
                       </span>
                            <button className = "delete-button" onClick = {() => deleteTask(index)}>Delete Task</button>
                            <button className = "move-up-button" onClick = {() => moveTaskUp(index)}>⬆</button>
                            <button className = "move-down-button" onClick = {() => moveTaskDown(index)}>⬇</button>
                      
                    </li>
                )}
            </ol>

        </div>
    );
}

export default ToDoList