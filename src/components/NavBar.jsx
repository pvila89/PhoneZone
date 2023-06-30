import { HStack, Box, Icon } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import { FaMobileAlt } from "react-icons/fa";
import React from "react";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Box boxSize="60px">
        <Icon as={FaMobileAlt} w="100%" h="100%" />
      </Box>
      <SearchInput />
    </HStack>
  );
};

export default NavBar;
