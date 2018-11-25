// Node formulas and notes from class Nov. 20, 2018
    // var arg = process.argv[2];

    //console.log(arg*10);

    /* var fToC = (arg - 32)/1.8
    console.log(fToC); */

//------------------------------------------------//
//------------------------------------------------//
//------------------------------------------------//

// 


// ASK USER FOR TEMPERATURE (AND TYPE) TO CONVERT

var temp = "";
var temps = [];
while (temp !=='end') {
    temp = prompt ("Enter a temperature to convert (Type 'end' to quit).");
    var tempType = prompt("What unit of temperature? (f = Fahrenheit, c = Celsius, k = Kelvin) or Type 'End' to quit conversions.");
        console.log(temp + " degrees " + tempType);
    // var whichTemp = prompt("What temperature would you like to convert?");
    //let tempType = prompt("What unit of temperature? (f = Fahrenheit, c = Celsius, k = Kelvin) or Type 'End' to quit conversions.");
    //for (tempType = 0; tempType !== 'End' || tempType !== 'end' || tempType !== 'END' ; tempType++) {
    //do {
        

                    if (tempType === "f") {
                    var fahrenheit = temp;
                    // Conversion Code   
                        var fahrenheitToCelsius = (fahrenheit - 32)/1.8;
                        var fahrenheitToKelvin = (+fahrenheit + 459.67)/1.8;
                    // Create Fahrenheit and Conversions Array
                        var fahrenheitTemps = [(fahrenheit + " degrees F"), (fahrenheitToCelsius + " degrees C"), (fahrenheitToKelvin + " K")];    
                    /*  ---------------- For/While Loop (Pt2 Bonus1)
                                        var text = " ";
                                        var i = 0;
                                            do {
                                            text += fahrenheitTemps[0] + i;
                                            i++;
                                            while (i < 3);
                                        }   ------------------------------- */
                    // Print to console individually
                        console.log("Fahrenheit: " + fahrenheitTemps[0]);
                        console.log("Celsius: " + fahrenheitTemps[1]);
                        console.log("Kelvin: " + fahrenheitTemps[2]);
                } else if (tempType === "c") {
                    var celsius = temp;
                    // Conversion Code
                        var celsiusToFahrenheit = +(celsius*1.8) + 32 ;
                        var celsiusToKelvin = +celsius + 273.15 ;
                    // Create Celsius and Conversions Array
                        var celsiusTemps = [(celsius + " degrees C"), (celsiusToFahrenheit + " degrees F"), (celsiusToKelvin + " K")];
                    // Print to console
                        console.log("Celsius: " + celsiusTemps[0]);
                        console.log("Fahrenheit: " + celsiusTemps[1]);
                        console.log("Kelvin: " + celsiusTemps[2]);
                } else if (tempType === "k") {
                    var kelvin = temp;
                    // Conversion Code
                        var kelvinToFahrenheit = (kelvin*1.8) - 459.67 ;
                        var kelvinToCelsius = kelvin - 273.15 ;
                    // Create Kelvin and Conversions Array
                        var kelvinTemps = [(kelvin + " K"), (kelvinToFahrenheit + " degrees F"), (kelvinToCelsius + " degrees C")];
                    // Print to console
                        console.log("Kelvin: " + kelvinTemps[0]);
                        console.log("Fahrenheit: " + kelvinTemps[1]);
                        console.log("Celsius: " + kelvinTemps[2]);
            }
            if (temp !== 'end') temps.push(temp);
            console.log("You've entered: " + temps.join(', '))
        };
            /* while (whichTemp === 'End' || whichTemp === 'end' || whichTemp === 'END') {
            console.log("Thank you for choosing us to convert your temperatures.")
            break; */
       // } while (tempType !== 'End' || tempType !== 'end' || tempType !== 'END');
    //}
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