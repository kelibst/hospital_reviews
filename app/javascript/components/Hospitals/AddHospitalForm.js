import Axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Redirect, useHistory } from "react-router-dom";
import CountryList from "../../../assets/CountryList";
import { ErrorContext } from "../../contexts/ErrorContext";
import { HospitalsContext } from "../../contexts/HospitalsContext";
import AlertContainer from "../containers/AlertContainer";



const AddHospitalForm = (props) => {
  const  { hospitals, addNewHospital }  =  useContext(HospitalsContext)
  const {error, addError} = useContext(ErrorContext)
  console.log(error)
  let history = useHistory()
  const [validated, setValidated] = useState(false);
  const {initalHospital, status, show, close } = props;  
  const [hospital, setHospital] = useState(initalHospital);
  // const { country, address, city, image} = hospital.body
  const handleChange = (e) => {
    const { id, value } = e.target;
    setHospital(Object.assign({}, hospital, { [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const csrfToken = document.querySelector("[name=csrf-token]").content;
    
    if(status === 'Add'){
      hospital.name = hospital.name.trim();
      
      Axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
      Axios.post("/api/v1/hospitals.json", { hospital })
        .then((res) => {
          const newHost = [...hospitals, res.data]
          addNewHospital(newHost)
          history.push(`/hospitals/${res.data.body.slug}`)
        })
        .catch((err) => {
          if (err.response) {
            addError(err.response)
          } else if (err.request) {
            addError(err.request)
          } else {
            message = {error: {
              name: "something went wrong"
            }}
            addError(message)
          }
        });
      close();
    }else if(status === "Update"){
      const { slug } = hospital.body
      hospital.name = hospital.name.trim();
      console.log(hospital)
      
      Axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
      Axios.patch(`/api/v1/hospitals/${slug}.json`, { hospital })
        .then((res) => {
          const newHost = [...hospitals, res.data]
          addNewHospital(newHost)
          console.log(res.data, hospitals)
        })
        .catch((err) => {
          debugger;
        });
     close()
    }
    
    
  };

  return (
    <div className="form-container">
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Enter Hospital Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Benedicta Hospital"
              value={hospital.name ? hospital.name : ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="country">
          <Form.Label>Select a Country</Form.Label>
          <Form.Control as="select" value={hospital.id ? hospital.body.country : hospital.country} onChange={handleChange}>
            { CountryList.map( country => (
              <option key={country}>{country}</option>
            ))}
            
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Enter the address of the hospital</Form.Label>
          <Form.Control value={hospital.id ? hospital.body.address : hospital.address} type="text" onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>Enter your City Name</Form.Label>
          <Form.Control value={hospital.id  ? hospital.body.city : hospital.city} type="text" placeholder="Accra" onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Enter the hospital image link</Form.Label>
          <Form.Control value={ hospital.id ? hospital.body.image : hospital.image} type="text" onChange={handleChange}/>
        </Form.Group>
      </Form> 
      </Modal.Body>

      <Modal.Footer>
        <Button type="submit" variant="primary" onClick={handleSubmit}>
          { `${status} Hospital`}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default AddHospitalForm;
