import React from 'react'
import Icofont from 'react-icofont';
import ReactStars from "react-rating-stars-component";

const Review = (props) => {
    const {review} = props
    const handleClick = (e) =>{
        console.log(e)
    }
    return (
        <div className="card p-3 my-3 reviews">
            <h4 className="card-title text-capitalize ">{review.title } </h4>
            <div className="card-overview">
                <span className="font-weight-bolder">Author:</span><span className="card-sc-btn">{ review.reviewer_name }</span>
                { <ReactStars
                    value={review.score}
                    count={5}
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                  />}
            </div>
            
            <div className="card-body border-sm">
                { review.description}
                
            </div>
            <div className="card-foot">
                <button className="btn btn-danger" onClick={handleClick}>{<Icofont icon="bin"></Icofont>}</button>
                <button className="btn btn-success" onClick={handleClick}>{<Icofont icon="quill-pen"></Icofont>}</button>
            </div>
        </div>
    )
}

export default Review
