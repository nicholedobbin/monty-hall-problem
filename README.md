# **IFS L4T20 - React 4: Managing State - Compulsory Task 1**

## **Description**
This is a React app that simulates the Monty Hall problem (a probability brain teaser, named after the original host of an American TV game show called "Let's Make a Deal"). This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### **How to play** 
In this game, the user is presented with three closed doors. Behind one of the doors is a prize, and behind the remaining two doors is a "goat" (i.e. a non-prize or nothing). The player selects a door, after which the non-prize door of the remaining unselected doors is opened. The player is then offered a final chance to change their mind (i.e. change their selection to the last remaining closed door), or keep their originally selected door. This is the player's final selection, and the door is opened upon selection, revealing whether their chosen door is a prize or a goat.

The brain-teaser part of this game occurs because, when programmed to randomly assign the winning door, the probability of the winning door being the opposite door of the initially selected door is correct roughly two-thirds of the time.

#### **Play with Netlify** 
Netlify app: [https://react-monty-hall-problem.netlify.app/](https://react-monty-hall-problem.netlify.app/)
<br>

## **Components Description**
### **1. The [App.js](/src/App.js) component**
This is the main (parent) function component that sets state with the useState hook and contains the 
following functions:
* getRndInteger: returns a random integer from 0-2 (to assign a random winning/losing doors).
* resetGame: resets state to default values.
* handleStart: assigns a winning door and random losing door to two different doors. 
* handleClick: handles the click counts for each door, opening the non-selected losing door on the first click, and opens the selected door on the second click.
It returns the Header component, a start/restart button, a Door component for each door with the neccessary 
prop values/states, a WinLose component that displays a win/lose message, and the Footer component.

### **2. The [Header.js](/src/components/Header.js) component**
This is the Header function component which returns the page title and game description.

### **3. The [Door.js](/src/components/Door.js) component**
This is the Door function component which gets props from App.js and returns Door components based on their props/state (i.e. it returns a closed/open winning door/open losing door based on their state).

### **4. The [WinLose.js](/src/components/WinLose.js) component**
This is the WinLose function component which gets props from App.js and returns either a winning message or losing message when the game is complete (based on the state properties).

### **5. The [Footer.js](/src/components/Footer.js) component**
This is the Footer function component which returns the page footer contents.

### **6. The [App.css](/src/App.css) Stylesheet**
This is the stylesheet for the app.

<hr>

## **Installation and Usage**
1. Download the files in this repo. 
2. Navigate to the directory that you saved the download, open command line/terminal and type `npm install` where the package.json file is located.
3. In the same directory folder, open command line/terminal and run `npm start`. This runs the monty hall app in the development mode (i.e. locally).
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<hr>

## **Credit and References**
Made by [Nichole Dobbin](https://github.com/nicholedobbin), for my [HyperionDev](https://www.hyperiondev.com/) course.
