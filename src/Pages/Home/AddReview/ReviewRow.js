import React from 'react';

const ReviewRow = ({ review }) => {
    const { _id, customer, comment, email, } = review;
    return (
        <div>

            <tr>

                <td>{customer}</td>
                <td>{comment}</td>
                <td>{email}</td>
            </tr>
        </div>
    );
};

export default ReviewRow;