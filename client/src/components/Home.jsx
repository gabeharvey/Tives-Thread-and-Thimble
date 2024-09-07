/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { useSpring, animated } from '@react-spring/web';
import quotes from '../utils/quotes.json';

const createSpringProps = (flips, index) => {
  return flips.map(flip =>
    useSpring({
      transform: `perspective(600px) rotateY(${flip ? 180 : 0}deg)`,
      config: { mass: 5, tension: 800, friction: 80 },
    })
  )[index];
};

const Home = () => {
  const [fashionFlipped, setFashionFlipped] = useState([false, false, false, false, false, false]);
  const [foodFlipped, setFoodFlipped] = useState([false, false, false, false, false, false]);

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
  const [randomQuote, setRandomQuote] = useState('');
  useEffect(() => {
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    };
    setRandomQuote(getRandomQuote());
  }, []);

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
            Welcome to Tive's (Tee-veh’s) Thread & Thimble
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
        {['black-dress.png', 'green-gold-dress.png', 'vintage-dress.png', 'teal-dress.png', 'hat-dress.png', 'flower-dress.png'].map((image, index) => (
  <Box p="0.5rem" key={index} width="100%" maxWidth="300px">
    <animated.div
      style={{
        transformStyle: 'preserve-3d',
        transform: fashionSpringProps[index]?.transform || 'none',
        cursor: 'pointer',
        position: 'relative',
        width: '100%',
        height: '400px', 
      }}
      onClick={() => handleFlip(index, 'fashion')}
    >
      <animated.div
        style={{
          backfaceVisibility: 'hidden',
          position: 'absolute', 
          width: '100%',
          height: '100%',
          borderRadius: '15px', 
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Image
          src={`/${image}`}
          alt={`Fashion item ${index + 1}`}
          borderRadius="15px"
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
          width: '100%',
          height: '100%',
          borderRadius: '15px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          padding: '1rem',
          backgroundColor: 'transparent',  
          boxSizing: 'border-box',
        }}
      >
        <Box
          backgroundImage="url('/fabric-print.png')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"  
          position="absolute" 
          width="100%"
          height="100%"
          borderRadius="15px" 
        />
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
          {['coffee.png', 'macarons.png', 'sushi.png', 'pizza.png', 'matcha-cake.png', 'bread.png'].map((image, index) => (
  <Box p="0.5rem" key={index} width="100%" maxWidth="300px">
    <animated.div
      style={{
        transformStyle: 'preserve-3d',
        transform: foodSpringProps[index]?.transform || 'none',
        cursor: 'pointer',
        position: 'relative',
        width: '100%',
        height: '400px', 
      }}
      onClick={() => handleFlip(index, 'food')}
    >
      <animated.div
        style={{
          backfaceVisibility: 'hidden',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '15px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden', 
        }}
      >
        <Image
          src={`/${image}`}
          alt={`Food item ${index + 1}`}
          borderRadius="15px"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </animated.div>
      <animated.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          width: '100%',
          height: '100%',
          borderRadius: '15px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',  
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          backgroundImage="url('/metal.png')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          width="100%"
          height="100%"
          borderRadius="15px" 
          boxSizing="border-box" 
        >
        </Box>
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
                <Text fontSize='40px' fontFamily="'Shadows Into Light', cursive" fontWeight='bold' color='#CA85A0' maxW="90%" mb="6" mt="10">
                    {randomQuote.quote}
                </Text>
      </Box>
    </>
  );
};

export default Home;
