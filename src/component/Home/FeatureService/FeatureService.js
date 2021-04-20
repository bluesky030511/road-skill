import React from 'react';
import './FeatureService.css';


const FeatureService = () => {
    return (
        <section className="container feature">
      
            <div className="d-flex justify-content-center">
                <div className="text-dark feature-service-box text-center shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="p-4">
                        <h4>New Programms</h4>
                    </div>
                </div>

                <div className=" text-dark feature-service-box text-center shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="p-4">
                        <h4>Expert Teachers</h4>
                    </div>
                </div>
                <div className=" text-dark text-center feature-service-box shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="p-4">
                        <h4>Education System</h4>
                    </div>
                </div>
            </div>
         
        </section >
    );
};

export default FeatureService;