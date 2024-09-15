import { useState } from 'react';
import { Box, Heading, Text, Button, Image, Stack } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa'; 

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Black Dress", price: 59.99, image: "/black-dress.png" },
    { id: 2, name: "Green Gold Dress", price: 79.99, image: "/green-gold-dress.png" },
    { id: 3, name: "Vintage Dress", price: 89.99, image: "/vintage-dress.png" },
  ]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Box
      maxW="1280px"
      mx="auto"
      px="2rem"
      py="4rem"
      textAlign="center"
      bg="transparent"
      backgroundImage="url('/fashion-girl.png')"
      backgroundPosition="center top"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      mt={20}
    >
      <Heading
        as="h1"
        size="xl"
        mb="1rem"
        fontFamily="'Satisfy', cursive"
        color="red"
        fontWeight="900"
      >
        Your Shopping Cart
      </Heading>

      <Stack direction="column" spacing={8} align="center" mt={8}>
        {cartItems.map(item => (
          <Box
            key={item.id}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            bg="white"
            borderRadius="15px"
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            width="99%"
            p={4}
            fontFamily="'Satisfy', cursive"
          >
            <Image
              src={item.image}
              alt={item.name}
              borderRadius="15px"
              objectFit="cover"
              width="100px"
              height="150px"
            />
            <Text fontSize="l" fontWeight="bold" color="gray.700" ml={4}>
              {item.name}
            </Text>
            <Text fontSize="l" fontWeight="bold" color="gray.700">
              ${item.price.toFixed(2)}
            </Text>
            <Button
              onClick={() => removeItem(item.id)}
              bg="#CA85A0"
              color="white"
              size="sm"
              _hover={{ bg: "#C2A8B2" }}
              borderRadius="md"
              ml={4}
              p={2} 
            >
              <FaTrashAlt size="20px" /> 
            </Button>
          </Box>
        ))}
      </Stack>

      <Box mt={12}>
        <Text fontSize="2xl" fontWeight="bold" color="gray.800">
          Total Price: ${totalPrice.toFixed(2)}
        </Text>
        <Link to="/checkout">
        <Button
            bg="#CA85A0"
            color="beige"
            size="lg"
            borderRadius="md"
            mt={6}
            _hover={{
                bg: "#C2A8B2",
                boxShadow: "md",
                cursor: "pointer", 
            }}
            _active={{
                bg: "#B399A3",
                boxShadow: "inner", 
            }}
            boxShadow="lg"
            fontFamily="'Satisfy', cursive"
            p={4} 
            display="inline-flex" 
            alignItems="center" 
            justifyContent="center" 
            >
            Proceed to Checkout
        </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ShoppingCart;