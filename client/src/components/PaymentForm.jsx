import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [errorMessage, setErrorMessage] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setErrorMessage(''); 

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
        } else {
          setErrorMessage('Payment failed. Please try again.');
        }
      } catch (error) {
        setErrorMessage('Payment error occurred. Please try again.');
        console.log('Payment Error: ', error);
      } finally {
        setLoading(false); 
      }
    } else {
      setErrorMessage(error.message);
      console.log('Stripe Error: ', error.message);
      setLoading(false); 
    }
  };

  return (
    <div>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit" disabled={!stripe || loading}>
            {loading ? 'Processing...' : 'Pay'}
          </button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
      ) : (
        <h2>Payment Successful!</h2>
      )}
    </div>
  );
};

export default PaymentForm;