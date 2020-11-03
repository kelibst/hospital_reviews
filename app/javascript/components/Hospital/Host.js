import React from 'react'

const Host = (props) => {
    const { hospital } = props
    
    return (
        <div className="card shadow-lg border-0">
            <img src={hospital.body.image} className="card-img-top" alt="data.name"/>
            <h1 className="card-title display-6 my-3 text-uppercase text-center font-weight-bolder">{ hospital.name }</h1>
            <div className="card-body">
                <div className="card-sc-btn">{ hospital.body.address }</div>
                <div className="card-sc-btn">{ hospital.body.country }</div>
            </div> 
        </div>
    )
}

export default Host
