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
// http://openweathermap.org/img/w/10d.png

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
    imgIcon.setAttribute('src', URL);
    const bonus1 = document.querySelector('[data-bonus1]');
    bonus1.append(imgIcon);
}

putsURLInImgAndAppends(putsIconInURL(atlWeather));