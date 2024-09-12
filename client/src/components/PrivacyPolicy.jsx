import { Box, Heading, Text, Button } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <>
      <Box
        maxW="1280px"
        mx="auto"
        px="2rem"
        py="4rem"
        textAlign="center"
        bg="transparent"
        backgroundImage="url('/privacy-background.png')"
        backgroundPosition="center top"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        mt={20}
      >
        <Box mb="5rem">
          <Heading as="h1" size="xl" mb="1rem" fontFamily="'Satisfy', cursive" color="#A66A8A" fontWeight="900">
            Privacy Policy
          </Heading>
          <Text fontSize="2xl" mb="2rem" color="#A66A8A" fontWeight="bold" fontFamily="'Satisfy', cursive">
            Your Privacy Matters to Us
          </Text>
          <Text fontSize="lg" mb="2rem" color="#A66A8A" fontFamily="'Satisfy', cursive">
            At Tive's Thread & Thimble, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your information when you visit our website or make a purchase.
          </Text>
          <Text fontSize="lg" mb="2rem" color="#A66A8A" fontFamily="'Satisfy', cursive">
            <strong>Information Collection:</strong> We collect information you provide to us, such as your name, email address, and payment details, to process your orders and improve our services.
          </Text>
          <Text fontSize="lg" mb="2rem" color="#A66A8A" fontFamily="'Satisfy', cursive">
            <strong>Information Use:</strong> The information we collect is used to fulfill orders, communicate with you, and improve our website and services.
          </Text>
          <Text fontSize="lg" mb="2rem" color="#A66A8A" fontFamily="'Satisfy', cursive">
            <strong>Data Security:</strong> We take reasonable measures to protect your personal information from unauthorized access or disclosure.
          </Text>
          <Text fontSize="lg" mb="2rem" color="#A66A8A" fontFamily="'Satisfy', cursive">
            <strong>Changes to This Policy:</strong> We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default PrivacyPolicy;
