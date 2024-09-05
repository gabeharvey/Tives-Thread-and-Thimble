/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { useSpring, animated } from '@react-spring/web';

const createSpringProps = (flips, index) => {
  return flips.map(flip =>
    useSpring({
      transform: `perspective(600px) rotateY(${flip ? 180 : 0}deg)`,
      config: { mass: 5, tension: 800, friction: 80 },
    })
  )[index];
};

const Home = () => {
  const [fashionFlipped, setFashionFlipped] = useState([false, false, false]);
  const [foodFlipped, setFoodFlipped] = useState([false, false, false]);

  const handleFlip = (index, type) => {
    if (type === 'fashion') {
      const newFlipped = [...fashionFlipped];
      newFlipped[index] = !newFlipped[index];
      setFashionFlipped(newFlipped);
    } else if (type === 'food') {
      const newFlipped = [...foodFlipped];
      newFlipped[index] = !newFlipped[index];
      setFoodFlipped(newFlipped);
    }
  };

  const fashionSpringProps = fashionFlipped.map((flip, index) => createSpringProps(fashionFlipped, index));
  const foodSpringProps = foodFlipped.map((flip, index) => createSpringProps(foodFlipped, index));

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
          {['black-dress.png', 'green-gold-dress.png', 'vintage-dress.png'].map((image, index) => (
            <Box p="0.5rem" key={index}>
              <animated.div
                style={{
                  transformStyle: 'preserve-3d',
                  transform: fashionSpringProps[index]?.transform || 'none',
                  cursor: 'pointer',
                  position: 'relative',
                  width: '100%', 
                  maxWidth: '300px', 
                  height: 'auto', 
                  maxHeight: '400px', 
                }}
                onClick={() => handleFlip(index, 'fashion')}
              >
                <animated.div
                  style={{
                    backfaceVisibility: 'hidden',
                    width: '100%',
                    height: '100%',
                    borderRadius: 'lg',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Image
                    src={`/${image}`}
                    alt={`Fashion item ${index + 1}`}
                    borderRadius="lg"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                  />
                </animated.div>
                <animated.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    backgroundColor: '#A66A8A',
                    width: '100%',
                    height: '100%',
                    borderRadius: 'lg',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    padding: '1rem', 
                    boxSizing: 'border-box',
                  }}
                >
                  <Text fontWeight="bold" fontSize="lg">Description of the item</Text>
                </animated.div>
              </animated.div>
            </Box>
          ))}
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
          alt="Zipper"
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
            {['coffee.png', 'macarons.png', 'sushi.png'].map((image, index) => (
              <Box p="0.5rem" key={index}>
                <animated.div
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: foodSpringProps[index]?.transform || 'none',
                    cursor: 'pointer',
                    position: 'relative',
                    width: '100%', 
                    maxWidth: '300px', 
                    height: 'auto', 
                    maxHeight: '400px',
                  }}
                  onClick={() => handleFlip(index, 'food')}
                >
                  <animated.div
                    style={{
                      backfaceVisibility: 'hidden',
                      width: '100%',
                      height: '100%',
                      borderRadius: 'lg',
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Image
                      src={`/${image}`}
                      alt={`Food item ${index + 1}`}
                      borderRadius="lg"
                      objectFit="cover"
                      width="100%"
                      height="100%"
                    />
                  </animated.div>
                  <animated.div
                    style={{
                      position: 'absolute',
                      top: 0,
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      backgroundColor: '#CA85A0',
                      width: '100%',
                      height: '100%',
                      borderRadius: 'lg',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                      padding: '1rem', 
                      boxSizing: 'border-box',
                    }}
                  >
                    <Text fontWeight="bold" fontSize="lg">Delicious Food</Text>
                  </animated.div>
                </animated.div>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
      <Box
        textAlign="center"
        maxW="1280px"
        mx="auto"
        bg="#F6CBD4"
      >
        <Image
          src="/red-rope.png"
          alt="Red Rope"
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
        bg="#F6CBD4"
        backgroundImage="url('/flowers.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        minHeight="100vh"
      >

      </Box>
    </>
  );
};

export default Home;
