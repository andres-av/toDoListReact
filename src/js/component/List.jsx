import React from "react";

const List = ({list , onDelete}) => {

    return(
        <>
            {/* Render the list by mapping each task and adding it into a <li> element with its own click to delete */}
            <ul className="unordered-list">{
                list.map((task) =>
                    <div key={task.id}>
                        <div className="li-item">
                            <li>{task.text}</li>
                            <div onClick={() => onDelete(task.id)} className="deleteBtn">X</div>
                        </div>
                        <hr />
                    </div>
                )}
            </ul>
        </>
    )
}; 

export default List