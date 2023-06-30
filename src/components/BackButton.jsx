import { Box, Button, Icon } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

BackButton.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};

export default BackButton;
