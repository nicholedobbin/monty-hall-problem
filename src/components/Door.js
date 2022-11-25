/* ------------------------------------------- IFS L4T20: Monty-Hall Problem -------------------------------------------

This is the Door function component which takes props and returns Door components based on their 
props/state (called in App.js).

---------------------------------------------------------------------------------------------------------------------- */

import React from 'react';

export default function Door({handleClick, source, description}) {
    return (
        <div className="door" onClick={handleClick}>
            <img src={source} alt={description} className="doorImage"></img>
        </div>
    )
}





