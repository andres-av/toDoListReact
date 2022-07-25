// Import React
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


// Declare Component
const App = () => {

// Declare State variables: 
const [input, setInput ] = useState('');
const [list, setList] = useState([]);

// Function to add the input variable into the state variable list which is an array, 
// only when the input has been submitted by Keyboard Key "Enter":
const handleForm = (ev) => {
    if(ev.keyCode === 13){
        ev.preventDefault();
        if(input){
            setList((ls) => {return [...ls, input]});
            setInput('');
            console.log(list);
        }
    }
};

// Function to delete each task, called by the onClick event on each <li>
const handleDeleteTask = (ev) => {
    const evIndex = ev.target.id;
    list.splice(list[evIndex], 1);
    setList([...list])
}

// Render component
    return (
        <>
        <div className="flex-container">
            <div><h1>To Do List</h1></div>
            <div className="list-note">        
                <form onKeyDown={handleForm}>
                    <input 
                    type="text" 
                    placeholder="What needs to be done?"
                    onChange={e => setInput(e.target.value)}
                    value={input}
                    />
                </form>
            {/* Render the list by mapping each input value and adding it into a <li> element with its own click to delete */}
                <ul>{
                    list.map((value, i) =>
                    <div>
                        <div  className="li-item">
                            <li key={i} id={i} className="hr">{value}</li>
                            <div onClick={handleDeleteTask} className="deleteBtn">X</div>
                        </div>
                        <hr />
                    </div>
                    )}
                </ul>
            </div>
            <div className="items-left">
                <p>{list.length} items left</p>
            </div>
            <div className="page-one"></div>
            <div className="page-two"></div>
        </div>
        </>
    )
};

export default App;