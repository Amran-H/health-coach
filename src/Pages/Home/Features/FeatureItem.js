import React from 'react';
import './Features.css'

const FeatureItem = (props) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-5 border hover:bg-red-100">
            <figure className="px-10 pt-10">

                <div className=''>
                    <img src={props.image} alt='' className="rounded-xl" />
                </div>
            </figure>

            <div className="card-body items-center text-center ">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.details}</p>
            </div>

        </div>
    );
};

export default FeatureItem;