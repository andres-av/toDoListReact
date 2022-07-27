import React from "react";

const List = ({list , onDelete}) => {

    return(
        <>
            {/* Render the list by mapping each input value and adding it into a <li> element with its own click to delete */}
            <ul className="unordered-list">{
                list.map((value, i) =>
                    <div>
                        <div className="li-item">
                            <li key={i} id={i}>{value}<div id={i} onClick={onDelete} className="deleteBtn">X</div></li>
                        </div>
                        <hr />
                    </div>
                )}
            </ul>
        </>
    )
}; 

export default List