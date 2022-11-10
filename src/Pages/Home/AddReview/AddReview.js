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

        const review = {
            Customer: name,
            email: email,
            phone: phone,
            comment: comment,
        }

        fetch('https://health-coach-server-orpin.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review added succesfully')
                    form.reset();

                }
            })
            .catch(e => console.error(e));
    }
    return (
        <div>
            <form onSubmit={handlePlaceReview}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    <input name='name' type="text" placeholder="Name" className="input input-bordered " required />
                    <input name='phone' type="text" placeholder="Phone" className="input input-bordered " required />
                    <input name='email' type="text" placeholder="Email" className="input input-bordered " required />

                </div>
                <textarea name='comment' className="textarea input-bordered mt-4 w-full" placeholder="Your comment " required></textarea>

                <div className=' text-center '>
                    <input className='btn mt-4 hover:bg-green-600' type="submit" value="Add your review" />
                </div>

            </form>
        </div>
    );
};

export default AddReview;