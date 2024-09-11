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
  Image
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CgMenuGridO } from 'react-icons/cg';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  const menuItems = ['Gallery', 'Sign Up', 'Log In'];

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
      <Flex alignItems="center" justifyContent="space-between">
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
            showCloseIcon
              ? <CloseIcon />
              : <CgMenuGridO color="beige" />
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
          alignItems="left"
          gap="2rem"
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
              bg: 'beige',
              transition: 'width 0.3s ease',
            }}
          >
            Home
          </Link>
          {menuItems.map((item) => (
            <Link
              key={item}
              as={RouterLink}
              to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
              fontSize="md"
              color="beige"
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
                bg: 'beige',
                transition: 'width 0.3s ease',
              }}
            >
              {item}
            </Link>
          ))}
        </Flex>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <Box
              position="fixed"
              top="0"
              right="0"
              width="70%"
              height="100vh"
              bg="#F6CBD4"
              zIndex="overlay"
              display="block"
              color="#A66A8A"
              transition="opacity 0.5s ease"
              sx={{
                borderImage: "linear-gradient(to right, #F6CBD4, #A66A8A) 1",
              }}
              borderTopLeftRadius="30px"
              borderBottomLeftRadius="30px"
              boxShadow="0 0 15px rgba(166, 106, 138, 0.8)"
            >
              <motion.div variants={itemVariants}>
                <Flex alignItems="center" justifyContent="space-between" mb="1rem">
                  <Flex alignItems="center" ml="20px">
                    <Image src="black-cat-logo.png" alt="Black Cat Icon" boxSize="40px" marginRight="0.5rem" marginTop="10px" />
                    <Text
                      fontSize="2xl"
                      fontWeight="bold"
                      color="#A66A8A"
                      fontFamily="'Satisfy', cursive"
                      mt="20px"
                    >
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
                  {menuItems.map((item) => (
                    <Button
                      key={item}
                      as={RouterLink}
                      to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                      variant="link"
                      fontSize="xl"
                      fontFamily="'Satisfy', cursive"
                      onClick={onClose}
                      color="#A66A8A"
                      _hover={{ textDecoration: 'none' }}
                    >
                      {item}
                    </Button>
                  ))}
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
