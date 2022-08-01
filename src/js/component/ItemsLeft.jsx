import React from "react";

const ItemsLeft = ({list , onClear}) => {

    return(
        <>
            <div className="items-left">
                <div className="itemsLeftCont">
                <p>{list.length} items left</p>
                <button onClick={onClear} className="clearBtn">Clear All Tasks</button>
                </div>
            </div>
        </>
    )
}; 

export default ItemsLeft