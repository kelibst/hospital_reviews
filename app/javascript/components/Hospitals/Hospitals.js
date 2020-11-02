import Axios from 'axios'
import React, {useState, useEffect } from 'react'
import HospitalList from './HospitalList'
import './hospitals.scss'
const Hospitals = () => {
    const [ hospitals, setHospitals ] = useState([])

    
    useEffect(() => {
        // get all the hospitals

        Axios.get('api/v1/hospitals.json')
        .then(res => {
            
            setHospitals(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [hospitals.length])

    const hospitalList = hospitals.length ? (
        hospitals && hospitals.map (hospital => <HospitalList key={hospital.name} data = { hospital } /> )
    ) : (
        (<div className="loading"> Loading</div> )
    )
   
    return (
        <div className="hospital mx-3">
            <h1 className="text-dark display-5 mb-5 font-weight-bolder"> List of All Hospitals</h1>
            <div className="row m-0">
                { hospitalList }
            </div> 
        </div>
        
    );
    
}

export default Hospitals
