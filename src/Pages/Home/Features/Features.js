import React from 'react';
import FeatureItem from './FeatureItem';
import img1 from '../../../assets/feature/1.png'
import img2 from '../../../assets/feature/2.png'
import img3 from '../../../assets/feature/3.png'
import img4 from '../../../assets/feature/4.png'
import './Features.css'

const Features = () => {
    return (
        <div id='features' className='bg-gray-100 my-6 py-4 rounded-xl'>
            <p className='text-5xl text-center mb-6 '><span className='hover:italic'>Features</span></p>
            <div className='flex justify-center a-container'>
                <FeatureItem image={img1} title='Personal Support' details='More of a friend than a health coach.'></FeatureItem>
                <FeatureItem image={img2} title='Nutrition Plan' details='Healthy diet for body as well as for mind.'></FeatureItem>
                <FeatureItem image={img3} title='Workout Strategies' details='Taking care of your body is important.'></FeatureItem>
                <FeatureItem image={img4} title='First-Hand Advice' details='Broad experience is always a bonus.'></FeatureItem>
            </div>
        </div>
    );
};

export default Features;