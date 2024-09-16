import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Box, Button, Text } from '@chakra-ui/react';
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
        console.error('Payment Error: ', error.response ? error.response.data : error.message);
        setErrorMessage(error.response ? error.response.data.message : 'Payment error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      console.error('Stripe Error: ', error.message);
      setErrorMessage(error.message);
      setLoading(false);
    }
  };    

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxW="500px"
      mx="auto"
      bg="white"
      borderRadius="15px"
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
      p={4}
    >
      {!success ? (
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <CardElement options={{ style: { base: { fontSize: '16px', color: '#424770' } }}} />
          <Button
            type="submit"
            disabled={!stripe || loading}
            bg="#CA85A0"
            color="beige"
            size="lg"
            borderRadius="md"
            mt={6}
            _hover={{
              bg: "#C2A8B2",
              boxShadow: "md",
              cursor: "pointer",
            }}
            _active={{
              bg: "#B399A3",
              boxShadow: "inner",
            }}
            boxShadow="lg"
            fontFamily="'Satisfy', cursive"
            p={4}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            {loading ? 'Processing...' : 'Pay'}
          </Button>
          {errorMessage && <Text color="red" mt={4}>{errorMessage}</Text>}
        </form>
      ) : (
        <Text fontSize="2xl" fontWeight="bold" color="green.500">
          Payment Successful!
        </Text>
      )}
    </Box>
  );
};

export default PaymentForm;