import React from 'react';

const Placed = (props) => {
    const {Name, name, price} = props.order
    return (
        <div className="d-flex justify-content-center">
            <div className="m-3 p-3 shadow w-75 rounded text-center">
            <h3 className="text-success">Welcome: {Name}</h3>
            <h5 className="text-success">Your order submitted successfully</h5>
            <h5>You have ordered: {name}</h5>
            <h5>Your total price: ${price}</h5>
            <h4>Thanks for your order. Stay touched with us.</h4>
            </div>
        </div>
    );
};

export default Placed;