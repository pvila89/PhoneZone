import { Box, Button, Icon } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const BackButton = ({ handleAddToCart }) => {
  return (
    <Box marginTop="20px">
      <Link to={"/"}>
        <Button
          fontWeight="bold"
          onClick={handleAddToCart}
          fontSize="lg"
          variant="link"
          whiteSpace="normal"
          textAlign="left"
          leftIcon={<Icon as={IoIosArrowBack} />}
        />
      </Link>
    </Box>
  );
};

export default BackButton;
