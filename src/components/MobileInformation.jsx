import { Text, Box } from "@chakra-ui/react";
import React from "react";

const MobileInformation = ({ mobile }) => {
  return (
    <Box>
      <Text>{mobile.brand}</Text>
      <Text>{mobile.model}</Text>
      <Text>{mobile.price}€</Text>
      <Text>{mobile.cpu}</Text>
      <Text>{mobile.ram}</Text>
      <Text>{mobile.os}</Text>
      <Text>{mobile.displaySize}</Text>
      <Text>{mobile.battery}</Text>
      <Text>{mobile.primaryCamera}</Text>
      <Text>{mobile.dimentions}</Text>
      <Text>{mobile.weight}</Text>
    </Box>
  );
};

export default MobileInformation;
