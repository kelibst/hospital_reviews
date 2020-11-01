import Axios from 'axios'
import React, {useState, useEffect } from 'react'
import HospitalList from './HospitalList'
import './hospitals.scss'
const Hospitals = () => {
    const [ hospitals, setHospitals ] = useState([])

    
    useEffect(() => {
        // get the all the hospitals

        Axios.get('api/v1/hospitals.json')
        .then(res => {
            console.log(res)
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
   
    return hospitalList;
    
}

export default Hospitals
