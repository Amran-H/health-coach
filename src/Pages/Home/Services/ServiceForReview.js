import React, { useEffect, useState } from 'react';
import AddReview from '../AddReview/AddReview';

const ServiceForReview = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center mb-6 '>
                <h1 className=' text-5xl text-center mb-6  '><span className='hover:italic'>Services</span></h1>
                <p className='text-xl'>I am delighted to be able to share with you the techniques I have learnt over the years <br />
                    that have brought me much happiness and success.</p>
            </div>
            <div className='grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>

                {
                    services.map(service => <AddReview
                        key={service._id}
                        service={service}
                    ></AddReview>)
                }
            </div>

        </div>
    );
};

export default ServiceForReview;