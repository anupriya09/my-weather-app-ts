import {useState, useEffect} from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap';
import AddCity from './AddCity'
import './App.css'
import CityWeather from './CityWeather';
import { initialWeatherData } from './WeatherConstants';
import { WeatherDataArray } from './WeatherInterface';

function App() {
  
  const [weatherData, setWeatherData] = useState<WeatherDataArray>([initialWeatherData]);
  const [updatedCity, setUpdatedCity] = useState<string>('toronto');

  useEffect(() => {
    const fetchWeatherData = async () => {
      const url = 'https://api.openweathermap.org/data/2.5/weather?q='+updatedCity+'&appid=36f0ce85887320e897dbbc07cf2b74fc';
      console.log(url);
      console.log(updatedCity);
      const response = await axios(url);
      setWeatherData([...weatherData,response.data]);
    };
    fetchWeatherData();
  }, [updatedCity]);

  return (
    <Container  className="mainContainer" >
      <AddCity updatedCity={updatedCity} setUpdatedCity={setUpdatedCity}/>
      <Container className="weatherContainer">
      <CityWeather cityWeatherData = {weatherData} />
      </Container>  
      <div></div> 
    </Container>
  );

}

export default App;