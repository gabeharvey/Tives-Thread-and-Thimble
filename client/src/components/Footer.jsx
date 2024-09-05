/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Link, Text, useBreakpointValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const display = useBreakpointValue({ base: 'block', md: 'flex' });

  return (
    <Box as="footer" bg="gray.100" py="2rem" px="2rem" boxShadow="md" textAlign="center">
      <Flex
        direction={['column', 'row']}
        justify="center"
        align="center"
        mb="1rem"
        gap="1rem"
        display={display}
      >
        <Link as={RouterLink} to="/" fontSize="lg" _hover={{ textDecoration: 'underline' }}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" fontSize="lg" _hover={{ textDecoration: 'underline' }}>
          About Us
        </Link>
        <Link as={RouterLink} to="/services" fontSize="lg" _hover={{ textDecoration: 'underline' }}>
          Services
        </Link>
        <Link as={RouterLink} to="/contact" fontSize="lg" _hover={{ textDecoration: 'underline' }}>
          Contact
        </Link>
      </Flex>

      <Text fontSize="sm" color="gray.600">
        &copy; {new Date().getFullYear()} Tive's Thread and Thimble. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
