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
import { useState, useEffect, useContext, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const { isAuthenticated, user, logout } = useContext(AuthContext); 
  const menuRef = useRef();
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowCloseIcon(false), 200);
    } else {
      setShowCloseIcon(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

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
          icon={
            showCloseIcon ? (
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop' }}
              >
                <CloseIcon />
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop' }}
              >
                <CgMenuGridO color="beige" />
              </motion.div>
            )
          }
          display={['block', 'block', 'none']}
          onClick={isOpen ? onClose : onOpen}
          variant="unstyled"
          fontSize="30px"
          color="beige"
          _hover={{ bg: 'none' }}
          _focus={{ boxShadow: 'none' }}
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
              <Link
                as={RouterLink}
                to="/shoppingcart"
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
                Shopping Cart
              </Link>
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
              <Text
                fontSize="md"
                color="beige"
                fontWeight="bold"
                position="relative"
                display={['none', 'none', 'block']}
              >
                Logged in as <Box as="span" fontFamily="'Shadows Into Light Two', cursive">{user?.username}</Box>
              </Text>
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
      ref={menuRef}
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
            icon={
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop' }}
              >
                <CloseIcon />
              </motion.div>
            }
            onClick={onClose}
            variant="unstyled"
            fontSize="24px"
            color="#A66A8A"
            padding="10px"
            mr="20px"
            mt="20px"
          />
        </Flex>
        <Divider borderColor="#A66A8A" />
        <Flex
          direction="column"
          alignItems="flex-start"
          justifyContent="space-evenly"
          h="80%"
          ml="20px"
          mt="20px"
          gap="2rem"
        >
          <Link
            as={RouterLink}
            to="/"
            fontSize="md"
            fontWeight="bold"
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
              bg: '#A66A8A',
              transition: 'width 0.3s ease',
            }}
            onClick={onClose} 
          >
            Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link
            as={RouterLink}
            to="/gallery"
            fontSize="md"
            fontWeight="bold"
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
              bg: '#A66A8A',
              transition: 'width 0.3s ease',
            }}
            onClick={onClose} 
          >
            Gallery
          </Link>
              <Link
                as={RouterLink}
                to="/shoppingcart"
                fontSize="md"
                fontWeight="bold"
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
                  bg: '#A66A8A',
                  transition: 'width 0.3s ease',
                }}
                onClick={onClose} 
              >
                Shopping Cart
              </Link>
              <Link
                as={RouterLink}
                to="/"
                fontSize="md"
                fontWeight="bold"
                color="#A66A8A"
                onClick={() => {
                  logout();
                  onClose(); 
                }}
                _hover={{ textDecoration: 'underline' }}
              >
                Logout
              </Link>
              <Text fontSize="md" fontWeight="bold" color="#A66A8A" mt="1rem">
                Logged in as <Box as="span" fontFamily="'Shadows Into Light Two', cursive">{user?.username}</Box>
              </Text>
            </>
          ) : (
            <>
              <Link
                as={RouterLink}
                to="/login"
                fontSize="md"
                fontWeight="bold"
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
                  bg: '#A66A8A',
                  transition: 'width 0.3s ease',
                }}
                onClick={onClose} 
              >
                Log In
              </Link>
              <Link
                as={RouterLink}
                to="/signup"
                fontSize="md"
                fontWeight="bold"
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
                  bg: '#A66A8A',
                  transition: 'width 0.3s ease',
                }}
                onClick={onClose} 
              >
                Sign Up
              </Link>
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
