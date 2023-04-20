export interface WeatherData{
    coord:{},
    weather: [{}],
    base : string | null,
    main: WeatherDataMain,
    visibility: number | null,
    wind: {},
    clouds: {},
    dt: number |null,
    sys: {},
    timezone: number | null,
    id: number | null,
    name: string,
    cod:number | null
}

export interface WeatherDataMain{
  temp:number,
  feels_like:number,
  temp_min:number,
  temp_max:number,
  pressure:number,
  humidity:number
}

export interface WeatherDataArray extends Array<WeatherData>{}

