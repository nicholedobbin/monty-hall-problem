/* ------------------------------------------- IFS L4T20: Monty-Hall Problem -------------------------------------------

This is the Footer function component, which which returns the page footer contents.

---------------------------------------------------------------------------------------------------------------------- */


import React from 'react'

export default function Footer() {
  return (
    <div className="footerContainer">
        <hr></hr>
        <div className="footerSection">
            <p>
               Made by
               &nbsp;<a href="https://github.com/nicholedobbin" target="_blank" rel="noreferrer">Nichole</a>&nbsp;
               with
               &nbsp;<a href="https://github.com/facebook/create-react-app" target="_blank" rel="noreferrer">Create React App</a>&nbsp; 
               .
            </p>
        </div>
    </div>
  )
}
