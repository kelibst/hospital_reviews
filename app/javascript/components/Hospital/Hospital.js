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

        const reviews_all = hospital.reviews ? hospital.reviews.reviews_all : null
     console.log(reviews_all)
    const displayHospital = hospital.id ? (
        <div className="reviews my-2 py-3 col-sm-10 col-md-8 mx-auto">
        
        
        <div className="card">
        <img src={hospital.body.image} className="card-img-top" alt="data.name"/>
            <h1 className="card-title display-6 my-3 text-uppercase text-center font-weight-bolder">{ hospital.name }</h1>
            <div className="card-body">
                <div className="card-sc-btn">{ hospital.body.address }</div>
                <div className="card-sc-btn">{ hospital.body.country }</div>
            </div> 
        </div>
        
            <div className="card reviews my-3">
                    <h4 className="card-title my-3 text-center text-uppercase">{hospital.name } Reviews</h4>
                    <div className="card-body">
                    { reviews_all ? (
                        reviews_all.map( review => (
                            <div className="card reviews">
                            <h4 className="card-title ">{review.title } </h4>
                            <div className="card-sc-btn"> By{ review.reviewer_name }</div>
                                <div className="card-body">
                                    { review.description}
                                </div>
                                <div className="review-score card-sc-btn">{ review.score }</div>
                            </div>
                        ))
                        
                    ) : (
                        <div className="error">No reviews yet</div>
                    )}
                    </div>
            </div>
        </div>
    ) : (
        <div className="error">
            Sorry an error occured
        </div>
    )

    return (
        <div className="container">
            { displayHospital }
        </div>
    )
}

export default Hospital
