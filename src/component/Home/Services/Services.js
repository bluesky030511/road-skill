import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';


const Services = () => {
    const [services, setServies] = useState([])
    useEffect(() => {
        fetch("https://cryptic-lake-39562.herokuapp.com/Services")
            .then(res => res.json())
            .then(data => setServies(data))
    }, [])
    return (
        <div className="container services">
            <div className="service-desc text-center">
                <h1 className="services-headline"> <span className="brand-color">Our Driving</span> Services</h1>
                <div className="py-3">
                    <p>The School offers the Following services for Teenages firs-time Drivers , new <br /> adult learnser and existing learners and existing drivers with lapsed licences.</p>
                </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center service-items">
                   {
                    services.map(service =><ServiceDetail service={service} key={service._id}></ServiceDetail>)
                }

            </div>



        </div>
    );
};

export default Services;