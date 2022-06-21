# sportradar-app
## Table of contents
* [General info](#general-info)
* [Features](#features)
* [Technologies](#technologies)
* [Setup](#setup)

## General Info
* The project allows you to simulate the score of three football matches. After clicking Start button, the simulation starts, and every 10 seconds one random team scores a goal. After 90 seconds matches end. You finish simulation before end of the match by clicking Finish button. After ended simulation you can restart it by cliking Restart button.

## Features
* Simulates the score of three football matches
	
## Technologies
Project is created with:
* JavaScript ES6
* Typescript
* React 18.0.14 (create-react-app)
* React Redux (reduxjs/toolkit)
* Jest
* React Testing Library
* Cypress
* Styled components
* CSS3
* HTML5
* ESlint
* Prettier
	
## Setup
Clone project, install dependencies with **npm install** in **sportradar-frontend** directory, and from there run **npm start**. Then navigate to http://localhost:3000/.

To run all unit tests, in **sportradar-frontend** run **npm test**.

To run e2e tests, in **sportradar-frontend** run **npx cypress open**, in newly browser tab click on **E2E Testing**, then choose Chrome and click **Start E2E Testing in Chrome**. In newly opened Chrome tab click on **simulatedMatches.cy.ts** and you will see e2e tests running.


