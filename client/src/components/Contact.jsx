import { Box, Heading, Button, Input, Textarea, FormControl, FormLabel } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box
      maxW="1280px"
      mx="auto"
      px="2rem"
      py="4rem"
      textAlign="center"
      bg="transparent"
      backgroundImage="url('/flower-background.png')"
      backgroundPosition="center top"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      mt={20}
      mb="10rem"
    >
      <Heading as="h1" size="xl" mb="2rem" fontFamily="'Satisfy', cursive" color="#A66A8A" fontWeight="900">
        Contact Us
      </Heading>
      <Box
        bg="#CA85A0"
        p="2rem"
        borderRadius="15px"
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
        maxWidth="500px"
        mx="auto"
      >
        <FormControl mb="1rem" fontFamily="'Lato', sans-serif" fontWeight="bold" color="beige">
          <FormLabel fontWeight="bold" fontFamily="'Satisfy', cursive">Name</FormLabel>
          <Input
            fontFamily="'Lato', sans-serif"
            type="text"
            placeholder="Enter your name"
            backgroundColor="white"
            color="black"
            fontWeight="bold"
            focusBorderColor="gray.300"
          />
        </FormControl>
        <FormControl mb="1rem" fontFamily="'Lato', sans-serif" fontWeight="bold" color="beige">
          <FormLabel fontWeight="bold" fontFamily="'Satisfy', cursive">Email</FormLabel>
          <Input
            fontFamily="'Lato', sans-serif"
            type="email"
            placeholder="Enter your email"
            backgroundColor="white"
            color="black"
            fontWeight="bold"
            focusBorderColor="gray.300"
          />
        </FormControl>
        <FormControl mb="1rem" fontFamily="'Lato', sans-serif" fontWeight="bold" color="beige">
          <FormLabel fontWeight="bold" fontFamily="'Satisfy', cursive">Message</FormLabel>
          <Textarea
            fontFamily="'Lato', sans-serif"
            placeholder="Enter your message"
            backgroundColor="white"
            color="black"
            fontWeight="bold"
            focusBorderColor="gray.300"
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="whiteAlpha"
          width="full"
          fontFamily="'Satisfy', cursive"
          color="beige"
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
