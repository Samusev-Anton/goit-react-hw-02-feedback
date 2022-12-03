import React from "react";
const Controls = ({ onIncrement }) => {
    return (
                <div className="controls">
                    <button type="button" id="1" onClick={onIncrement}>Good</button>
                    <button type="button" id="2" onClick={onIncrement}>Neutral</button>
                    <button type="button" id="3" onClick={onIncrement}>Bad</button>
                </div >
           )

}

export default Controls;