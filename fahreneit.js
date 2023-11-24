// 3. Write a function that converts a temperature from Celsius to Fahrenheit
//     ### Formula:
//         tFahrenheit = (tCelcius°C × 9/5) + 32
        
//         Where 
//             tFahrenheit: Temperature in Fahrenheit
//             tCelcius: Temperature in Celcius 

function convertTofahreneit(tcelcius){

        var tfahreneight = 0;
        tfahreneight = (tcelcius *9/5) + 32;
        return tfahreneight;

}

// Why is 'tcelcius' declared without 'cont, var or let'?
tcelcius = 28;
let fahreneight = convertTofahreneit(tcelcius);
console.log(fahreneight);