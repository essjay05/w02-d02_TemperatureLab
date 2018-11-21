var arg = process.argv[2];

//console.log(arg*10);

/* var fToC = (arg - 32)/1.8
console.log(fToC); */

// Conversion Code
var fahrenheitToCelsius = (arg - 32)/1.8;
var fahrenheitToKelvin = (+arg + 459.67)/1.8;

console.log("Celsius: " + fahrenheitToCelsius);
console.log("Kelvin: " + fahrenheitToKelvin);