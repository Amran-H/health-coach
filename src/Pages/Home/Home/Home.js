import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Services></Services>
            <div className="card-actions justify-center m-10">
                <Link to='/services'>
                    <button className="btn btn-primary ">See All Services</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;