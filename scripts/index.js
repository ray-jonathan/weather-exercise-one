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


