// Import React
import React, { useState , useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

// Import components
import ItemsLeft from "./ItemsLeft.jsx";
import Title from "./Title.jsx"
import List from "./List.jsx"
import AddTask from "./AddTask.jsx";


// Declare Component
const App = () => {

    // Server Interaction: 
    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setList(tasksFromServer)
        }

        getTasks()
    }, []);

    // Fetch tasks
    const fetchTasks = async () => {
        const res = await fetch('https://assets.breatheco.de/apis/fake/todos/user/andres-av');
        const data = await res.json();
        return data;
    }

    // Declare State variables: 
    const [list, setList] = useState([]);

    // Function to add task and ID into list usState array:
    const addTask = async (task) => {
        const id = uuidv4();
        const newTask = { id , ...task};

        const res = await fetch('https://assets.breatheco.de/apis/fake/todos/user/andres-av', 
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(newTask)
        })
        const data = res.json();

        setList([...list, data])
    };

    // Function to delete each task, called by the onClick event on each <li>
    const handleDeleteTask = async (id) => {
        await fetch(`https://assets.breatheco.de/apis/fake/todos/user/andres-av/${id}`, 
        { method: 'DELETE'})
        setList(list.filter((task) => task.id !== id));
    }


// Render component
    return (
        <>
        <div className="flex-container">
            <Title/>
            <div className="list-note">        
                <AddTask onAdd={addTask}/>
                <List list={list} onDelete={handleDeleteTask}/>
            </div>
            <ItemsLeft list={list}/>
        </div>
        </>
    )
};

export default App;