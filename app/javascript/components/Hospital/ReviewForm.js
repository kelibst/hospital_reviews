import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './ReviewForm.scss'
import AddReview from './AddReview'
const ReviewForm = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div >
            <Button variant="primary" className="btn-rev mt-4" onClick={handleShow}>
                Add a review
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Review Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <AddReview />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ReviewForm
