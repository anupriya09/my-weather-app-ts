 import { Card, CardGroup, ListGroup } from "react-bootstrap";
import { WeatherDataArray } from "./WeatherInterface";
import './CityWeather.css';
import weatherIcon from './weather-icon.png';

function CityWeather(props:{cityWeatherData: WeatherDataArray; }){
    return (
      <>
        {props.cityWeatherData.map((data) => (
        <Card className="weatherCard" >
          <Card.Title className="cardTitle" >{data.name}</Card.Title>
          <Card.Body className="weatherCardBody"> 

            <CardGroup>
              <Card.Text className="weatherCurrentTemp">{data.main.temp}°C</Card.Text>
              <Card.Img className="weatherIcon" src={weatherIcon} />
            </CardGroup>
             <ListGroup variant="flush">
              <ListGroup.Item>Low: {data.main.temp_min}°</ListGroup.Item>
              <ListGroup.Item>High: {data.main.temp_max}°</ListGroup.Item>
              <ListGroup.Item>Humidity: {data.main.humidity}%</ListGroup.Item>
            </ListGroup>               
          </Card.Body>
        </Card>

        /*<CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        </CardGroup>*/
      ))}
      </>
          
    )
  }

  export default CityWeather;