import { HStack, Box, Icon, Heading, Badge } from "@chakra-ui/react";
import { FaMobileAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import useMobileStore from "../store";

const NavBar = () => {
  const cartItemsCount = useMobileStore((state) => state.cartItems);
  const title =
    useLocation().pathname === "/" ? "Phone -Listado móviles" : "Detalle móvil";

  return (
    <HStack padding="30px" justifyContent="space-between">
      <Box boxSize="60px">
        <Icon as={FaMobileAlt} w="100%" h="100%" />
      </Box>
      <Heading>{title}</Heading>
      <HStack spacing={2}>
        <Icon as={FaShoppingCart} w={8} h={8} />
        <Badge borderRadius="full" px="2" colorScheme="red">
          {cartItemsCount}
        </Badge>
      </HStack>
    </HStack>
  );
};

export default NavBar;
