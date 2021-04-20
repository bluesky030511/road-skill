import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white text-decoration-none">
                         <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white text-decoration-none">
                        <span>Home</span>
                    </Link>
                </li>
               <div>
                    <li>
                        <Link to="/lesson" className="text-white text-decoration-none">
                            <span>All Students</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/AddServices" className="text-white text-decoration-none">
                            <span>Add Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/delete" className="text-white text-decoration-none">
                            <span>Delete Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addConstructor" className="text-white text-decoration-none" >
                             <span>Add Trainer</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addReview" className="text-white text-decoration-none" >
                            <span>Add Review</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <Link to="#" className="text-white text-decoration-none">
                     <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;