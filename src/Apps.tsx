import {useEffect} from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap';
import './App.css'
import CityWeather from './CityWeather';
import { WeatherData,  WeatherDataArray,  WeatherDataResponse } from './WeatherInterface';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import AddCity from './AddCity';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

function Apps() {
  
  const city = useSelector((state: RootState) => state.city);
  const weatherData = useSelector((state: RootState) => state.weatherData);
  const isToggleOn = useSelector((state: RootState) =>state.isToggleOn);
  const dispatch = useDispatch();  

  const updateWeatherData = (responseWeatherData : WeatherData) => {
    dispatch({ type: 'UPDATE_WEATHER_DATA', weatherData: responseWeatherData});     
  }

  const updateWeatherDataUnit = (weatherData: WeatherDataArray) =>{
    dispatch({type:'UPDATE_WEATHER_DATA_UNIT', weatherData:weatherData})
  }

  const setUnitSymbol = (unit: string) => {
    dispatch({ type: 'SET_UNIT_SYMBOL', unitSymbol: unit});     
  }

  const handleToggleOnClick = () =>{
    
    dispatch({type:'TOGGLE_TEMPERATURE_UNIT', isToggleOn : true})
    const newData = updateWeatherDataTemperatureToCelsiusUnit();
    setUnitSymbol('°C'); 
    updateWeatherDataUnit(newData);  
  }

  const handleToggleOffClick = () =>{
    dispatch({type:'TOGGLE_TEMPERATURE_UNIT', isToggleOn : false})
    const newData = updateWeatherDataTemperatureToFarenheitUnit();
    setUnitSymbol('°F'); 
    updateWeatherDataUnit(newData);
  }

  const updateWeatherDataTemperatureToCelsiusUnit = () => weatherData.map((data) => {
      const updatedWeatherDataInCelsius =
      {
        ...data,
        weatherData:{
          ...data.weatherData,
          main: {
            ...data.weatherData.main,
            temp: (data.weatherData.main.temp - 32) * 5 / 9,
            temp_min: (data.weatherData.main.temp_min - 32) * 5 / 9,
            temp_max: (data.weatherData.main.temp_max - 32) * 5 / 9,
          },
        },
      }
    return updatedWeatherDataInCelsius;
  });

  const updateWeatherDataTemperatureToFarenheitUnit = () => weatherData.map((data) => {
    const updatedWeatherDataInFarenheit =
    {
      ...data,
      weatherData:{
        ...data.weatherData,
        main: {
          ...data.weatherData.main,
          temp: (data.weatherData.main.temp * 9/5) + 32,
          temp_min: (data.weatherData.main.temp_min * 9/5) + 32,
          temp_max: (data.weatherData.main.temp_max * 9/5) + 32,
        },
      },
    }
  return updatedWeatherDataInFarenheit;
});

  
  
  useEffect(() => {    
    const fetchWeatherData = async () => {
      const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=36f0ce85887320e897dbbc07cf2b74fc';
      console.log(url);
      const response:WeatherDataResponse = await axios(url);
      updateWeatherData(response.data);
      console.log(response);
    };
    fetchWeatherData();
  }, [city]);


  return (
    <Container  className="mainContainer" >
      <Container className="mainHeader" >
        <div className = "headerText">My Weather App - React-Redux
        <span className="toggleTempUnit">{isToggleOn ? <BsToggleOn onClick={handleToggleOffClick} /> : <BsToggleOff onClick={handleToggleOnClick} />}</span>
        </div>
      </Container>
      <AddCity />
      <Container className="weatherContainer">
      <CityWeather />
      </Container>  
      <div></div> 
    </Container>
  );

}

export default Apps;


