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
console.log(`2) ${travelOptions[0]}`);
console.log(`3) ${travelOptions[0]}`);
console.log(`4) ${travelOptions[0]}`);