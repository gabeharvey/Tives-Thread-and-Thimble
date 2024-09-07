/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Link, Text, useBreakpointValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const display = useBreakpointValue({ base: 'block', md: 'flex' });

  return (
    <Box as="footer" className="footer-background" bg="#CA85A0" py="2rem" px="2rem" boxShadow="md" textAlign="center">
      <Flex
        direction={['column', 'row']}
        justify="center"
        align="center"
        mb="1rem"
        gap="1rem"
        display={display}
        color="beige"
        fontWeight="bold"
      >
        <Link as={RouterLink} to="/" fontSize="md" _hover={{ textDecoration: 'underline' }} p="5px">
          Home
        </Link>
        <Link as={RouterLink} to="/about" fontSize="md" _hover={{ textDecoration: 'underline' }} p="5px">
          About Us
        </Link>
        <Link as={RouterLink} to="/services" fontSize="md" _hover={{ textDecoration: 'underline' }} p="5px">
          Services
        </Link>
        <Link as={RouterLink} to="/contact" fontSize="md" _hover={{ textDecoration: 'underline' }} p="5px">
          Contact
        </Link>
      </Flex>

      <Text fontSize="md" color="beige">
        &copy; {new Date().getFullYear()} Tive's Thread and Thimble. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
