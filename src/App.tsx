import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Form  from 'react-bootstrap/Form';
import { Container,Card } from 'react-bootstrap';
import './App.css'

interface WeatherData{
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

interface WeatherDataMain{
  temp:number,
  feels_like:number,
  temp_min:number,
  temp_max:number,
  pressure:number,
  humidity:number
}
interface WeatherDataArray extends Array<WeatherData>{}

function CityWeather(props:{cityWeatherData: WeatherDataArray;}){
  return (
    <>
      {props.cityWeatherData.map((data) => (
      <Card style={{ width: 'fit-content' , border: '0.1rem black solid', padding:'0.5rem', margin:'1rem',textAlign:'center'}}>
        <Card.Body>
          <Card.Title>Weather Summary</Card.Title>
          <Card.Text>{data.name}</Card.Text>    
          <Card.Text>{data.main.temp}</Card.Text>            
          <Card.Text>{data.main.temp_min}</Card.Text>  
          <Card.Text>{data.main.temp_max}</Card.Text> 
          <Card.Text>{data.main.humidity}</Card.Text>      
        </Card.Body>
      </Card>
    ))}
    </>
        
  )
}

function AddCityForm(){

  const [city, setCity] = useState<string>('');
  const [updatedCity, setUpdatedCity] = useState<string>('');

  const handleChange = (event : any) => {
    setCity(event.target.value);
  };

  const handleKeyDown = (event : any) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      setUpdatedCity(city);
    }
  };

  return (    
  <Form onSubmit={e => { e.preventDefault(); }}>
    <Form.Group className="mb-3 weatherForm" controlId="formBasicEmail">
      <Form.Label>My Weather App</Form.Label>
      <Form.Text>{city}</Form.Text>
      <Form.Control 
        id="city"
        name="city"
        value={city}
        onChange={handleChange}
        onKeyDown={handleKeyDown} 
        className="cityName" 
        type="text" 
        placeholder="Enter city"/>
    </Form.Group >
  </Form >
  );
}


function App() {
  
  const initialWeatherData : WeatherData = { 
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

  const [weatherData, setWeatherData] = useState<WeatherDataArray>([initialWeatherData]);
 
  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await axios('https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=36f0ce85887320e897dbbc07cf2b74fc');
      setWeatherData([...weatherData,response.data]);
    };
    fetchWeatherData();
  }, []);

  return (
    <Container  className="mainContainer" >
      <AddCityForm />
      <div className="weatherContainer">
      <CityWeather cityWeatherData = {weatherData}/>
      </div>  
      <div></div> 
    </Container>
  );

}

export default App;