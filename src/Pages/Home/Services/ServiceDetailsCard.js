import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetailsCard = () => {
    const { title, img, price, description } = useLoaderData();

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl">{title}</h2>
                    <p className='font-bold text-xl text-orange-500'>Price: ${price}</p>
                    <p className='text-xl font-semibold w-3/4'>{description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsCard;