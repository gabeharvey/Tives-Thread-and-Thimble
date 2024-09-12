/* eslint-disable react/no-unescaped-entities */
import { useState, useContext } from 'react';
import { Box, Heading, Button, Input, FormControl, FormLabel, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

const API_URL = import.meta.env.VITE_API_URL;

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/login`, { username, password });
      console.log('Login response:', response.data);
      localStorage.setItem('authToken', response.data.token);
      login(response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in: ' + (error.response?.data?.message || 'Unknown error'));
    }
  };

  const handleLinkClick = (path) => {
    navigate(path);
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
          <FormLabel fontWeight="bold" fontFamily="'Satisfy', cursive">Username</FormLabel>
          <Input
            fontFamily="'Lato', sans-serif"
            type="text"
            placeholder="Enter your username"
            backgroundColor="white"
            color="black"
            fontWeight="bold"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            focusBorderColor="gray.300"
          />
        </FormControl>
        <Button
          onClick={handleLogin}
          colorScheme="whiteAlpha"
          width="full"
          fontFamily="'Satisfy', cursive"
          color="beige"
        >
          Log In
        </Button>
      </Box>
      <Text fontSize="lg" color="#A66A8A" fontFamily="'Satisfy', cursive" mt={6}>
        New to Tive's Thread & Thimble?{' '}
        <Text
          as="span"
          cursor="pointer"
          color="#A66A8A"
          fontFamily="'Satisfy', cursive"
          fontSize="15px"
          fontWeight="bold"
          _hover={{ textDecoration: 'underline' }}
          onClick={() => handleLinkClick('/signup')}
        >
          Sign Up
        </Text>{' '}
        to enjoy everything our website has to offer.
      </Text>
    </Box>
  );
};

export default LogIn;
