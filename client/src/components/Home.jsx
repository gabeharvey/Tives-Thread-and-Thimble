/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, Button, Image, Stack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box
      maxW="1280px"
      mx="auto"
      px="2rem"
      py="4rem"
      textAlign="center"
      bg="white"
    >
      {/* Hero Section */}
      <Box mb="5rem">
        <Heading as="h1" size="2xl" mb="1rem" fontFamily="'Shadows Into Light', cursive">
          Welcome to Tive's Thread and Thimble
        </Heading>
        <Text fontSize="xl" mb="2rem" color="gray.600">
          Tailored Fashion. Handcrafted Excellence.
        </Text>
        <Button
            bg="#E0B0FF"
            color="white"
            size="lg"
            borderRadius="full"
        _hover={{
            bg: "#C2A8B2",
            boxShadow: "md",
            }}
        _active={{
            bg: "#B399A3",
            }}
            boxShadow="lg" 
        >
            Explore Our Collection
        </Button>
      </Box>
      <Stack direction={["column", "row"]} spacing="2rem" justify="center">
        <Box>
          <Image
            src="https://via.placeholder.com/300"
            alt="Custom Tailoring"
            borderRadius="lg"
            mb="1rem"
          />
          <Heading size="lg">Custom Tailoring</Heading>
          <Text color="gray.600" mt="0.5rem">
            Experience the perfect fit with our bespoke tailoring services.
          </Text>
        </Box>

        <Box>
          <Image
            src="https://via.placeholder.com/300"
            alt="Handcrafted Designs"
            borderRadius="lg"
            mb="1rem"
          />
          <Heading size="lg">Handcrafted Designs</Heading>
          <Text color="gray.600" mt="0.5rem">
            Our designs blend tradition with modern trends, crafted to perfection.
          </Text>
        </Box>

        <Box>
          <Image
            src="https://via.placeholder.com/300"
            alt="Sustainable Fashion"
            borderRadius="lg"
            mb="1rem"
          />
          <Heading size="lg">Sustainable Fashion</Heading>
          <Text color="gray.600" mt="0.5rem">
            Fashion that cares for the environment, without compromising style.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;