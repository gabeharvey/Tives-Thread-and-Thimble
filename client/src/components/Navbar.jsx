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
  Image,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CgMenuGridO } from 'react-icons/cg';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const { isAuthenticated, user, logout } = useContext(AuthContext); 

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowCloseIcon(false), 200);
    } else {
      setShowCloseIcon(false);
    }
  }, [isOpen]);

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: { opacity: 0, x: '100%' },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Box
      className="navbar-background"
      py="2.5rem"
      px="2rem"
      position="relative"
      boxShadow="lg"
      mb="20px"
      fontFamily="'Satisfy', cursive"
    >
      <Flex alignItems="center" justifyContent="space-between" wrap="wrap">
        <Heading
          as={RouterLink}
          to="/"
          fontSize="xl"
          fontFamily="'Shadows Into Light Two', cursive"
          color="beige"
          letterSpacing="wider"
        >
          Tive's Thread & Thimble
        </Heading>

        <Spacer />
        <IconButton
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          icon={showCloseIcon ? <CloseIcon /> : <CgMenuGridO color="beige" />}
          display={['block', 'block', 'none']}
          onClick={isOpen ? onClose : onOpen}
          variant="unstyled"
          fontSize="30px"
          color="beige"
          _hover={{ bg: 'none' }}
          _focus={{ boxShadow: 'none' }}
          _active={{
            transform: 'rotate(90deg)',
            transition: 'transform 0.3s ease-in-out',
          }}
          mt="20px"
          mb="20px"
        />

        <Flex
          as="ul"
          display={['none', 'none', 'flex']}
          listStyleType="none"
          ml="auto"
          alignItems="center"
          gap="2rem"
          flex="1"
          justifyContent="space-evenly"
        >
          <Link
            as={RouterLink}
            to="/"
            fontSize="md"
            color="beige"
            fontWeight="bold"
            position="relative"
            _hover={{
              textDecoration: 'none',
              _after: { width: '100%' },
            }}
            _after={{
              content: '""',
              position: 'absolute',
              bottom: '-0.2rem',
              left: 0,
              width: 0,
              height: '2px',
              bg: 'beige',
              transition: 'width 0.3s ease',
            }}
          >
            Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link
                as={RouterLink}
                to="/gallery"
                fontSize="md"
                color="beige"
                fontWeight="bold"
                position="relative"
                _hover={{
                  textDecoration: 'none',
                  _after: { width: '100%' },
                }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-0.2rem',
                  left: 0,
                  width: 0,
                  height: '2px',
                  bg: 'beige',
                  transition: 'width 0.3s ease',
                }}
              >
                Gallery
              </Link>
              <Text
                fontSize="md"
                color="beige"
                fontWeight="bold"
                position="relative"
                display={['none', 'none', 'block']}
              >
                Logged in as {user?.username}
              </Text>
              <Button
                onClick={logout} 
                fontSize="md"
                color="beige"
                variant="unstyled"
                fontWeight="bold"
                _hover={{ textDecoration: 'underline' }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link
                as={RouterLink}
                to="/signup"
                fontSize="md"
                color="beige"
                fontWeight="bold"
                position="relative"
                _hover={{
                  textDecoration: 'none',
                  _after: { width: '100%' },
                }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-0.2rem',
                  left: 0,
                  width: 0,
                  height: '2px',
                  bg: 'beige',
                  transition: 'width 0.3s ease',
                }}
              >
                Sign Up
              </Link>
              <Link
                as={RouterLink}
                to="/login"
                fontSize="md"
                color="beige"
                fontWeight="bold"
                position="relative"
                _hover={{
                  textDecoration: 'none',
                  _after: { width: '100%' },
                }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-0.2rem',
                  left: 0,
                  width: 0,
                  height: '2px',
                  bg: 'beige',
                  transition: 'width 0.3s ease',
                }}
              >
                Log In
              </Link>
            </>
          )}
        </Flex>

        {isOpen && (
          <motion.div initial="hidden" animate="visible" exit="exit" variants={menuVariants}>
            <Box
              position="fixed"
              top="0"
              right="0"
              width="70%"
              height="100vh"
              bg="#F6CBD4"
              zIndex="overlay"
              color="#A66A8A"
              borderTopLeftRadius="30px"
              borderBottomLeftRadius="30px"
              boxShadow="0 0 15px rgba(166, 106, 138, 0.8)"
            >
              <motion.div variants={itemVariants}>
                <Flex alignItems="center" justifyContent="space-between" mb="1rem">
                  <Flex alignItems="center" ml="20px">
                    <Image
                      src="black-cat-logo.png"
                      alt="Black Cat Icon"
                      boxSize="40px"
                      marginRight="0.5rem"
                      marginTop="10px"
                    />
                    <Text fontSize="2xl" fontWeight="bold" color="#A66A8A" fontFamily="'Satisfy', cursive" mt="20px">
                      Menu
                    </Text>
                  </Flex>
                  <IconButton
                    aria-label="Close Menu"
                    icon={<CloseIcon />}
                    onClick={onClose}
                    variant="unstyled"
                    fontSize="24px"
                    color="#A66A8A"
                    padding="10px"
                    mr="20px"
                    _hover={{ bg: 'none' }}
                    _focus={{ boxShadow: 'none' }}
                    _active={{
                      transform: 'rotate(90deg)',
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  />
                </Flex>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Divider borderColor="#A66A8A" borderWidth="2px" borderStyle="solid" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Flex direction="column" gap="2rem" color="#A66A8A" alignItems="flex-start" mt="2rem" ml="2rem">
                  <Button
                    as={RouterLink}
                    to="/"
                    variant="link"
                    fontSize="xl"
                    fontFamily="'Satisfy', cursive"
                    onClick={onClose}
                    color="#A66A8A"
                    _hover={{ textDecoration: 'none' }}
                  >
                    Home
                  </Button>
                  {isAuthenticated ? (
                    <>
                      <Button
                        as={RouterLink}
                        to="/gallery"
                        variant="link"
                        fontSize="xl"
                        fontFamily="'Satisfy', cursive"
                        onClick={onClose}
                        color="#A66A8A"
                        _hover={{ textDecoration: 'none' }}
                      >
                        Gallery
                      </Button>
                      <Text fontSize="lg" color="#A66A8A">
                        Logged in as {user?.username}
                      </Text>
                      <Button
                        onClick={logout}
                        variant="link"
                        fontSize="xl"
                        fontFamily="'Satisfy', cursive"
                        color="#A66A8A"
                        _hover={{ textDecoration: 'none' }}
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        as={RouterLink}
                        to="/signup"
                        variant="link"
                        fontSize="xl"
                        fontFamily="'Satisfy', cursive"
                        onClick={onClose}
                        color="#A66A8A"
                        _hover={{ textDecoration: 'none' }}
                      >
                        Sign Up
                      </Button>
                      <Button
                        as={RouterLink}
                        to="/login"
                        variant="link"
                        fontSize="xl"
                        fontFamily="'Satisfy', cursive"
                        onClick={onClose}
                        color="#A66A8A"
                        _hover={{ textDecoration: 'none' }}
                      >
                        Log In
                      </Button>
                    </>
                  )}
                </Flex>
              </motion.div>
            </Box>
          </motion.div>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
