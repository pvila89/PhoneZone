import { HStack, Box, Icon, Heading } from "@chakra-ui/react";
import { FaMobileAlt } from "react-icons/fa";
import React from "react";

const NavBar = () => {
  return (
    <HStack padding="30px">
      <Box boxSize="60px">
        <Icon as={FaMobileAlt} w="100%" h="100%" />
      </Box>
      <Heading>PhoneZone - Listado móviles</Heading>
    </HStack>
  );
};

export default NavBar;
