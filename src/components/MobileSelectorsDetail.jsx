import { Box, Button, HStack } from "@chakra-ui/react";
import StorageSelector from "./StorageSelector";
import ColorSelector from "./ColorSelector";
import PropTypes from "prop-types";

const MobileSelectorsDetail = ({
  mobile,
  handleAddToCart,
  setSelectedColor,
  setSelectedStorage,
  selectedStorage,
  selectedColor,
}) => {
  return (
    <Box marginTop="20px">
      <HStack>
        <StorageSelector
          storages={mobile.options.storages}
          onSelect={setSelectedStorage}
          selectedItem={selectedStorage}
        />
        <ColorSelector
          colors={mobile.options.colors}
          onSelect={setSelectedColor}
          selectedItem={selectedColor}
        />
        <Button
          fontWeight="bold"
          onClick={handleAddToCart}
          fontSize="lg"
          variant="link"
          whiteSpace="normal"
          textAlign="left"
        >
          Añadir al carrito
        </Button>
      </HStack>
    </Box>
  );
};

MobileSelectorsDetail.propTypes = {
  mobile: PropTypes.shape({
    options: PropTypes.shape({
      storages: PropTypes.arrayOf(PropTypes.object),
      colors: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  setSelectedColor: PropTypes.func.isRequired,
  setSelectedStorage: PropTypes.func.isRequired,
  selectedStorage: PropTypes.string,
  selectedColor: PropTypes.string,
};

export default MobileSelectorsDetail;
