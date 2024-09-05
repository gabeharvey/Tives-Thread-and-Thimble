/* eslint-disable react/no-unescaped-entities */
import {
    Box,
    Flex,
    Heading,
    Spacer,
    Button,
    Link,
    IconButton,
    useDisclosure,
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
  import { Link as RouterLink } from 'react-router-dom';
  
  const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Box
        className="navbar-background"
        py="2.5rem"
        px="2rem"
        position="relative"
        boxShadow="lg"
        mb="20px"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Heading
            as={RouterLink}
            to="/"
            fontSize="3xl"
            fontFamily="'Shadows Into Light', cursive"
            color="white"
            letterSpacing="wider"
          >
            Tive's (Tee-veh’s) Thread and Thimble
          </Heading>

          <Spacer />
          <IconButton
  aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
  display={['block', 'block', 'none']}
  onClick={isOpen ? onClose : onOpen}
  variant="unstyled"
  fontSize="30px" 
  color="white"
  fontWeight="bold"
  mb='20px'
  _hover={{ bg: 'none' }}
  _focus={{ boxShadow: 'none' }}
/>

          <Flex
            as="ul"
            display={['none', 'none', 'flex']}
            listStyleType="none"
            ml="auto"
            alignItems="center"
            gap="2rem"
          >
            {['Home', 'About Us', 'Services', 'Contact'].map((item) => (
              <Link
                key={item}
                as={RouterLink}
                to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                fontSize="md"
                color="white"
                fontWeight="bold"
                position="relative"
                _hover={{
                  textDecoration: 'none',
                  _after: {
                    width: '100%',
                  },
                }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-0.2rem',
                  left: 0,
                  width: 0,
                  height: '2px',
                  bg: 'white',
                  transition: 'width 0.3s ease',
                }}
              >
                {item}
              </Link>
            ))}
          </Flex>
          {isOpen && (
            <Box
              position="fixed"
              top="0"
              left="0"
              width="100%"
              height="100vh"
              bg="rgba(0, 128, 128, 0.9)"
              zIndex="overlay"
              p="3rem"
              display={['block', 'block', 'none']}
            >
              <Flex direction="column" gap="2rem" color="white" alignItems="center">
                {['Home', 'About Us', 'Services', 'Contact'].map((item) => (
                  <Button
                    key={item}
                    as={RouterLink}
                    to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                    variant="link"
                    fontSize="2xl"
                    onClick={onClose}
                  >
                    {item}
                  </Button>
                ))}
              </Flex>
            </Box>
          )}
        </Flex>
      </Box>
    );
  };
  
  export default Navbar;
