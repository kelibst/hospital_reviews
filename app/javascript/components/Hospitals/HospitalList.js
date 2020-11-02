import React from 'react'
import { Link } from 'react-router-dom'

const HospitalList = ({ data }) => {

    return (
        <div className="hospital card shaddow-sm p-0 m-2 col-sm-3 col-xl-2">
            <div className="hospital-image">
               <Link to={`hospitals/${data.body.slug}`}> 
                    <img src={data.body.image} className="card-img-top" alt="data.name"/>
               </Link>
            </div>
            <div className="card-body">
                <h6 className="card-title text-uppercase font-weight-bolder">{ data.name }</h6>
                <div className="card-sc-btn">{ data.body.address }</div>
                <div className="card-sc-btn">{ data.body.country }</div>
                <div className="card-actions">
                    <Link to={`hospitals/${data.body.slug}`} className="btn btn-primary">
                        Add Review
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HospitalList
