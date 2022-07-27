import React from "react";

const Form = ({inputVariable , onForm, input}) => {

    return(
        <form onKeyDown={onForm}>
            <input 
            type="text" 
            placeholder="What needs to be done?"
            onChange={inputVariable}
            value={input}
            className="input"
            />
        </form>
    )
}; 

export default Form