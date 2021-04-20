import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Payment from '../Payment/Payment';

const CheckOut = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const { name, price } = item;
    const [event, setEvent] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [shippingData, setShippingData] = useState(null)
    const { register, handleSubmit } = useForm();



    useEffect(() => {
        const url = `https://cryptic-lake-39562.herokuapp.com/service/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [id])


    const onSubmit = data => {
        setShippingData(data)
    }

    const handlePaymentSuccess = paymentId => {
        const orderDetails = {
            ...loggedInUser,
            order: shippingData,
            paymentId,
            oderTime: new Date()
        }
        const CheckOuturl = "https://cryptic-lake-39562.herokuapp.com/checkOut";
        fetch(CheckOuturl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => console.log('server side response', res))
    }


    return (
        <div>

            <div style={{display:shippingData ? 'none': 'block'}} className="w-75 m-5 shadow rounded">
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-2">
                        <input type="text" {...register("name", { required: true })} name="name" placeholder="Write your name ...." className="form-control" defaultValue={loggedInUser.name} />
                    </div>
                    <div className="form-group mb-2">
                        <input type="email" {...register("email", { required: true })} name="email" placeholder="Your Email.." className="form-control" defaultValue={loggedInUser.email} />
                    </div>

                    <div className="form-group mb-2">
                        <input type="event" {...register("event", { required: true })} name="event" placeholder="Your Email.." className="form-control" defaultValue={event.name} />
                    </div>

                    <div className="form-group mb-2">
                        <input type="price" {...register("price", { required: true })} name="event" placeholder="Price" className="form-control" defaultValue={event.price} />
                    </div>



                    <div className="form-group text-right mb-2">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>

            <div style={{ display: shippingData ? 'block' : 'none' }} className="shadow m-5 p-5">
            <h5 className="fw-bold">Pay here</h5>
                <hr />
                <div>
                    <h6>You will charged: {event.price}</h6>
                    <Payment handlePayment={handlePaymentSuccess}></Payment>
                </div>
                <div>
                    {/* <img className="img-fluid" src={paymentImg} alt="" /> */}
                </div>

            </div>
        </div>
    );
};

export default CheckOut;