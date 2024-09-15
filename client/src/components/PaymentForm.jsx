import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post('http://localhost:5000/api/payment', {
          amount: 1000, 
          id,
        });

        if (response.data.success) {
          setSuccess(true);
        }
      } catch (error) {
        console.log('Payment Error: ', error);
      }
    } else {
      console.log('Stripe Error: ', error.message);
    }
  };

  return (
    <div>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit" disabled={!stripe}>
            Pay
          </button>
        </form>
      ) : (
        <h2>Payment Successful!</h2>
      )}
    </div>
  );
};

export default PaymentForm;
