import React from 'react';
import message from '../../../images/message.png';
const ReviewDetail = (props) => {
    const {name, job, desc} = props.rev
    return (
        <div className="card review-box text-dark text-center shadow-lg bg-white rounded ">
                    <div className="d-flex justify-content-center pt-5 service-items">
                        <div className="">
                            <div className="service-head">
                                <div className="review-headline">
                                    <img src={message} alt="" />
                                </div>
                                <div className="review-dsc">
                                    <p>{desc}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="service-footer">
                                <div className="footer-desc">
                                    <h3>{name}</h3>
                                    <h6 className="brand-color"> {job}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default ReviewDetail;