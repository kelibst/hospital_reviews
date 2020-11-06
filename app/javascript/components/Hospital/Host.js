import React from 'react'
import ReviewForm from './ReviewForm'

const Host = (props) => {
    const { hospital } = props
    
    return (
        <div className="card shadow-lg border-0">
            <img src={hospital.body.image} className="card-img-top" alt="data.name"/>
            <h1 className="card-title display-6 my-3 text-uppercase text-center font-weight-bolder">{ hospital.name }</h1>
            <div className="card-body">
               <div className="card-overview">
                    <span className="font-weight-bolder">Address:</span><span className="card-sc-btn">{ hospital.body.address }</span>
                    <span className="font-weight-bolder">Country:</span> <span className="card-sc-btn">{ hospital.body.country }</span>
               </div>

                <div className="btn-container mx-auto my-5">
                    <ReviewForm hospital = {hospital}/>
                </div>
            </div> 
        </div>
    )
}

export default Host
