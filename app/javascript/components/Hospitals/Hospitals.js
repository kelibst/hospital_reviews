import Axios from 'axios'
import React, {useState, useEffect } from 'react'
import './hospitals.scss'
const Hospitals = () => {
    const [ hospitals, setHospital ] = useState([])

    
    useEffect(() => {
        // get the all the hospitals

        Axios.get('api/v1/hospitals.json')
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
        return () => {
            cleanup
        }
    }, [hospitals.length])
    return (
        <div>
            This is hospital default view for our app
        </div>
    )
}

export default Hospitals
