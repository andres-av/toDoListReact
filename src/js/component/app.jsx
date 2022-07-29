// Import React
import React, { useState , useEffect } from "react";

// Import components
import ItemsLeft from "./ItemsLeft.jsx";
import Title from "./Title.jsx"
import List from "./List.jsx"
import AddTask from "./AddTask.jsx";


// Declare Component
const App = () => {

    // Declare State variables: 
    const [list, setList] = useState([]);

    // Server interaction: 

    useEffect(() => {
        fetch('https://assets.breatheco.de/apis/fake/todos/user/andres-av')
        .then((resp) => resp.json())
        .then((task) => setList(task))
    }, []);

    // Function to add task and ID into list usState array:
    const addTask = (task) => {
        const newTask = {label: task, done: false };
        setList([...list, newTask]);
        fetch(`https://assets.breatheco.de/apis/fake/todos/user/andres-av`, 
        {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(list)
        })
    };

    // Function to delete each task, called by the onClick event on each <li>
    const handleDeleteTask = (i) => {
        const listToBeDeleted = [...list];
        listToBeDeleted.splice(i, 1);
        let deletedList = setList(listToBeDeleted);
        fetch(`https://assets.breatheco.de/apis/fake/todos/user/andres-av`, 
        {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(deletedList)
        })
    };

    // // Function to delete, Clear All tasks
    const handleClear = () => {
        const newList = [{label: "No tasks have been added", done: false }];
        let clearedList = setList(newList);
        fetch(`https://assets.breatheco.de/apis/fake/todos/user/andres-av`, 
        {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(clearedList)
        })
    };

// Render component
    return (
        <>
        <div className="flex-container">
            <Title/>
            <div className="list-note">        
                <AddTask onAdd={addTask}/>
                <List list={list} onDelete={handleDeleteTask}/>
            </div>
            <ItemsLeft list={list} onClear={handleClear}/>
        </div>
        </>
    )
};

export default App;