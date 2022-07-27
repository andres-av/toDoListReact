import React from "react";

const ItemsLeft = ({list}) => {

    return(
        <>
            <div className="items-left">
                <p>{list.length} items left</p>
            </div>
            <div className="page-one"></div>
            <div className="page-two"></div>
        </>
    )
}; 

export default ItemsLeft