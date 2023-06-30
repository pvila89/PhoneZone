import React from "react";
import { Box } from "@chakra-ui/react";

const MobileCardContainer = ({ children }) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default MobileCardContainer;
