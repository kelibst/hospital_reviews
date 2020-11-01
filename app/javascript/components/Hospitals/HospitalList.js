import React from 'react'

const HospitalList = ({ data }) => {

    console.log(data)
    return (
        <div className="hospital">
            <div className="hospital-image">
                <img src={data.body.image} alt="data.name"/>
            </div>
            <div className="hospitals">
                { data.name}
                { data.body.address}
            </div>
        </div>
    )
}

export default HospitalList
