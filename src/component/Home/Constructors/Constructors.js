import React, { useEffect, useState } from 'react';
import Constructor from '../Constructor/Constructor';

const Constructors = () => {
    const [constructors, setConstructors] = useState([])
    useEffect( () => {
        fetch('https://cryptic-lake-39562.herokuapp.com/constructors')
        .then(res => res.json())
        .then(data => setConstructors(data))
    }, [])


    return (
        <div className="container services">
            <div className="service-desc text-center">
                <h1 className="services-headline">Our <span className="brand-color">Expert Trainer</span></h1>
                <div className="py-3">
                    <p>The School offers the Following services for Teenages firs-time Drivers , new <br /> adult learnser and existing learners and existing drivers with lapsed licences.</p>
                </div>
            </div>
            <hr />


            <section className="doctors">
            <div className="container">
                {/* <h5 className="text-center  text-primary mb-5">Our Doctors</h5> */}
                <div className="row">
                    {
                        console.log("length is",constructors.length)
                    }
                    {
                     constructors.map(constructor =><Constructor key={constructor._id} constructor={constructor} />)
                    }
                    
                </div>
            </div>
        </section>



        </div>
    );
};

export default Constructors;