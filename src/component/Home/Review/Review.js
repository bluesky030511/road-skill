import React, { useEffect, useState } from 'react';
import './Review.css'
import message from '../../../images/message.png';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
const Review = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch("https://cryptic-lake-39562.herokuapp.com/Review")
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className="container services">
            <div className="service-desc text-center">
                <h1 className="services-headline">What <span className="brand-color">Client Says</span> <br /> About Us</h1>
                <div className="py-3">
                    <p>The School offers the Following services for Teenages firs-time Drivers , new <br /> adult learnser and existing learners and existing drivers with lapsed licences.</p>
                </div>
            </div>
            <hr />


            <div className="d-flex flex-wrap justify-content-center service-items ">
            {
                    review.map(rev =><ReviewDetail rev={rev} key={rev._id}></ReviewDetail>)
                }

                {/* <div className="card review-box text-dark text-center shadow-lg bg-white rounded ">
                    <div className="d-flex justify-content-center pt-5 service-items">
                        <div className="">
                            <div className="service-head">
                                <div className="review-headline">
                                    <img src={message} alt="" />
                                </div>
                                <div className="review-dsc">
                                    <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer </p>
                                </div>
                            </div>
                            <hr />
                            <div className="service-footer">
                                <div className="footer-desc">
                                    <h3>John Due</h3>
                                    <h6 className="brand-color"> Businessman</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}


            </div>



        </div>
    );
};

export default Review;