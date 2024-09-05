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
    Divider,
    Text,
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
  import { Link as RouterLink } from 'react-router-dom';
  import { motion } from 'framer-motion';
  
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
            Tive's Thread & Thimble
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
            mb="20px"
            _hover={{ bg: 'none' }}
            _focus={{ boxShadow: 'none' }}
          />
  
          <Flex
            as="ul"
            display={['none', 'none', 'flex']}
            listStyleType="none"
            ml="auto"
            alignItems="left"
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
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Box
                position="fixed"
                top="0"
                right="0"
                width="75%" 
                height="100vh"
                bg="#E0B0FF" 
                zIndex="overlay"
                display="block"
                color="white"
                mt="15px"
              >
                <Flex justifyContent="space-between" alignItems="center" mb="1rem">
                  <Text fontSize="2xl" fontWeight="bold" color="white" padding='1rem'>
                    Menu
                  </Text>
                  <IconButton
                    aria-label="Close Menu"
                    icon={<CloseIcon />}
                    onClick={onClose}
                    variant="unstyled"
                    fontSize="20px"
                    color="white"
                    _hover={{ bg: 'none' }}
                    _focus={{ boxShadow: 'none' }}
                  />
                </Flex>
                <Divider 
                    borderColor="white" 
                    borderWidth="2px" 
                    borderStyle="solid"
                />
                <Flex direction="column" gap="2rem" color="white" alignItems="left" mt="2rem">
                  {['Home', 'About Us', 'Services', 'Contact'].map((item) => (
                    <Button
                      key={item}
                      as={RouterLink}
                      to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                      variant="link"
                      fontSize="xl"
                      onClick={onClose}
                      color="white"
                      _hover={{ textDecoration: 'none' }}
                    >
                      {item}
                    </Button>
                  ))}
                </Flex>
              </Box>
            </motion.div>
          )}
        </Flex>
      </Box>
    );
  };
  
  export default Navbar;
  