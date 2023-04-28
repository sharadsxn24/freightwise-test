/**
 * Create the Axios Client for the API with the default baseURL 
 * and default parameters to send for each request, for example: api key.
 */
const getApiClient = (baseUrl, defaultParams) => axios.create({
  baseURL: baseUrl,
  params: defaultParams
});