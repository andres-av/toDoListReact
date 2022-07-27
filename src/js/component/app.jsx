// Import React
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// Import components
import ItemsLeft from "./ItemsLeft.jsx";
import Title from "./Title.jsx"
import List from "./List.jsx"
import Form from "./Form.jsx"


// Declare Component
const App = () => {

    // Declare State variables: 
    const [input, setInput ] = useState('');
    const [list, setList] = useState([]);

    // Function to get input value and setInput with the value of form

    const inputVariable = (e) => {
        setInput(e.target.value);
    };

    // Function to add the input variable into the state variable list which is an array, 
    // only when the input has been submitted by Keyboard Key "Enter":
    const handleForm = (ev) => {
        if(ev.keyCode === 13){
            ev.preventDefault();
            if(input){
                setList((ls) => {return [...ls, input]});
                setInput('');
            }
        }
    };

    // Function to delete each task, called by the onClick event on each <li>
    const handleDeleteTask = (ev) => {
        const evIndex = ev.target.id;
        console.log(evIndex);
        console.log(list);
        setList(list.splice(list[evIndex], 1));
        // setList(list.filter((input) => input[evIndex] !== evIndex));
    }


// Render component
    return (
        <>
        <div className="flex-container">
            <Title/>
            <div className="list-note">        
                <Form onForm={handleForm} inputVariable={inputVariable} input={input}/>
                <List list={list} onDelete={handleDeleteTask}/>
            </div>
            <ItemsLeft list={list}/>
        </div>
        </>
    )
};

export default App;