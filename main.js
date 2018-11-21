// Node formulas and notes from class Nov. 20, 2018
    // var arg = process.argv[2];

    //console.log(arg*10);

    /* var fToC = (arg - 32)/1.8
    console.log(fToC); */

//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//


// ASK USER FOR TEMPERATURE (AND TYPE) TO CONVERT
var whichTemp = prompt("What temperature would you like to convert?");
var tempType = prompt("What unit of temperature? (f = Fahrenheit, c = Celsius, k = Kelvin)");
console.log(whichTemp + " degrees " + tempType);

if (tempType === "f") {
    var fahrenheit = whichTemp;
    // Conversion Code   
        var fahrenheitToCelsius = (fahrenheit - 32)/1.8;
        var fahrenheitToKelvin = (+fahrenheit + 459.67)/1.8;
    // Print to console
        console.log("Fahrenheit: " + fahrenheit + " degrees");
        console.log("Celsius: " + fahrenheitToCelsius + " degrees");
        console.log("Kelvin: " + fahrenheitToKelvin+ " degrees");
} else if (tempType === "c") {
    var celsius = whichTemp;
    // Conversion Code
        var celsiusToFahrenheit = +(celsius*1.8) + 32 ;
        var celsiusToKelvin = +celsius + 273.15 ;
    // Print to console
        console.log("Celsius: " + celsius);
        console.log("Fahrenheit: " + celsiusToFahrenheit);
        console.log("Kelvin: " + celsiusToKelvin);
} else if (tempType === "k") {
    var kelvin = whichTemp;
    // Conversion Code
        var kelvinToFahrenheit = (kelvin*1.8) - 459.67 ;
        var kelvinToCelsius = kelvin - 273.15 ;
    // Print to console
        console.log("Kelvin: " + kelvin);
        console.log("Fahrenheit: " + kelvinToFahrenheit);
        console.log("Celsius: " + kelvinToCelsius);
}
/*

//------------------------------------------------//
//---- FAHRENHEIT CONVERSION --- //

// Fahrenheit User prompt
    // var fahrenheit = prompt("What temperature in Fahrenheit do you want to convert?");

// Conversion Code
    //var fahrenheitToCelsius = (fahrenheit - 32)/1.8;
    //var fahrenheitToKelvin = (+fahrenheit + 459.67)/1.8;

// Print to console
    //console.log("Fahrenheit: " + fahrenheit);
    //console.log("Celsius: " + fahrenheitToCelsius);
    //console.log("Kelvin: " + fahrenheitToKelvin);



//------------------------------------------------//
//---- CELSIUS CONVERSION --- //
    // var celsius = prompt("What temperature in Celsius do you want to convert?");

// Conversion Code
    //var celsiusToFahrenheit = +(celsius*1.8) + 32 ;
    //var celsiusToKelvin = +celsius + 273.15 ;

// Print to console
    //console.log("Celsius: " + celsius);
    //console.log("Fahrenheit: " + celsiusToFahrenheit);
    //console.log("Kelvin: " + celsiusToKelvin);


//------------------------------------------------//
//---- KELVIN CONVERSION --- //
    // var kelvin = prompt("What temperature in Kelvin do you want to convert?");

// Conversion Code
    //var kelvinToFahrenheit = (kelvin*1.8) - 459.67 ;
    //var kelvinToCelsius = kelvin - 273.15 ;

// Print to console
    //console.log("Kelvin: " + kelvin);
    //console.log("Fahrenheit: " + kelvinToFahrenheit);
    //console.log("Celsius: " + kelvinToCelsius);
*/