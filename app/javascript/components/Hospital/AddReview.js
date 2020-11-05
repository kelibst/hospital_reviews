import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import CountryList from '../../../assets/CountryList'



const AddReview = (props) => {
  const [hospital, setHospital] = useState(initialState)
    const { show, close } = props

    const handleChange = (e) => {
      const { id, value } = e.target

      console.log(id, value)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      
      close()
    }

    return (
        <div className="form-container">
          <Modal.Body>
            <Form onSubmit={handleSubmit}>  

              <Form.Group controlId="name">
                <Form.Label>Review title</Form.Label>
                <Form.Control type="text" placeholder="Great hospital" onChange={handleChange} />
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

              <Form.Group controlId="description">
                <Form.Label>Enter Review Description</Form.Label>
                <Form.Control placeholder="The nurses here were really great!" as="textarea" rows={3} onChange={ handleChange } />
              </Form.Group>

              <Form.Group controlId="image">
                <Form.Label>Enter the hospital image link</Form.Label>
                <Form.Control type="text" onChange={handleChange}/>
              </Form.Group>
            </Form> 
          </Modal.Body>   

          <Modal.Footer>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
          </Modal.Footer>
        </div>
    )
}

export default AddReview
