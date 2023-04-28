
class NewsAPI {
  /**
   * Initiate the api with Base URL and API KEY
   */
  constructor() {
    this.api = getApiClient(NEWS_BASE_URL, {
      sortBy: "popularity",
      apiKey: NEWS_API_KEY
    });
  }

  /**
   * Fetch the Top Headlines from the News API using the given parameters
   * @param param Parameters to get the top headlines data
   */
  async getTopHeadlines(params) {
    const resp = await this.api.get('/top-headlines', { params });
    return resp?.data;
  }
}