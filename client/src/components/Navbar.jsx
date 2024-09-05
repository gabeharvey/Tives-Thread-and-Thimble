/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Heading, Spacer, Button, Link, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="nav" bg="gray.100" py="1rem" px="2rem" boxShadow="md">
      <Flex alignItems="center">
        {/* Logo/Brand Name */}
        <Heading as={RouterLink} to="/" fontSize="2xl" fontFamily="'Shadows Into Light', cursive">
          Tive's Thread and Thimble
        </Heading>

        <Spacer />

        {/* Hamburger Menu for Mobile */}
        <IconButton
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={['block', 'block', 'none']}
          onClick={isOpen ? onClose : onOpen}
          variant="outline"
          size="md"
        />

        {/* Menu Links - visible on larger screens */}
        <Flex
          as="ul"
          display={['none', 'none', 'flex']}
          listStyleType="none"
          ml="auto"
          alignItems="center"
          gap="2rem"
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

        {/* Mobile Menu */}
        {isOpen && (
          <Box
            position="absolute"
            top="5rem"
            left="0"
            width="100%"
            bg="gray.100"
            p="2rem"
            display={['block', 'block', 'none']}
          >
            <Flex direction="column" gap="1rem">
              <Button as={RouterLink} to="/" variant="link" onClick={onClose}>
                Home
              </Button>
              <Button as={RouterLink} to="/about" variant="link" onClick={onClose}>
                About Us
              </Button>
              <Button as={RouterLink} to="/services" variant="link" onClick={onClose}>
                Services
              </Button>
              <Button as={RouterLink} to="/contact" variant="link" onClick={onClose}>
                Contact
              </Button>
            </Flex>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
