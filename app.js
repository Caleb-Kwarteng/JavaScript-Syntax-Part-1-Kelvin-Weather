//Kelvin Weather Project
//Declaration of constant kelvin variable
const kelvin = 0;

//conversion of kelvin to celcius
const celsius = kelvin - 273;

//conversion of temperature to fahrenheit
let fahrenheit = celsius *  (9/5) + 32;

//Rounding of fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);