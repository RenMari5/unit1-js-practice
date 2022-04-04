document.write("JavaScript works!");

console.log("Hello console!");
console.warn("This is only a test!");

let myName="Renee";
let intro=`My name is ${myName}`;
let workFromHome="true";
let work=`I work from home: ${workFromHome}`;
let side="15";
let square=`The length of the side is ${side}`;
let radius="10";
let circle=`The radius of a circle is ${radius}`;

console.log(intro);
console.log(work);
console.log(square);
console.log(circle);

let squareArea= side * side;
let squarePerimeter= 4 * side;
let circleArea= Math.PI * radius * radius;
let circlePerimeter= 2 * Math.PI * radius;

console.log(squareArea);
console.log(squarePerimeter);
console.log(circleArea);
console.log(circlePerimeter);

console.log("The square area is " + squareArea + " and the perimeter is " + squarePerimeter);
console.log("The circle area is " + circleArea + " and the perimeter is " + circlePerimeter);

let travelOptions=["foot", "bike", "car", "airplane"];

console.log("The travel options are:");
console.log(`1) ${travelOptions[0]}`);
console.log(`2) ${travelOptions[1]}`);
console.log(`3) ${travelOptions[2]}`);
console.log(`4) ${travelOptions[3]}`);

let travelType = prompt("How do you like to travel?");

console.log("Travel type: " + travelType)

let distance = 100;
let time = 0;
let cost = 0;

if (travelType === "foot") {
    console.log("Walking is free! Speed is 3mph.");
    cost = 0;
    time = distance / 3;
} else if (travelType === "bike") {
    let rentBike = prompt("Do you need to rent the bike? (yes or no)");
    if (rentBike === "yes") {
      console.log("Bike rental is $45! Speed is 10mph.");
      cost = 45;
    } else {
      console.log("Biking is free! Speed is 10mph.");
      cost = 0;
    }
    time = distance / 10;
  }else if (travelType === "car") {
    console.log("Driving is $0.25/mi. Speed is 60mph.");
    cost = 0.25 * distance;
    time = distance / 60;
  } else if (travelType === "airplane") {
    let passengerCount = prompt("How many passengers?");
    console.log("Flying is $0.10/mi. Speed is 400mph.");
    cost = 0.10 * distance * passengerCount;
    time = distance / 400;
  } else {
      console.log(`Sorry. ${travelType} is an invalid option.`);
  }

console.log(`Traveling ${distance} miles by ${travelType} took ${time} hours and cost $${cost}!`);

let costBar = "Cost: "
for (let i = 0; i < cost; i++) {
    costBar += "$";
}
console.log(costBar);
// this one is really giving me trouble...SOLVED

let timeBar = "Time: "
for (let i = 1; i < time; i++) {
    timeBar += "/"
}
console.log(timeBar);
// as is this one... come back and try again tomorrow...SOLVED

if (travelType === "car") {
    let meterCostRemaining = 1.00;
    while (meterCostRemaining > 0) {
      let coin = prompt(`$${meterCostRemaining} remaining. Type a coin to insert.`);
      // TODO: check which coin was chosen: "quarter", "dime", "nickel", or "penny"
      if (coin === "quarter") {
        meterCostRemaining -= 0.25
      } else if (coin === "dime") {
        meterCostRemaining -= 0.10
      } else if (coin === "nickle") {
        meterCostRemaining -= 0.05
      } else if (coin === "penny") {
        meterCostRemaining -= 0.01
      }
      // and subtract that from meterCostRemaining
      console.log("Meter cost remaining: " +  meterCostRemaining);
    }
    console.log("You have paid the parking meter.");
  }
  // come back to this tomorrow, too... SOLVED
  