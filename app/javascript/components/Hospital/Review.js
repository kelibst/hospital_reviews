import Axios from 'axios';
import React, { useContext } from 'react'
import Icofont from 'react-icofont';
import ReactStars from "react-rating-stars-component";
import { ReviewsContext } from '../../contexts/ReviewsContext';
import UpdateReview from './updateReview';

const Review = (props) => {
    const {reviews, updateReviews, currentReview, updateCurrentReview  } = useContext(ReviewsContext)
    const {review} = props
   
    

    const handleClick = (e) =>{
        const csrfToken = document.querySelector("[name=csrf-token]").content;
        if(e.target.classList.contains('remove')){
            Axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
            Axios.delete(`/api/v1/reviews/${review.id}.json`)
            .then(res => {
                let newReviews = reviews.filter(rev => rev.id !== review.id)
               updateReviews(newReviews)
            }).catch(err => {
                debugger
            })
        }
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
                <button className="btn border-0 remove" onClick={handleClick}>{<Icofont icon="bin" className="text-danger remove"></Icofont>}</button>
                <UpdateReview  review = { review } status="Update" />
            </div>
        </div>
    )
}

export default Review
