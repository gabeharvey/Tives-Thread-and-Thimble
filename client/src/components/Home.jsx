/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import Slider from "react-slick";

const Home = () => {
  const settings = {
    dots: false, 
    arrows: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
          centerMode: true, 
          centerPadding: '1px',
        },
      },
    ],
  };

  return (
    <>
      <Box
        maxW="1280px"
        mx="auto"
        px="2rem"
        py="4rem"
        textAlign="center"
        bg="#F6CBD4"
        backgroundImage="url('/fashion-girl.png')"
        backgroundPosition="center top"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        mt={20}
      >
        <Box mb="5rem">
          <Heading as="h1" size="xl" mb="1rem" fontFamily="'Shadows Into Light', cursive" color="#A66A8A" fontWeight="900">
            Welcome to Tive's (Tee-veh’s) Thread and Thimble
          </Heading>
          <Text fontSize="xl" mb="2rem" color="#A66A8A" fontWeight="bold">
            Tailored Fashion. Handcrafted Excellence.
          </Text>
          <Button
            bg="#CA85A0"
            color="white"
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
          >
            Explore Our Collection
          </Button>
        </Box>
        <Slider {...settings}>
          <Box p="0.5rem">
            <Image
              src="/black-dress.png"
              alt="Black Dress"
              borderRadius="lg"
              boxSize="90%" 
              objectFit="cover"
              mb="1rem"
            />
          </Box>
          <Box p="0.5rem">
            <Image
              src="/green-gold-dress.png"
              alt="Green Gold Dress"
              borderRadius="lg"
              boxSize="90%" 
              objectFit="cover"
              mb="1rem"
            />
          </Box>
          <Box p="0.5rem">
            <Image
              src="/vintage-dress.png"
              alt="Vintage Dress"
              borderRadius="lg"
              boxSize="90%" 
              objectFit="cover"
              mb="1rem"
            />
          </Box>
        </Slider>
      </Box>
      <Box
        textAlign="center"
        maxW="1280px"
        mx="auto"
        bg="#F6CBD4"
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
          <Heading as="h2" size="xl" mb="1rem" fontFamily="'Shadows Into Light', cursive" color="#CA85A0" fontWeight="900">
            Comfort Food
          </Heading>
          <Slider {...settings}>
            <Box p="0.5rem">
              <Image
                src="/coffee.png"
                alt="Coffee"
                borderRadius="lg"
                boxSize="90%" // Increased size
                objectFit="cover"
                mb="1rem"
              />
            </Box>
            <Box p="0.5rem">
              <Image
                src="/macarons.png"
                alt="Macarons"
                borderRadius="lg"
                boxSize="90%" // Increased size
                objectFit="cover"
                mb="1rem"
              />
            </Box>
            <Box p="0.5rem">
              <Image
                src="/sushi.png"
                alt="Sushi"
                borderRadius="lg"
                boxSize="90%" // Increased size
                objectFit="cover"
                mb="1rem"
              />
            </Box>
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default Home;
