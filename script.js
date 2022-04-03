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
