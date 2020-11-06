import React from 'react'

const Review = (props) => {
    const {review} = props
    
    return (
        <div className="card p-3 my-3 reviews">
            <h4 className="card-title text-capitalize ">{review.title } </h4>
            <div className="card-overview">
                <span className="font-weight-bolder">Author:</span><span className="card-sc-btn">{ review.reviewer_name }</span>
                <div className="review-score card-sc-btn">{ review.score }</div>
            </div>
            
            <div className="card-body border-sm">
                
                { review.description}
            </div>
        </div>
    )
}

export default Review
