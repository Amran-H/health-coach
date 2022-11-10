import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const Review = () => {

    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review => <ReviewRow
                            key={review._id}
                            review={review}
                        >

                        </ReviewRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Review;