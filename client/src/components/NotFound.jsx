import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box
      maxW="1280px"
      mx="auto"
      px="2rem"
      py="4rem"
      textAlign="center"
      bg="#F6CBD4"
      backgroundImage="url('/notfound-background.png')"
      backgroundPosition="center top"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      mt={20}
    >
      <Box mb="5rem">
        <Heading as="h1" size="xl" mb="1rem" fontFamily="'Satisfy', cursive" color="#A66A8A" fontWeight="900">
          404
        </Heading>
        <Text fontSize="2xl" mb="2rem" color="#A66A8A" fontWeight="bold" fontFamily="'Satisfy', cursive">
          Oops! The page you are looking for does not exist.
        </Text>
        <Link to="/">
          <Button
            bg="#CA85A0"
            color="beige"
            size="lg"
            borderRadius="md"
            _hover={{
              bg: "#C2A8B2",
              boxShadow: "md",
            }}
            _active={{
              bg: "#B399A3",
            }}
            boxShadow="lg"
            fontFamily="'Satisfy', cursive"
          >
            Go to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
