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
            {/* Small rectangles at bottom to make it look like post-it notes */}
            <div className="page-one"></div>
            <div className="page-two"></div>
        </>
    )
}; 

export default ItemsLeft