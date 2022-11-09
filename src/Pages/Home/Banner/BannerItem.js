import React from 'react';
import './Banner.css'

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousal-img'>
                <img src={image} alt="" className=" w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-24 top-1/4">
                <p className='text-6xl font-bold text-white'>Your very own <br /> personal health coach</p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-24 top-2/4">
                <p className=' text-xl text-white'>Start working on your body today, and with our individual fitness program,  already <br />
                    in 90 days you will see a totally different girl in the mirror!</p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-24 top-2/3">
                <button className="btn btn-outline btn-warning  ">About me</button>
            </div>


            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;