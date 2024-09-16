import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm'; 

// Make sure to replace this with your own publishable key from Stripe
const stripePromise = loadStripe('pk_test_51PzPOCLFpxt0bzXfyfxxVEENil4u5qtMOrKCuAUmYlzl2Yah6TOCa0OeDE0vdzXLsvkTCrFtk5gjlPjMOcng7tTf008qBpmCIG');

const Checkout = () => {
  return (
    <Box
      maxW="1280px"
      mx="auto"
      px="2rem"
      py="4rem"
      textAlign="center"
      bg="transparent"
      backgroundImage="url('/shopping-bag.png')"
      backgroundPosition="center top"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      mt={20}
      mb={20}
    >
      <Heading
        as="h1"
        size="xl"
        mb="1rem"
        fontFamily="'Satisfy', cursive"
        color="red"
        fontWeight="900"
      >
        Checkout
      </Heading>
      <Text fontSize="lg" color="red" mb="2rem">
        Please enter your payment details to complete your purchase.
      </Text>

      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </Box>
  );
};

export default Checkout;
