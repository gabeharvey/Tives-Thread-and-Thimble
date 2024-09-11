/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';

const LogIn = () => {
  return (
    <Box
      maxW="1280px"
      mx="auto"
      px="2rem"
      py="4rem"
      textAlign="center"
      bg="#F6CBD4"
      backgroundImage="url('/flower-background.png')"
      backgroundPosition="center top"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      mt={20}
      mb="10rem"
    >
      <Heading as="h1" size="xl" mb="1rem" fontFamily="'Satisfy', cursive" color="#A66A8A" fontWeight="900">
        Welcome Back
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
          <FormLabel fontWeight="bold" fontFamily="'Satisfy', cursive">Password</FormLabel>
          <Input
            fontFamily="'Lato', sans-serif"
            type="password"
            placeholder="Enter your password"
            backgroundColor="white"
            color="black"
            fontWeight="bold"
            focusBorderColor="gray.300" 
          />
        </FormControl>
        <Button colorScheme="whiteAlpha" width="full" fontFamily="'Satisfy', cursive" color="beige">
          Log In
        </Button>
      </Box>
    </Box>
  );
};

export default LogIn;
