import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = (props) => {
    const { name, price, desc, _id } = props.service;
    return (
        <div className="card text-dark service-box text-center shadow-lg p-3 bg-white rounded ml-3">
            <div className="d-flex justify-content-center pt-5 service-items">
                <div className="">
                    <div className="service-head">
                        <div className="service-headline">
                            <h4>{name}</h4>
                        </div>
                        <div className="service-price d-flex justify-content-center">
                            <div>
                                <h4>{price}</h4>
                                <h4>USD</h4>
                            </div>
                        </div>
                        <div>
                            <p>4% Per Transaction </p>
                        </div>
                    </div>
                    <hr />
                    <div className="service-footer">
                        <div className="service-desc">
                            <p>{desc}</p>
                        </div>
                    </div>
                    <Link to={"/checkout/"+_id}>
                        <button className="btn btn-primary">GET Started</button>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default ServiceDetail;