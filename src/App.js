/* ------------------------------------------- IFS L4T20: Monty-Hall Problem -------------------------------------------

This is the main (parent) function component. It returns the Header component, a start/restart button, 
a Door component that displays each door based on its state, a WinLose component that displays a win/lose 
message, and the Footer component.

---------------------------------------------------------------------------------------------------------------------- */

import './App.css';
import Header from './components/Header.js';
import React, { useState} from 'react';
import Door from './components/Door.js';
import Footer from './components/Footer.js';
import WinLose from './components/WinLose';

export default function App() {
  // ---------- SET STATE ----------
  // Create array of closed door images with all state properties set to false (default/original state).
  const [doorsArray, setDoorsArray] = useState([
    {key: 0, flipped: false, winningDoor: false, isRandomLosingDoor: false, source: "./images/door.png", description:"Closed door"},
    {key: 1, flipped: false, winningDoor: false, isRandomLosingDoor: false, source: "./images/door.png", description:"Closed door"},
    {key: 2, flipped: false, winningDoor: false, isRandomLosingDoor: false, source: "./images/door.png", description:"Closed door"}
  ]);

  // Create click count state to count door clicks.
  const [clickCount, setClickCount] = useState(0);

  // Create hasWon and displayWinLose state to display a win/lose message at the end of the game.
  const [hasWon, setHasWon] = useState(false);
  const [displayWinLose, setDisplayWinLose] = useState(false);
  
  // ---------- FUNCTION: GET RANDOM INTEGER ----------
  // Returns a random integer from 0-2 (to assign a random losing door).
  function getRndInteger() {
    return Math.floor(Math.random() * 3);
  }

  // ---------- FUNCTION: RESET GAME ---------- 
  // Resets state to default values.
  function resetGame() {
    setDoorsArray([
      {key: 0, title: "Door1", flipped: false, winningDoor: false, isRandomLosingDoor: false, source:"./images/door.png", description:"Closed door"},
      {key: 1, title: "Door2", flipped: false, winningDoor: false, isRandomLosingDoor: false, source: "./images/door.png", description:"Closed door"},
      {key: 2, title: "Door3", flipped: false, winningDoor: false, isRandomLosingDoor: false, source: "./images/door.png", description:"Closed door"}
    ]);
    setClickCount(0);
    setHasWon(false);
    setDisplayWinLose(false);
    
  }

  // ---------- FUNCTION: HANDLE START ----------
  // Assigns a winning door and random losing door to two different doors. 
  function handleStart() {
    // Set click count to one for first door click.
    setClickCount(1);

    // Generate random number to assign winning and losing doors.
    const randomNumber = getRndInteger();
    let randomLosingDoor = getRndInteger();
    let winningDoorKey = null;
    let losingDoorKey = null;
    
    // 'For of' loop matches the randomNumber and door index, and assigns that door's winningDoor value as true.
    for (const door of doorsArray) {
      if (doorsArray.indexOf(door) === randomNumber) {
        door.winningDoor = true;
        winningDoorKey = door.key;
        break;
      }
    }
    
    // 'For of' loop gets a new randomLosingDoor number if it matches the winningDoorKey (i.e. ensures the 
    // winning and losing doors are not the same).
    for (const door of doorsArray) {
      while (winningDoorKey === randomLosingDoor) {
        randomLosingDoor = getRndInteger();
        break; 
      }
    }

    // Set the index of randomLosingDoor's isRandomLosingDoor property to true (i.e. assign the randomLosingDoor) 
    // and set losingDoorKey value to that door's key.
    setDoorsArray(doorsArray[randomLosingDoor].isRandomLosingDoor = true);
    losingDoorKey = doorsArray[randomLosingDoor].key;

    // Set doors array with winning and random losing door updates.
    setDoorsArray(doorsArray);
    // Check updates are complete/correct (commented out - leaving here for checking purposes only).
    // console.log("doors array after setting state");
    // console.log(doorsArray);
  }

  // ---------- FUNCTION: HANDLE CLICK ---------- 
  // Handles click counts for each door, opening the non-selected losing door on first click, 
  // and opens the selected door on second click.
  function handleClick(currentDoor) {
    // 
    setClickCount(prevClick => prevClick + 1);
    let losingDoorKey;
    let winningDoorKey;
    for (const door of doorsArray) {
      if (door.isRandomLosingDoor === true) {
        losingDoorKey = door.key;
      }
      if (door.winningDoor === true) {
        winningDoorKey = door.key;
      }
    }

    // 1st click:
    if (clickCount === 1) {
      // If this is not the winningDoor and is not the randomLosingDoor, open the randomLosingDoor.
      if ((currentDoor.winningDoor === false) && (currentDoor.isRandomLosingDoor === false)) {
        setDoorsArray(
          doorsArray[losingDoorKey].source = "./images/goat.png",
          doorsArray[losingDoorKey].flipped = true
        )
      }
      // If this is not the winningDoor and is the randomLosingDoor, use 'for of' loop to find and open the door
      // that is not winningDoor and is not randomLosingDoor door.
      else if ((currentDoor.winningDoor === false) && (currentDoor.isRandomLosingDoor === true)) {
        for (const door of doorsArray) {
          if (door.winningDoor === false && door.isRandomLosingDoor === false) {
            door.source = "./images/goat.png";
            door.flipped = true;
          }
        }
      }
      // If this is the winningDoor, open the randomLosingDoor.
      else if (currentDoor.winningDoor === true) {
        setDoorsArray(
          doorsArray[losingDoorKey].source = "./images/goat.png",
          doorsArray[losingDoorKey].flipped = true
        )
      }
    }
    // 2nd click:
    else if (clickCount === 2) {
      // If this door is not flipped and not the winningDoor, open it and reveal goat and losing message.
      if ((currentDoor.flipped === false) && (currentDoor.winningDoor === false)) {
        currentDoor.source = "./images/goat.png";
        currentDoor.flipped = true;
        setDisplayWinLose(true);
      }
      // Else, if this door is not flipped and is the winningDoor, open it and reveal prize and win message.
      else if ((currentDoor.flipped === false) && (currentDoor.winningDoor === true)) {
        currentDoor.source = "./images/prize.png";
        currentDoor.flipped = true;
        setDisplayWinLose(true);
        setHasWon(true);
      }
    }

    // Update doorsArray. 
    setDoorsArray(doorsArray);
  }

  // ---------- RENDER DISPLAY ----------
  return (
    <div className="App">
      <Header />
      {/* Game container */}
      <div className="gameContainer">
        { clickCount > 0 ? (
            <button onClick={resetGame} className="resetGameButton">Reset Game</button>
          ):(
            <button onClick={handleStart} className="startGameButton">Start Game</button>
          )
        }
        {/* Doors container */}
        <div className="doorsContainer">
          {
          doorsArray.map(door => (
            <Door 
              handleClick = {() => handleClick(door)}
              key = {door.key} 
              source = {door.source} 
              description = {door.description}
            />
          ))}
        </div>
        {/* Win/Lose message container */}
        <div className = "container winLoseContainer pt-5">
          <WinLose hasWon = {hasWon} displayWinLose = {displayWinLose}/>
        </div>
      </div>
      <Footer />  
    </div>
  );
}


