import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../PaymentForm/PaymentForm';
const stripePromise = loadStripe('pk_test_51IhAorFQT7zTMBXKZDSfD1REAACxZqeHOoPqiTlHz0MQ6yok5QpsVqKk0RyjYeLLoza5DfbpBehFACsogkfpqnsz00lJm2JHv8'
);
const Payment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm handlePayment={handlePayment}></PaymentForm>
        </Elements>
    );
};

export default Payment;