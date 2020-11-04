import React from 'react'
import { Link } from 'react-router-dom'

const HospitalList = ({ data }) => {

    return (
        <div className="hospital card shadow-lg p-0 m-3 col-sm-4 col-xl-3">
            <div className="hospital-image">
               <Link to={`hospitals/${data.body.slug}`}> 
                    <img src={data.body.image} className="card-img-top" alt="data.name"/>
               </Link>
            </div>
            <div className="card-body">
                <h6 className="card-title text-uppercase font-weight-bolder">{ data.name }</h6>
                <div className="card-overview">
                    <div className="d-flex align-items-center"><div className="font-weight-bolder">Address:</div><div className="card-sc-btn">{ data.body.address }</div></div>
                    
                    <div className="d-flex align-items-center"><div className="font-weight-bolder">City</div><div className="card-sc-btn">{ data.body.city }</div></div>
                    <div className="d-flex align-items-center"><div className="font-weight-bolder">Address</div><div className="card-sc-btn">{ data.body.country }</div></div>
                </div>
                
                <div className="card-actions">
                    <Link to={`hospitals/${data.body.slug}`} className="btn btn-primary">
                        View
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HospitalList
