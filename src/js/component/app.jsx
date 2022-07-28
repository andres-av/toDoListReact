// Import React
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// Import components
import ItemsLeft from "./ItemsLeft.jsx";
import Title from "./Title.jsx"
import List from "./List.jsx"
import Form from "./AddTask.jsx"


// Declare Component
const App = () => {

    // Declare State variables: 
    const [list, setList] = useState([]);


    // Function to add the input variable into the state variable list which is an array, 
    // only when the input has been submitted by Keyboard Key "Enter":
    const addTask = (task) => {
        const id = uuidv4();
        const newTask = { id , ...task};
        setList([...list, newTask])
        console.log(list);
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
                <Form onAdd={addTask}/>
                <List list={list} onDelete={handleDeleteTask}/>
            </div>
            <ItemsLeft list={list}/>
        </div>
        </>
    )
};

export default App;