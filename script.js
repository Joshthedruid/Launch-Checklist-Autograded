// Write your JavaScript code here!

window.addEventListener("load", function() {
    this.alert("help")

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        formSubmission(document,"",pilot,copilot,fuelLevel,cargoMass);
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let myPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document,myPlanet.name,myPlanet.diameter,myPlanet.star,myPlanet.distance,myPlanet.moons,myPlanet.image)
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });