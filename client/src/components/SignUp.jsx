/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Box, Heading, Button, Input, FormControl, FormLabel, Image } from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';

const SignUp = () => {
  const [flip, setFlip] = useState(false);

  const flipProps = useSpring({
    transform: `perspective(600px) rotateY(${flip ? 180 : 0}deg)`,
    config: { mass: 5, tension: 800, friction: 80 },
  });

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
        Create Your Account
      </Heading>

      <animated.div style={{ transformStyle: 'preserve-3d', ...flipProps }}>
        <Box
          bg="white"
          p="2rem"
          borderRadius="15px"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
          maxWidth="500px"
          mx="auto"
          onClick={() => setFlip(!flip)}
        >
          <FormControl mb="1rem">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl mb="1rem">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
          <Button colorScheme="teal" width="full">
            Sign Up
          </Button>
        </Box>
      </animated.div>

      <Box mt="3rem">
        <Image
          src="/signup-footer-image.png"
          alt="Sign Up Footer"
          width="100%"
          height="auto"
        />
      </Box>
    </Box>
  );
};

export default SignUp;
