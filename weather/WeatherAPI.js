class WeatherAPI {
  constructor() {
    this.api = getApiClient(WEATHER_BASE_URL, {
      appid: WEATHER_API_KEY
    });
  }
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

  async getCurrentWeather(params) {
    const resp = await this.api.get('/weather?units=metric', { params });
    return resp?.data;
  }
}
