import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import Loading from '../containers/Loading'
import notFound from '../containers/notFound'
import Host from './Host'
import Review from './Review'

const Hospital = (props) => {
     const [hospital, setHospital] = useState([])
     const [loading, setLoading] = useState(true)
    const { slug } = props.match.params
    
     useEffect(() => {
         // get individual hospital
         Axios.get(`http://127.0.0.1:3000/api/v1/hospitals/${slug}.json`)
         .then(res => {
             setLoading(false)
             setHospital(res.data)
         }).catch(err => {
            err.response.status === 404 && props.history.push('/404')
         })
     }, [hospital.length])

        const reviews_all = hospital.reviews ? hospital.reviews.reviews_all : null
     console.log(reviews_all)
    const displayHospital = hospital.id ? (
        <div className="reviews my-2 py-3 col-sm-10 col-md-8 mx-auto">
        <Host hospital={hospital}/>
        
            <div className="card shadow-lg border-0 reviews my-3">
                    <h4 className="card-title my-3 text-center font-weight-bolder my-3 text-uppercase"> Reviews</h4>
                    <div className="card-body">
                    { reviews_all ? (
                        reviews_all && reviews_all.map( review => (
                            <Review review = {review} key={review.updated_at} />
                        ))
                        
                    ) : (
                        <Loading />
                    )}
                    </div>
            </div>
        </div>
    ) : (
        <div className="error">
            {loading ?  <Loading /> : "Error" }
        </div>
    )

    return (
        <div className="container">
            { displayHospital }
        </div>
    )
}

export default Hospital
