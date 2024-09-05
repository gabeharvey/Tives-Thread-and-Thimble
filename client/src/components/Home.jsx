/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import Slider from "react-slick";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Box
        maxW="1280px"
        mx="auto"
        px="2rem"
        py="4rem"
        textAlign="center"
        bg="white"
        backgroundImage="url('/fashion-girl.png')" 
        backgroundPosition="center top"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        mt={20}
      >
        <Box mb="5rem">
          <Heading as="h1" size="2xl" mb="1rem" fontFamily="'Shadows Into Light', cursive" color="#E0B0FF" fontWeight="900">
            Welcome to Tive's Thread and Thimble
          </Heading>
          <Text fontSize="xl" mb="2rem" color="#A8D5BA" fontWeight="bold">
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
        
        <Slider {...settings}>
          <Box>
            <Image
              src="https://via.placeholder.com/300"
              alt="Custom Tailoring"
              borderRadius="lg"
              mb="1rem"
              opacity="0.4" 
            />
            <Heading size="lg" color="#A8D5BA">Custom Tailoring</Heading>
            <Text color="#A8D5BA" mt="0.5rem">
              Experience the perfect fit with our bespoke tailoring services.
            </Text>
          </Box>

          <Box>
            <Image
              src="https://via.placeholder.com/300"
              alt="Handcrafted Designs"
              borderRadius="lg"
              mb="1rem"
              opacity="0.4" 
            />
            <Heading size="lg" color="#A8D5BA">Handcrafted Designs</Heading>
            <Text color="#A8D5BA" mt="0.5rem">
              Our designs blend tradition with modern trends, crafted to perfection.
            </Text>
          </Box>

          <Box>
            <Image
              src="https://via.placeholder.com/300"
              alt="Sustainable Fashion"
              borderRadius="lg"
              mb="1rem"
              opacity="0.4" 
            />
            <Heading size="lg" color="#A8D5BA">Sustainable Fashion</Heading>
            <Text color="#A8D5BA" mt="0.5rem">
              Fashion that cares for the environment, without compromising style.
            </Text>
          </Box>
        </Slider>
      </Box>
      <Box
        textAlign="center"
        my="2rem"
        maxW="1280px"
        mx="auto"
      >
        <Image
          src="/horizontal-zipper.png" 
          alt="Separator"
          width="100%" 
          height="auto" 
        />
      </Box>
      <Box
        maxW="1280px"
        mx="auto"
        px="2rem"
        py="6rem"
        textAlign="center"
        bg="white"
        backgroundImage="url('/peonies.png')" 
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Box mb="5rem">
          <Heading as="h2" size="xl" mb="1rem" fontFamily="'Shadows Into Light', cursive" color="#E0B0FF" fontWeight="900">
            New Section Title
          </Heading>
          <Text fontSize="xl" mb="2rem" color="#A8D5BA" fontWeight="bold">
            New Section Description.
          </Text>
          {/* Add any content or additional carousel here */}
        </Box>
      </Box>
    </>
  );
};

export default Home;
