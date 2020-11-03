import React from 'react'

const Review = (props) => {
    const {review} = props
    return (
        <div className="card border-0 reviews">
            <h4 className="card-title text-capitalize ">{review.title } </h4>
            <div className="card-sc-btn"> By{ review.reviewer_name }</div>
                <div className="card-body">
                    { review.description}
                </div>
                <div className="review-score card-sc-btn">{ review.score }</div>
        </div>
    )
}

export default Review
