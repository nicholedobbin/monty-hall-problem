/* ------------------------------------------- IFS L4T20: Monty-Hall Problem -------------------------------------------

This is the Header function component. It returns the Header component (called in App.js).

---------------------------------------------------------------------------------------------------------------------- */

import React from 'react'

export default function Header() {
  return (
    <div className="headerContainer">
        {/* header section */}
        <div className="headerSection">
            <h1>Monty Hall Problem</h1>
            <p>
                The Monty Hall Problem is a probability brain teaser, named after the original 
                host of an American TV game show called "Let's Make a Deal".
            </p>
            <p>
                In this game, you are presented with three closed doors. Behind one of the doors is 
                a prize, and behind the remaining two doors is a "goat" (i.e. a non-prize or nothing). 
                The player selects a door, after which the non-prize door of the remaining unselected doors 
                is opened. The player is then offered a final chance to change their mind (i.e. change their selection 
                to the closed, previously unselected door), or keep their originally selected door. This is the player's 
                final selection, and the door is opened upon selection, revealing whether their chosen door is a prize or 
                a goat. 
            </p>
            <p>
                The brain-teaser part of this game occurs because, when programmed to randomly assign the 
                winning door, the probability of the winning door being the opposite door of the initially selected 
                door is correct roughly two-thirds of the time. 
            </p>
            <p>Try it out for yourself to see if it's true for you!</p>
        </div>
        <hr></hr>
    </div>
  )
}