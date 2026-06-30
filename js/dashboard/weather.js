import { API_CONFIG } from './config.js';

const weatherDisplay = document.querySelector('.weather-display');
const weatherCard = document.querySelector('.weather-card');
const lat = '28.4595';
const lon = '77.0266';

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_CONFIG.OPENWEATHERMAP_KEY}&units=metric`);
        const data = await response.json();
        
        console.log(data);
        
        const condition = data.weather[0].main;
        const temperature = data.main.temp;
        return `${condition}, ${temperature}°C`;
    } catch (error) {
        console.error('Error fetching weather:', error);
        return 'Weather unavailable';
    }
}

weatherCard.addEventListener('click', async () => {
    weatherCard.classList.toggle('flipped');   
    if(weatherCard.classList.contains('flipped')){
        const weatherInfo = await fetchWeather();  // ← await UNWRAPS it
        // weatherInfo = "Cloudy, 28.5°C" (NOT a Promise!)
        weatherDisplay.textContent = weatherInfo;
    }
});

