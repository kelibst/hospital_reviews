import Axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import CountryList from "../../../assets/CountryList";



const AddHospitalForm = (props) => {

  const [validated, setValidated] = useState(false);
  const {initalHospital, status, show, close } = props;  
  
  const [hospital, setHospital] = useState(initalHospital);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setHospital(Object.assign({}, hospital, { [id]: value }));
  };

//   const ratingChanged = (newRating) => {
//     setReview(Object.assign(initalReview, review, { "score": newRating }));
//   };


  const handleSubmit = (e) => {
    e.preventDefault();
    const csrfToken = document.querySelector("[name=csrf-token]").content;
    
    if(status === 'Add'){
      // const { id: hospital_id } = hospital;
      console.log(hospital)
      Axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
      Axios.post("/api/v1/hospitals.json", { hospital })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          debugger;
        });
      close();
    }else if(status === "Update"){
      console.log(review)
      Axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
      Axios.patch(`/api/v1/reviews/${review.id}.json`, { review })
        .then((res) => {
          debugger
        })
        .catch((err) => {
          debugger;
        });
      close();
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
              // value={review.reviewer_name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="country">
          <Form.Label>Select a Country</Form.Label>
          <Form.Control as="select" onChange={handleChange}>
            { CountryList.map( country => (
              <option key={country}>{country}</option>
            ))}
            
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Enter the address of the hospital</Form.Label>
          <Form.Control type="text" onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>Enter your City Name</Form.Label>
          <Form.Control type="text" placeholder="Accra" onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Enter the hospital image link</Form.Label>
          <Form.Control type="text" onChange={handleChange}/>
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
