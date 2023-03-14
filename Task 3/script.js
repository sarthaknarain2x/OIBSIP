
const calcTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    //recieve the type of entered value
    const givenScale = document.getElementById('givenscale').value;
    console.log("Entered temperature : ", numberTemp, givenScale);

    // receive the type of value user wants to convert to
    const tempSelected = document.getElementById('tempscale').value;

    let result = 'To be determined...';

    if (givenScale == 'Choose scale') alert('Please enter the scale for the entered value');
    if (tempSelected == 'Choose scale') alert('It seems you forgot to select the scale to convert');

    if (givenScale == tempSelected && givenScale != 'Choose scale') {
        result = numberTemp + tempSelected;
    }

    //kelvin and celcius
    else if (givenScale == '°C' && tempSelected == 'K') {
        result = (parseFloat(numberTemp) + 273.15) + ' K';
    } else if (givenScale == 'K' && tempSelected == '°C') {
        result = (parseFloat(numberTemp) - 273.15) + ' °C';
    }

    //celcius and fahrenheit
    else if (givenScale == '°C' && tempSelected == '°F') {
        result = (9 * parseFloat(numberTemp) / 5.0 + 32.0) + ' °F';
    } else if (givenScale == '°F' && tempSelected == '°C') {
        result = ((parseFloat(numberTemp) - 32.0) * 5 / 9.0) + ' °C';
    }
    //kelvin and fahrenheit
    else if (givenScale == 'K' && tempSelected == '°F') {
        result = (9 * (parseFloat(numberTemp) - 273.15) / 5.0 + 32.0) + ' °F';
    } else if (givenScale == '°F' && tempSelected == 'K') {
        result = ((parseFloat(numberTemp) - 32.0) * 5 / 9.0 + 273.15) + ' K';
    }

    // print result in innerHTML
    console.log("Converted temperature : ", result);
    document.getElementById('resultContainer').innerHTML = result;




}