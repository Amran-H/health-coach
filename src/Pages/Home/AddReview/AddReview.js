import React from 'react';

const AddReview = ({ service }) => {

    // const { _id, title, price, img, description } = service;

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const comment = form.comment.value;

        const order = {

        }

    }
    return (
        <div>
            <form onSubmit={handlePlaceReview}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    <input name='name' type="text" placeholder="Name" className="input input-bordered " />
                    <input name='phone' type="text" placeholder="Phone" className="input input-bordered " />
                    <input name='email' type="text" placeholder="Email" className="input input-bordered " />

                </div>
                <textarea name='comment' className="textarea input-bordered mt-4 w-full" placeholder="Your comment "></textarea>

                <div className=' text-center '>
                    <input className='btn mt-4 hover:bg-green-600' type="submit" value="Add your review" />
                </div>

            </form>
        </div>
    );
};

export default AddReview;