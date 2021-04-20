import React from 'react';
import { Link } from 'react-router-dom';
import FeatureService from '../FeatureService/FeatureService';
import './MainHeader.css';
const MainHeader = () => {
    return (
        <main className="py-5">
            <div className="main-header">
                <div className="container-headline">
                    <h1 className="text-white">Orginal Provider <br /> <span className="headline-span">for Online Traffic School</span></h1>
                    <div className="hr-style">
                        <hr />
                    </div>
                </div>
                <div className="header-desc py-5">
                    <div className="header-top-desc text-white">
                        <ul className="header-list">
                            <li>No Time Requirements , study at Your Own pace</li>
                            <li>California DMV Licensed & Court Accepted</li>
                            <li>Avoid Points & License Susspension</li>
                        </ul>
                    </div>
                    <div className="header-bottom-desc d-flex">
                        <button className="btn btn-primary btn-block btn-lg"><Link to="/appointment" className="registerBtn">Register Now</Link></button>
                        <h1 style={{ color: "#f5ae2b" }}>73 USD</h1>
                        <p>Includes free court & DMV Susspension</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainHeader;