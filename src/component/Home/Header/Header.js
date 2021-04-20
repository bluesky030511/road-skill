import React from 'react';
import FeatureService from '../FeatureService/FeatureService';
import MainHeader from '../MainHeader/MainHeader';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <header>
            <Navbar></Navbar>
            <MainHeader></MainHeader>
            <FeatureService></FeatureService>
        </header>
    );
};

export default Header;