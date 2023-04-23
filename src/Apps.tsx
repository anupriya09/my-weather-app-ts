import {useState, useEffect, ReactNode} from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap';
import './App.css'
import CityWeather from './CityWeather';
import { initialWeatherData } from './WeatherConstants';
import { WeatherDataArray } from './WeatherInterface';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import AddCity from './AddCity';

function Apps() {
  
  const [weatherData, setWeatherData] = useState<WeatherDataArray>([initialWeatherData]);
  const [updatedCity, setUpdatedCity] = useState<string>('toronto');
 
  const city = useSelector((state: RootState) => state.city);
    

  useEffect(() => {    
    const fetchWeatherData = async () => {
      const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=36f0ce85887320e897dbbc07cf2b74fc';
      console.log(url);
      console.log(updatedCity);
      const response = await axios(url);
      setWeatherData([...weatherData,response.data]);
    };
    fetchWeatherData();
  }, [city]);


  return (
    <Container  className="mainContainer" >
      <Container className="mainHeader">
        <div className = "headerText">My Weather App - React-Redux</div>
      </Container>
      <AddCity />
      <Container className="weatherContainer">
      <CityWeather cityWeatherData = {weatherData} />
      </Container>  
      <div></div> 
    </Container>
    //updatedCity={updatedCity} setUpdatedCity={setUpdatedCity}*/
  );

}

export default Apps;