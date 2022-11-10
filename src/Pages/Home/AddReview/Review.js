import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Review = () => {

    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState({});


    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            {reviews.length}
        </div>
    );
};

export default Review;