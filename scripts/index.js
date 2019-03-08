////////////// DESCRIPTION //////////////
// Make a div to throw all the answers into
// // Later, we'll pin this div where we want to answers to go
const descriptionDiv = document.createElement('div');
const descriptionDivTitle = document.createElement('h3');
descriptionDivTitle.textContent= "Jonathan's responses:";
// Let's pin this div to the the end of the the Description block of text, before the first Bonus
const descriptionAnswers = document.querySelector('[data-description]');
descriptionAnswers.append(descriptionDivTitle);
descriptionAnswers.append(descriptionDiv);

// Time to answer the Description's questions:
// City name:
const cityName = document.createElement('li');
const cityNameAnswer = atlWeather.name;
cityName.textContent = `city name: ${cityNameAnswer}`;
// Temperature:
const airTemp = document.createElement('li');
const airTempAnswer = atlWeather.main.temp;
airTemp.textContent = `temperature: ${airTempAnswer}`;
// Wind speed:
const windSpeed = document.createElement('li');
const windSpeedAnswer = atlWeather.wind.speed;
windSpeed.textContent = `wind speed: ${windSpeedAnswer}`;

// Add the answers to the `descriptionAnswers`
descriptionDiv.append(cityName);
descriptionDiv.append(airTemp);
descriptionDiv.append(windSpeed);


////////////// BONUS ONE //////////////
// Write a function that accepts the weather.js info and extracts the icon info into the URL
function putsIconInURL(weatherSet){
    // gets the icon name
    const icon = weatherSet.weather[0].icon;
    // puts it in the appropriate URL
    return `http://openweathermap.org/img/w/${icon}.png`;
}

// Write a function that takes the URL, creates DOM elements to show the image, and appends it to the page
function putsURLInImgAndAppends(URL){
    imgIcon = document.createElement('img');
    imgIconTitle = document.createElement('h4');
    imgIcon.setAttribute('src', URL);
    imgIconTitle.textContent= 'Showing an icon: ';
    const bonus1 = document.querySelector('[data-bonus1]');
    bonus1.append(imgIconTitle);
    bonus1.append(imgIcon);
}

// Call the function
putsURLInImgAndAppends(putsIconInURL(atlWeather));


////////////// BONUS TWO //////////////
// Using the latitude and longitude functions and the information from 
// this stack overflow answer, add a map element to the page.
// https://stackoverflow.com/a/46136238

// Find the data tag for the second Bonus exercise
const bonus2 = document.querySelector('[data-bonus2]');

// Get the lat/long
const latitude = atlWeather.coord.lat;
const longitude = atlWeather.coord.lon;

// Make the map
const iframeMap = document.createElement('iframe');
iframeMap.setAttribute('width', 360);
iframeMap.setAttribute('height', 270);
iframeMap.setAttribute('frameborder', 0);
iframeMap.setAttribute('style', 'border:0');
iframeMap.setAttribute('src', `http://maps.google.com/maps?q=${latitude}, ${longitude}&z=15&output=embed`);

// Send the map to the page
bonus2.append(iframeMap);


////////////// BONUS THREE //////////////
// The sunrise and sunset information is in an odd format. In order to 
// show it in a human readable format, you'll need to do some detective work.
// Check out the following the following for information on how to convert it:
// Google search
// https://momentjs.com/

