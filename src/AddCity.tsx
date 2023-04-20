import { useRef, useState } from "react";
import { Form } from "react-bootstrap";

function AddCity(props:{updatedCity:string, setUpdatedCity:React.Dispatch<React.SetStateAction<string>>}){


    const [city,setCity] = useState<string>();
    
    const handleOnChange = (event : any) => {
      setCity(event.target.value);
    };
    const inputCity = useRef<HTMLInputElement>(null);

    const handleKeyDown = (event : any) => {
      if (event.key === 'Enter') {
        // 👇 Get input value
        if (inputCity.current != null) {
          props.setUpdatedCity(inputCity.current?.value);
          setCity(inputCity.current?.value);
        }
      }
    };
  
    return (    
    <Form onSubmit={e => { e.preventDefault(); }}>
      <Form.Group className="mb-3 weatherForm">
        <Form.Label htmlFor="">My Weather App</Form.Label>
        <Form.Control 
          as="input"
          id={props.updatedCity}
          name="city"
          value={city}
          ref={inputCity}
          onKeyDown={handleKeyDown} 
          onChange={handleOnChange}
          className="cityName" 
          type="text" 
          placeholder="Enter city"/>
      </Form.Group >
    </Form >
    );
  }

  export default AddCity;