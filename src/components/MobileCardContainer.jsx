import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

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

MobileCardContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MobileCardContainer;
