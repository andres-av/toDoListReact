import React , { useState } from "react";

const AddTask = ({ onAdd }) => {

    // Declare State variables: 
    const [text, setText ] = useState('');

    // Function to add the input variable into the state variable list which is an array, 
    // only when the input has been submitted by Keyboard Key "Enter":
    const submitTask = (ev) => {
        if(ev.keyCode === 13){
            ev.preventDefault();
            if(!text){
                alert('Please add a task');
                return
            }
            onAdd({text});
            setText('');
        }
    };

    return(
        <form onKeyDown={submitTask}>
            <input 
            type="text" 
            placeholder="What needs to be done?"
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="input"
            />
        </form>
    )
}; 

export default AddTask