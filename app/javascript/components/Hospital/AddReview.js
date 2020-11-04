import React from 'react'
import Form from 'react-bootstrap/Form'
import CountryList from '../../../assets/CountryList'
const AddReview = () => {
    return (
        <Form>  

                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Add Your Review</Form.Label>
                  <Form.Control type="text" placeholder="Great hospital" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Select a Country</Form.Label>
                  <Form.Control as="select">
                    { CountryList.map( country => (
                      <option key={country}>{country}</option>
                    ))}
                    
                  </Form.Control>
                </Form.Group>
  
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Enter Review Description</Form.Label>
                  <Form.Control placeholder="The nurses here were really great!" as="textarea" rows={3} />
                </Form.Group>
              </Form>
    )
}

export default AddReview
