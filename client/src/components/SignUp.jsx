import { useState, useContext } from 'react';
import { Box, Heading, Button, Input, FormControl, FormLabel, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

const API_URL = import.meta.env.VITE_API_URL;

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/signup`, {
        username,
        email,
        password
      });
  
      console.log('Signup Response:', response.data);
  
      const { token, message } = response.data;
  
      if (message === 'User created successfully') {
        alert('Signup successful');
        navigate('/login'); 
      } else {
        console.error('Unexpected response:', response.data);
        alert(`Signup failed: ${message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error signing up:', error.response?.data || error.message);
      alert('Error signing up: ' + (error.response?.data?.message || 'Unknown error'));
    }
  };  
  
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
      <Heading as="h1" size="xl" mb="1rem" fontFamily="'Satisfy', cursive" color="#A66A8A" fontWeight="900">
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
        <FormControl mb="1rem" fontFamily="'Lato', sans-serif" fontWeight="bold" color="beige">
          <FormLabel fontWeight="bold" fontFamily="'Satisfy', cursive">User Name</FormLabel>
          <Input
            fontFamily="'Lato', sans-serif"
            type="text"
            placeholder="Enter Your User Name"
            backgroundColor="white"
            color="black"
            fontWeight="bold"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            focusBorderColor="gray.300"
          />
        </FormControl>
        <FormControl mb="1rem" fontFamily="'Lato', sans-serif" fontWeight="bold" color="beige">
          <FormLabel fontWeight="bold" fontFamily="'Satisfy', cursive">Email</FormLabel>
          <Input
            fontFamily="'Lato', sans-serif"
            type="email"
            placeholder="Enter Your Email"
            backgroundColor="white"
            color="black"
            fontWeight="bold"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            focusBorderColor="gray.300"
          />
        </FormControl>
        <FormControl mb="1rem" fontFamily="'Lato', sans-serif" fontWeight="bold" color="beige">
          <FormLabel fontWeight="bold" fontFamily="'Satisfy', cursive">Password</FormLabel>
          <Input
            fontFamily="'Lato', sans-serif"
            type="password"
            placeholder="Enter Your Password"
            backgroundColor="white"
            color="black"
            fontWeight="bold"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            focusBorderColor="gray.300"
          />
        </FormControl>
        <Button
          type="submit"
          onClick={handleSignup}
          colorScheme="whiteAlpha"
          width="full"
          fontFamily="'Satisfy', cursive"
          color="beige"
        >
          Sign Up
        </Button>
      </Box>
      <Text fontSize="lg" color="#A66A8A" fontFamily="'Satisfy', cursive" mt={6}>
        Already a member?{' '}
        <Text
          as="span"
          cursor="pointer"
          color="#A66A8A"
          fontFamily="'Satisfy', cursive"
          fontSize="15px"
          fontWeight="bold"
          _hover={{ textDecoration: 'underline' }}
          onClick={() => navigate('/login')}
        >
          Log In
        </Text>{' '}
        to access Tive's Thread & Thimble.
      </Text>
    </Box>
  );
};

export default SignUp;
