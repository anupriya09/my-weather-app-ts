import { WeatherData } from "./WeatherInterface"

export const initialWeatherData : WeatherData = { 
    coord:{},
    weather: [{}],
    base : "",
    main: {
      temp:234,
      feels_like:245,
      temp_min:213,
      temp_max:267,
      pressure:345,
      humidity:123
    },
    visibility: null,
    wind: {},
    clouds: {},
    dt: null,
    sys: {},
    timezone: null,
    id: null,
    name: "Toronto",
    cod:null}