/**
 * HTML Template to show the weather details in the card format
 */

const weatherTemplates = {

  weatherCard({ coord, weather, main, visibility, wind, name, sys }) {
    return (`
    <div class="weather-card">
      <div class="weather-card__top">
          <div class="weather-card__left">
              <h2 class="weather-card__temp">${Math.round(main.temp)}°C</h2>
              <h3 class="weather-card__city">${name}, ${sys.country}</h3>
              <p>Lat: ${coord.lat}, Lon: ${coord.lon}</p>
          </div>
          <div class="weather-card__right">
              <img class="weather-card__icon" src="http://openweathermap.org/img/w/${weather[0].icon}.png"
                  alt="${weather[0].main} - ${weather[0].description}" />
              <h4>${weather[0].main}</h4>
              <span>${weather[0].description}</span>
          </div>
      </div>
      <div class="weather-card__info">
          <ul class="weather-card__main">
              <li>Feels Like: ${main.feels_like}°C</li>
              <li>Min: ${main.temp_min}°C</li>
              <li>Max: ${main.temp_max}°C</li>
              <li>Pressure: ${main.pressure}hPa</li>
              <li>Humidity: ${main.humidity}%</li>
              <li>Visibility: ${Number(visibility / 1000).toFixed(2)}km</li>
              <li>Wind: ${wind.speed}m/s ${degreeToCompass(wind.deg)}</li>
          </ul>
      </div>
    </div>
  `);
  },
};