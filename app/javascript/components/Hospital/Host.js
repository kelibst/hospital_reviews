import React from 'react'
import ReviewForm from './ReviewForm'
import ReactStars from "react-rating-stars-component";
import styled from 'styled-components';

const Rating =  styled.div`
    display: flex;
    justify-content: space-around;
    margin: 2rem 0;
`;

const Host = (props) => {
    const { hospital } = props
    const { address, country, image, score} = hospital.body
    return (
        <div className="card shadow-lg border-0">
            <img src={image} className="card-img-top" alt="data.name"/>

            <h1 className="card-title display-6 my-3 text-uppercase text-center font-weight-bolder">{ hospital.name }</h1>
            <Rating>
                { <ReactStars
                    value={Number(score)}
                    count={5}
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                />}
                <h6 className="font-weight-bolder display-6">Rated {score} out of 5</h6>
            </Rating>
            

            <div className="card-body">
               <div className="card-overview">
                    <span className="font-weight-bolder">Address:</span><span className="card-sc-btn">{ address }</span>
                    <span className="font-weight-bolder">Country:</span> <span className="card-sc-btn">{ country }</span>
               </div>

                <div className="btn-container mx-auto my-5">
                    <ReviewForm hospital = {hospital}/>
                </div>
            </div> 
        </div>
    )
}

export default Host
