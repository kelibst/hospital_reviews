import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AddHospitalForm from './AddHospitalForm'
import Icofont from 'react-icofont'


const AddHospital = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div >
            <Button className="btn btn-success" onClick={handleShow}><Icofont icon="ui-add"></Icofont> 
                Add a Hosptal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title><span className="font-weight-bolder"> Add a new Hospital </span> </Modal.Title>
                </Modal.Header>
                <AddHospitalForm initalHospital={{}} status="Add" close={handleClose} show={handleShow}/>
            </Modal>
        </div>
    )
}

export default AddHospital
