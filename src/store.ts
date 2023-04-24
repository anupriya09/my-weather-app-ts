import { createStore, Action } from 'redux';
import { WeatherDataArray,WeatherData, WeatherDataEntry } from './WeatherInterface';

export interface RootState {
  city : string;
  weatherData : WeatherDataArray;
  isToggleOn : boolean;
  unitSymbol : string;
}

interface UpdateInputCityAction extends Action{
    type: 'UPDATE_CITY';
    city : string;
}

interface UpdateWeatherData extends Action{
  type: 'UPDATE_WEATHER_DATA';
  weatherData: WeatherData ;
}

interface UpdateWeatherDataUnit extends Action{
  type:'UPDATE_WEATHER_DATA_UNIT';
  weatherData: WeatherDataArray;
}

interface ToggleTemperatureUnit extends Action{
  type:'TOGGLE_TEMPERATURE_UNIT';
  isToggleOn : boolean;
}

interface SetUnitSymbol extends Action{
  type:'SET_UNIT_SYMBOL';
  unitSymbol : string;
}

interface RemoveItem extends Action{
   type: 'REMOVE_ITEM';
   id: number;
}

interface RefreshItem extends Action{
  type: 'REFRESH_ITEM';
  id: number;
}

type CounterActionTypes =  UpdateInputCityAction | UpdateWeatherData | ToggleTemperatureUnit | SetUnitSymbol | UpdateWeatherDataUnit | RemoveItem | RefreshItem;

const initialState: RootState = {
  city: '',
  weatherData : [],
  isToggleOn : false,
  unitSymbol: '°F',
};

const reducer = (state = initialState, action: CounterActionTypes) => {
  switch (action.type) {
    case 'UPDATE_CITY':
      return {...state, city : action.city }
    case 'UPDATE_WEATHER_DATA':
      let newWeatherData = [];
      let matchFound = false;
      
      newWeatherData = state.weatherData.map((item) => {
        if (item.weatherData.name.toLocaleLowerCase() === state?.city.toLowerCase()) {
          matchFound = true;
          return { ...item, weatherData: action.weatherData };
        }
        return item;
      });
    
      if (!matchFound) {
        newWeatherData.push({ id: state.weatherData.length, weatherData: action.weatherData });
      }
      return { ...state, weatherData: newWeatherData };
    
    case 'TOGGLE_TEMPERATURE_UNIT':
      return { ...state, isToggleOn: action.isToggleOn}
    case 'SET_UNIT_SYMBOL':
      return {...state, unitSymbol:action.unitSymbol}
    case 'UPDATE_WEATHER_DATA_UNIT':
      return {...state, weatherData : action.weatherData}
    case 'REMOVE_ITEM':
      const newItems = state.weatherData.filter(item => item.id !== action.id);
      return {
        ...state,
        weatherData: newItems
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
