import { Box, Heading, Text, Image } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Box
      maxW="1280px"
      mx="auto"
      px="2rem"
      py="4rem"
      textAlign="center"
      bg="#F6CBD4"
      backgroundImage="url('/about-background.png')"
      backgroundPosition="center top"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      mt={20}
    >
      <Box mb="5rem">
        <Heading as="h1" size="xl" mb="1rem" fontFamily="'Satisfy', cursive" color="#A66A8A" fontWeight="900">
          About Us
        </Heading>
        <Text fontSize="2xl" mb="2rem" color="#A66A8A" fontWeight="bold" fontFamily="'Satisfy', cursive">
          Our Journey and Vision
        </Text>
        <Text fontSize="lg" mb="2rem" color="#A66A8A" fontFamily="'Satisfy', cursive">
          Welcome to Tive's Thread and Thimble! We are passionate about bringing you the finest in fashion, curated with love and care.
        </Text>
        <Text fontSize="lg" mb="2rem" color="#A66A8A" fontFamily="'Satisfy', cursive">
          Our journey began with a simple idea: to offer high-quality, stylish clothing that makes you feel confident and unique. Our team is dedicated to sourcing the best materials and creating designs that you’ll love.
        </Text>
        <Text fontSize="lg" mb="2rem" color="#A66A8A" fontFamily="'Satisfy', cursive">
          We believe in the power of fashion to inspire and empower. Thank you for being a part of our story. We’re excited to share our passion with you!
        </Text>
      </Box>
      <Image
        src="/fun-sewing.png"
        alt="About Us"
        borderRadius="15px"
        maxW="100%"
        h="auto"
        mx="auto"
        marginBottom="10rem"
      />
    </Box>
  );
};

export default AboutUs;
