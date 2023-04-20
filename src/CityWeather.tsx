 import { Card } from "react-bootstrap";
import { WeatherDataArray } from "./WeatherInterface";

function CityWeather(props:{cityWeatherData: WeatherDataArray; }){
    return (
      <>
        {props.cityWeatherData.map((data) => (
        <Card style={{ width: 'fit-content' , border: '0.1rem black solid', padding:'0.5rem', margin:'1rem',textAlign:'center'}}>
          <Card.Body>
            <Card.Title>Weather Summary</Card.Title>
            <Card.Text>{data.name}</Card.Text>    
            <Card.Text>Current Temp : {data.main.temp}</Card.Text>            
            <Card.Text>Min Temp : {data.main.temp_min}</Card.Text>  
            <Card.Text>Max Temp : {data.main.temp_max}</Card.Text> 
            <Card.Text>Humidity : {data.main.humidity}</Card.Text>      
          </Card.Body>
        </Card>
      ))}
      </>
          
    )
  }

  export default CityWeather;