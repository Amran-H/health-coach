import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, price, img, description } = service;
    return (
        <div className="hover:border card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className=' text-2xl font-semibold'>${price}</p>


                <p className='text-lg'>{description.length > 100 ?
                    <p>{description.slice(0, 100) + '...'}</p>
                    :
                    <p>{description}</p>
                }</p>


                <div className="card-actions justify-start">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;