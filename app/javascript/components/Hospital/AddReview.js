import Axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ReactStars from "react-rating-stars-component";
import ReviewToast from "./ReviewToast";



const AddReview = (props) => {

  const [validated, setValidated] = useState(false);
  const { hospital, initialReview, status, show, close } = props;  
  review
  const [review, setReview] = useState(initialReview);
console.log(review)
  const handleChange = (e) => {
    const { id, value } = e.target;
    setReview(Object.assign({}, review, { [id]: value }));
  };

  const ratingChanged = (newRating) => {
    setReview(Object.assign(initialReview, review, { "score": newRating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const csrfToken = document.querySelector("[name=csrf-token]").content;
    
    if(status === 'Add'){
      const { id: hospital_id } = hospital;

      Axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
      Axios.post("/api/v1/reviews.json", { review, hospital_id })
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
          <Form.Group controlId="reviewer_name">
            <Form.Label>Enter your Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Keli Booster"
              value={review.reviewer_name ? review.reviewer_name : ''}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="title">
            <Form.Label>Enter the title for this review.</Form.Label>
            <Form.Control
              type="text"
              placeholder="Great hospital"
              value={review.title ? review.title : ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Describe your experience.</Form.Label>
            <Form.Control
              placeholder="The nurses here were really great!"
              as="textarea"
              rows={3}
              value={review.description ? review.description : ""}
              onChange={handleChange}
            />
          </Form.Group>


          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={42}
            value={review.score ? review.score : 0}
            activeColor="#ffd700"
          />
          
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button type="submit" variant="primary" onClick={handleSubmit}>
          { `${status} Review`}
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default AddReview;
