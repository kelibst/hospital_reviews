import React from 'react'
import ReviewForm from './ReviewForm'

const Review = (props) => {
    const {review} = props
    const { hospital_name } =  props
    
    return (
        <div className="card border-0 reviews">
            <h4 className="card-title text-capitalize ">{review.title } </h4>
            <div className="card-sc-btn"> By{ review.reviewer_name }</div>
            <div className="review-score card-sc-btn">{ review.score }</div>
                <div className="card-body border-sm">
                    
                    { review.description}

                    <div className="btn-container my-5">
                        <h4 className="text-center font-weight-bolder mb-4">
                            Tell Us about your experience at { hospital_name }
                        </h4>
                        <ReviewForm />
                    </div>
                </div>
        </div>
    )
}

export default Review
