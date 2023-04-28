const getApiClient = (baseUrl, defaultParams) => axios.create({
  baseURL: baseUrl,
  params: defaultParams
});