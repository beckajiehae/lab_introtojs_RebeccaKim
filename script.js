//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

let jobTitle = `clown`
let geoLocation = `Toronto`
let annualSalary = `50,000`
let compName = `Fools4U`


console.log(`You will be a ${jobTitle} in ${geoLocation}, making $${annualSalary} for ${compName}.`)
let eleFortune = document.querySelector(`.ex1`);
eleFortune.textContent = `You will be a ${jobTitle} in ${geoLocation}, making $${annualSalary} for ${compName}.`

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.

//Values
let currentYear = 2020;
let birthYear = 1990;

//Equations
let age = currentYear - birthYear;

console.log(`They are ${age} years old.`)
let eleAgeCalc = document.querySelector(`.ex2`);
eleAgeCalc.textContent = `They are ${age} years old.`

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

//Values
let currentAge = 30;
let deathAge = 85;
let foodAmount = 5;

//Equation
let totalFood = currentAge * foodAmount;

console.log(`You will need ${totalFood} snacks to last you until the ripe old age of ${deathAge}.`)
let eleFoodSupply = document.querySelector (`.ex3`);
eleFoodSupply.textContent = `You will need ${totalFood} snacks to last you until the ripe old age of ${deathAge}.`

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".


//Values
let circleRadius = 15;
const pi = Math.PI;

//Equations
let circumference = 2 * pi * circleRadius;
let area = pi * circleRadius ** 2;

console.log(`The circumference is ${circumference}cm. The area is ${area}cm.`)

let eleCircle1 = document.querySelector(`.ex4`)
eleCircle1.textContent = `The circumference is ${circumference}cm. The area is ${area}cm.`


//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

//Values
let tempCelsA = 15;
let tempFarB = 49;

//Equations
let tempCelsB = (tempFarB - 32) * 5/9;
let tempFarA = (tempCelsA * 9/5) + 32;


console.log(`${tempCelsA}°C is ${tempFarA}°F. ${tempFarB}°F is ${tempCelsB}°C`)
let eleTemp = document.querySelector(`.ex5`)
eleTemp.textContent = `${tempCelsA}°C is ${tempFarA}°F. ${tempFarB}°F is ${tempCelsB}°C`

// EXERCISE 6
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareEq(firstNumber) {
    let sqToNumber = firstNumber ** 2
    let eleSquared = document.querySelector(`.ex6`)
    eleSquared.textContent = `The result of squaring the number ${firstNumber} is ${sqToNumber}.`
    }

    squareEq(5)

// EXERCISE 7
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".


function dividedEq(wholeNumber) {
    let dividedNumber = wholeNumber / 2;
    let eleDivided = document.querySelector(`.ex7`);
    eleDivided.textContent = `Half of ${wholeNumber} is ${dividedNumber}.`
}

dividedEq(20)


// EXERCISE 8
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentEq(partNumber, fullNumber) {
    let elePercentage = document.querySelector(`.ex8`);
    elePercentage.textContent = `${partNumber} is ${partNumber/fullNumber * 100}% of ${fullNumber}`
    console.log(`${partNumber} is ${partNumber/fullNumber * 100}% of ${fullNumber}`)
}

percentEq(5,25)

// EXERCISE 9
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.


function circleArea(radiusNumber) {
        let eleCircle2 = document.querySelector(`.ex9`)
    eleCircle2.textContent = `The area for a circle with radius ${radiusNumber} is ${(Math.PI * radiusNumber ** 2).toFixed(2)}`
    console.log(`The area for a circle with radius ${radiusNumber} is ${(Math.PI * radiusNumber ** 2).toFixed(2)}`)
}

circleArea(4)

// EXERCISE 10
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).

function multipleFunctions(godNumber) {

    let halfNumber = godNumber/2;
    let squareNumber = halfNumber ** 2;
    let areaNumber = Math.PI * squareNumber ** 2;
    let percentAreaNumber = areaNumber/squareNumber * 100
    
    let eleMultFunc = document.querySelector (`.ex10`)
    eleMultFunc.innerHTML = `The half of ${godNumber} is ${halfNumber}.<br> 
    The square of ${halfNumber} is ${squareNumber}. <br> 
    The area of a circle with a radius of ${squareNumber} is ${areaNumber} <br>
    ${areaNumber} is ${percentAreaNumber}% of ${squareNumber} `

    console.log(`The half of ${godNumber} is ${halfNumber}.<br> 
    The square of ${halfNumber} is ${squareNumber}. <br> 
    The area of a circle with a radius of ${squareNumber} is ${areaNumber} <br>
    ${areaNumber} is ${percentAreaNumber}% of ${squareNumber} `)
    
}

multipleFunctions(5)

