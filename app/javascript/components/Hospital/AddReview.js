import Axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ReactStars from "react-rating-stars-component";
import ReviewToast from "./ReviewToast";



const AddReview = (props) => {
  const [review, setReview] = useState({});
  const [validated, setValidated] = useState(false);
  const { hospital, show, close } = props;
  const [showToast, setShowToast] = useState(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setReview(Object.assign({}, review, { [id]: value }));
  };

  const ratingChanged = (newRating) => {
    setReview(Object.assign({}, review, { "score": newRating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const csrfToken = document.querySelector("[name=csrf-token]").content;
    const { id: hospital_id } = hospital;

    Axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
    Axios.post("/api/v1/reviews.json", { review, hospital_id })
      .then((res) => {
        console.log("got here");

        if(res.statusText === "Created"){
          console.log("got here")
          const toastInfo = {icon: "tick-mark", 
                      title:"Create Review", 
                      status: "Success", 
                      message: "Your Review was successfully created!"};
          <ReviewToast toastInfo ={toastInfo} />
        }
      })
      .catch((err) => {
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


          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={42}
            activeColor="#ffd700"
          />
          
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
