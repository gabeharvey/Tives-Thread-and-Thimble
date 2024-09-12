/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Box, Heading, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { useSpring, animated } from '@react-spring/web';

const createSkewProps = (flips, index) => {
  return flips.map(flip =>
    useSpring({
      transform: flip ? `skew(10deg, 10deg)` : `skew(0deg, 0deg)`, // Skew animation
      config: { tension: 300, friction: 20 },
    })
  )[index];
};

const Gallery = () => {
  const [galleryFlipped, setGalleryFlipped] = useState([false, false, false, false, false, false]);

  const handleFlip = (index) => {
    const newFlipped = [...galleryFlipped];
    newFlipped[index] = !newFlipped[index];
    setGalleryFlipped(newFlipped);
  };

  const gallerySpringProps = galleryFlipped.map((flip, index) => createSkewProps(galleryFlipped, index));

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
        bg="transparent"
        backgroundImage="url('/cat-background.png')"
        backgroundPosition="center top"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        mt={20}
      >
        <Box mb="5rem">
          <Heading as="h1" size="xl" mb="1rem" fontFamily="'Satisfy', cursive" color="beige" fontWeight="900">
            Our Exquisite Gallery
          </Heading>
        </Box>
        <Slider {...settings}>
          {['ai-dress.png', 'ai-dress-1.png', 'ai-dress-2.png', 'ai-dress-3.png', 'ai-dress-4.png', 'ai-dress-5.png'].map((image, index) => (
            <Box 
              p="0.5rem" 
              key={index} 
              width="100%" 
              maxWidth="300px"
              mt="4rem" 
              mb="4rem" 
            >
              <animated.div
                style={{
                  transformStyle: 'preserve-3d',
                  transform: gallerySpringProps[index]?.transform || 'none', 
                  cursor: 'pointer',
                  position: 'relative',
                  width: '100%',
                  height: '400px', 
                  transition: 'transform 0.3s ease',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', 
                  borderRadius: '15px', 
                }}
                onClick={() => handleFlip(index)}
              >
                <animated.div
                  style={{
                    backfaceVisibility: 'hidden',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '15px',
                  }}
                >
                  <Image
                    src={`/${image}`}
                    alt={`Gallery item ${index + 1}`}
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
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'beige',
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
    </>
  );
};

export default Gallery;