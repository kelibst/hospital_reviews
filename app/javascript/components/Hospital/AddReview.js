import Axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Icofont from "react-icofont";



const AddReview = (props) => {
  const [review, setReview] = useState({});
  const [validated, setValidated] = useState(false);
  const { hospital, show, close } = props;

  const handleChange = (e) => {
    // if(score){
    //   const sco = {"score": score =null}
    // }
    const { id, value } = e.target;
    setReview(Object.assign({}, review, { [id]: value }));
    console.log(review)
  };

  const ratingsOptions = [1,2,3,4,5];

  const handleSubmit = (e) => {
    e.preventDefault();
    const csrfToken = document.querySelector("[name=csrf-token]").content;
    const { id: hospital_id } = hospital;

    Axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
    Axios.post("/api/v1/reviews.json", { review, hospital_id })
      .then((res) => {
        console.log(res);
        // setReview({title: "", description: "", score: "", reviewer_name: ""})
      })
      .catch((err) => {
        console.log(err);
        debugger;
      });
    close();
  };

  return (
    <div className="form-container">
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="reviewer_name">
            <Form.Label>Enter your Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Keli Booster"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="title">
            <Form.Label>Enter the title for this review.</Form.Label>
            <Form.Control
              type="text"
              placeholder="Great hospital"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Describe your experience.</Form.Label>
            <Form.Control
              placeholder="The nurses here were really great!"
              as="textarea"
              rows={3}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="score">
            {ratingsOptions.map((score) => {
              return (
                <Form.Check
                  inline
                  type="radio"
                  name="rating"
                  id={score}
                  value={score}
                  label={<Icofont icon="star-shape" className="font-weight-bolder stars"/>}
                  key={score}
                  onChange={()=>{
                    setReview(Object.assign({}, review, { "score": score }));
                  }}
                />
              );
            })}
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button type="submit" variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default AddReview;
