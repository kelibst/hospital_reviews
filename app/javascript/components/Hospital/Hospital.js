import Axios from 'axios'
import React, { useEffect, useState } from 'react'

const Hospital = (props) => {
     const [hospital, setHospital] = useState([])
        const { slug } = props.match.params
     useEffect(() => {
         // get individual hospital
         Axios.get(`http://127.0.0.1:3000/api/v1/hospitals/${slug}.json`)
         .then(res => {
             console.log(res.data)
             setHospital(res.data)
         }).catch(err => {
             console.log(err)
         })
     }, [hospital.length])

    const displayHospital = hospital.id ? (
        <div className="card col-sm-10 col-md-8">
            <h1 className="card-title display-6 text-uppercase text-center font-weight-bolder">{ hospital.name }</h1>
            <div className="card-body">
                <div className="card-sc-btn">{ hospital.body.address }</div>
                <div className="card-sc-btn">{ hospital.body.country }</div>
            </div>
        </div>
    ) : (
        <div className="error">
            Sorry an error occured
        </div>
    )

    console.log(props)
    return (
        <div className="container">
            { displayHospital }
        </div>
    )
}

export default Hospital
