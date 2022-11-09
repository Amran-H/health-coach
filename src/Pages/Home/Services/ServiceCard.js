import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ServiceCard = ({ service }) => {
    const { _id, title, price, img, description } = service;
    return (
        <div className="hover:border card card-compact bg-base-100 shadow-xl">
            <figure>

                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>


            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className=' text-2xl font-semibold'>${price}</p>


                <p className='text-lg'>{description.length > 100 ?
                    <p>{description.slice(0, 100) + '...'}</p>
                    :
                    <p>{description}</p>
                }</p>


                <div className="card-actions justify-start">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary hover:bg-green-500">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;