// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let myHTML = document.getElementById('missionTarget');

    myHTML.innerHTML = `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src= "${imageUrl}">`
 }
 
 function validateInput(testInput) {
    if(!testInput){
        return "Empty";
       }
       else if(!isNaN(Number(testInput))){
        return "Is a Number";
       }
       else {
        return "Not a Number";
       }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");
    let shuttleReady = true;

    if(validateInput(pilot.value) == "Empty" || validateInput(copilot.value) == "Empty" || validateInput(fuelLevel.value) == "Empty" || validateInput(cargoLevel.value) == "Empty"){
        alert("All fields must be filled!")
        shuttleReady = false;
    }

    let pilotName = document.getElementById("pilotStatus");
    if(validateInput(pilot.value) == "Empty"){
        shuttleReady = false;
        pilotName.innerHTML = `Warning!  Pilot not responding`;
    } else{
        pilotName.innerHTML = `${pilot.value} is Ready!`;
    }

    let copilotName = document.getElementById("copilotStatus");
    if(validateInput(copilot.value) == "Empty"){
        shuttleReady = false;
        copilotName.innerHTML = `Warning!  Copilot not responding`;
    } else{
        copilotName.innerHTML = `${copilot.value} is Ready!`;
    }

    let myFuel = document.getElementById("fuelStatus");
    //needs validateInput to check if it's a number first?
    if(validateInput(fuelLevel.value) !== "Is a Number"){
        myFuel.innerHTML = `Warning!  Fuel level is not a valid number!`;
        shuttleReady = false;
    } else if(fuelLevel.value < 10000){
        myFuel.innerHTML = `Warning!  Fuel level insufficient for launch!`;
        shuttleReady = false;
    } else {
        myFuel.innerHTML = `Fuel level sufficient for launch`;
    }

    let myCargo = document.getElementById("cargoStatus");
    //needs validateInput to check if it's a number first?
    if(validateInput(cargoLevel.value) !== "Is a Number"){
        myCargo.innerHTML = `Warning!  Cargo level is not a valid number!`;
        shuttleReady = false;
    } else if(cargoLevel.value > 10000){
        myCargo.innerHTML = `Warning!  Too much mass for launch!`;
        shuttleReady = false;
    } else {
        myCargo.innerHTML = 'Cargo level acceptable for launch'
    }

    if(shuttleReady){
        launchStatus.innerHTML = `Shuttle is ready for launch`;
        launchStatus.style.color = "green";
    } else {
        launchStatus.innerHTML = `Shuttle is not ready for launch`;
        launchStatus.style.color = "red";
        faultyItems.style.visibility = "visible";
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
    //return planets[2];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;