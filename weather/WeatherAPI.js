class WeatherAPI {
  /**
   * Initiate the api with Base URL and API KEY
   */
  constructor() {
    this.api = getApiClient(WEATHER_BASE_URL, {
      appid: WEATHER_API_KEY
    });
  }
  /**
   * Use the Browser's Geolocation API to get the user's location
   * @returns Promise to resolve with user's geo location coordinates
   */
  async getGeoLocation() {
    return new Promise((resolve) => {
      navigator?.geolocation?.getCurrentPosition(function (position) {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    });
  }
  /**
   * Fetch the Weather data from the API using the given parameters
   * @param param Parameters to get the weather data
   */
  async getCurrentWeather(params) {
    const resp = await this.api.get('/weather?units=metric', { params });
    return resp?.data;
  }
}
