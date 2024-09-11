/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Button, Input, FormControl, FormLabel, Image } from '@chakra-ui/react';

const SignUp = () => {
  return (
    <Box
      maxW="1280px"
      mx="auto"
      px="2rem"
      py="4rem"
      textAlign="center"
      bg="#F6CBD4"
      backgroundImage="url('/signup-background.png')" 
      backgroundPosition="center top"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      mt={20}
    >
      <Heading as="h1" size="xl" mb="1rem" fontFamily="'Shadows Into Light Two', cursive" color="#A66A8A" fontWeight="900">
        Create an Account
      </Heading>

      <Box
        bg="#CA85A0"
        p="2rem"
        borderRadius="15px"
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
        maxWidth="500px"
        mx="auto"
      >
        <FormControl mb="1rem" fontFamily="'Shadows Into Light Two', cursive" fontWeight="bold" color="beige">
          <FormLabel fontWeight="bold">Name</FormLabel>
          <Input type="text" placeholder="Enter your name" backgroundColor="white" color="black" fontWeight="bold" />
        </FormControl>
        <FormControl mb="1rem" fontFamily="'Shadows Into Light Two', cursive" fontWeight="bold" color="beige">
          <FormLabel fontWeight="bold">Email</FormLabel>
          <Input type="email" placeholder="Enter your email" backgroundColor="white" color="black" fontWeight="bold" />
        </FormControl>
        <FormControl mb="1rem" fontFamily="'Shadows Into Light Two', cursive" fontWeight="bold" color="beige">
          <FormLabel fontWeight="bold">Password</FormLabel>
          <Input type="password" placeholder="Enter your password" backgroundColor="white" color="black" fontWeight="bold" />
        </FormControl>
        <Button colorScheme="whiteAlpha" width="full" fontFamily="'Shadows Into Light Two', cursive" color="beige">
          Sign Up
        </Button>
      </Box>

      <Box mt="3rem">
        <Image
          src="/signup-footer-image.png" // Footer image specific to Sign Up if needed
          alt="Sign Up Footer"
          width="100%"
          height="auto"
        />
      </Box>
    </Box>
  );
};

export default SignUp;
