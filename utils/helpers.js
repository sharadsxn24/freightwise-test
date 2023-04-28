const degreeToCompass = (num) => {
  const val = Math.floor((num / 22.5)) % 16;
  var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return arr[val];
}