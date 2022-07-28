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

    // Declare State variables: 
    const [list, setList] = useState([]);

    // Function to add task and ID into list usState array:
    const addTask = (task) => {
        const id = uuidv4();
        const newTask = { id , ...task};
        setList([...list, newTask])
    };

    // Function to delete each task, called by the onClick event on each <li>
    const handleDeleteTask = (id) => {
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