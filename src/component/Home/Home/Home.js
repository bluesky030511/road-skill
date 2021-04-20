import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Constructors from '../Constructors/Constructors';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Review></Review>
            <Constructors></Constructors>
            <Footer></Footer>
        </div>
    );
};

export default Home;