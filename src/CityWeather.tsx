 import { Card, CardGroup, ListGroup } from "react-bootstrap";
import './CityWeather.css';
import weatherIcon from './weather-icon.png';
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "./store";
import { BsArrowRepeat, BsX } from "react-icons/bs";

function CityWeather(){
  
  const unitSymbol = useSelector((state: RootState) => state.unitSymbol);
  const cityWeatherData = useSelector((state: RootState) => state.weatherData);

  const dispatch = useDispatch();

  const handleRemoveItem = (id:number) => {
    dispatch({ type: 'REMOVE_ITEM', id: id });
  }

  const handleRefreshItem = (id:number,cityName:string)=>{
    dispatch({ type: 'UPDATE_CITY', city: cityName });
  }
    return (
      <>
        {cityWeatherData.map((data) => (
        <Card className="weatherCard" >
          <Card.Title className="cardTitle" >
            <span className="headerTitle"> {data.weatherData.name} </span> 
            <span className="headerIcons">
              <BsArrowRepeat className="refreshIcon" onClick={() => handleRefreshItem(data.id,data.weatherData.name)} ></BsArrowRepeat>
              <BsX  onClick={() => handleRemoveItem(data.id)} ></BsX>
            </span>
          </Card.Title>
          <Card.Body className="weatherCardBody"> 

            <CardGroup>
              <Card.Text className="weatherCurrentTemp">{data.weatherData.main.temp.toFixed(2)}{unitSymbol}</Card.Text>
              <Card.Img className="weatherIcon" src={weatherIcon} />
            </CardGroup>
             <ListGroup variant="flush">
              <ListGroup.Item>Low: {data.weatherData.main.temp_min.toFixed(2)}{unitSymbol}</ListGroup.Item>
              <ListGroup.Item>High: {data.weatherData.main.temp_max.toFixed(2)}{unitSymbol}</ListGroup.Item>
              <ListGroup.Item>Humidity: {data.weatherData.main.humidity}%</ListGroup.Item>
            </ListGroup>               
          </Card.Body>
        </Card>
      ))}
      </>
          
    )
  }

  export default CityWeather;