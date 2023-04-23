import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { useState } from "react";
import './AddCity.css';

export function AddCity(){

  const [inputCityValue, setInputCityValueLocal] = useState('');
  const city = useSelector((state: RootState) => state.city);
  const dispatch = useDispatch();

  const handleInputChange = (event: any) =>
  {
    const newValue = event.target.value;
    if (!/\d/.test(newValue)) 
    { // Check if the new value contains any digits
      setInputCityValueLocal(event.target.value);
    }
  }

  const handleSubmit = (event : any) => {
      event.preventDefault(); 
      dispatch({ type: 'UPDATE_CITY', city:inputCityValue });     
  }
  
  return ( 

    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 form-group" controlId="AddCityForm.Input">
        <Form.Label>Overview Weather Widget</Form.Label>
        <Form.Control 
          value={inputCityValue}
          onChange={handleInputChange}
          className="cityName" 
          type="text" 
          placeholder="Enter city"/>
      </Form.Group >
    </Form >
    );
  }

export default AddCity;