/* ------------------------------------------- IFS L4T20: Monty-Hall Problem -------------------------------------------

This is the WinLose function component, which gets props from App.js and returns either a winning 
message or losing message when the game is complete (based on the state properties).

---------------------------------------------------------------------------------------------------------------------- */

import React from 'react';

export default function WinLose({hasWon, displayWinLose}) {
  if (hasWon === true && displayWinLose === true) {
    return (
      <div className="container container-fluid winLoseContainer text-center py-5">
        <div className="row">
            <div className="col">
            <h1 className="winLoseHeading">Woohoo! You Won!</h1>
            </div>
        </div>
      </div>
    )
  } else if (hasWon === false && displayWinLose === true ){
    return (
        <div className="container container-fluid winLoseContainer text-center py-5">
            <div className="row">
                <div className="col">
                <h1 className="winLoseHeading">Aw snap! You Lost!</h1>
                </div>
            </div>
        </div>
    )
  }
}