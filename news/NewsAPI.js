
class NewsAPI {
  constructor() {
    this.api = getApiClient(NEWS_BASE_URL, {
      sortBy: "popularity",
      apiKey: NEWS_API_KEY
    });
  }

  async getTopHeadlines(params) {
    const resp = await this.api.get('/top-headlines', { params });
    return resp?.data;
  }
}