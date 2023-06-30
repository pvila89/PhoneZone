import React from "react";
import { Box, Button, HStack } from "@chakra-ui/react";
import StorageSelector from "./StorageSelector";
import ColorSelector from "./ColorSelector";

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

export default MobileSelectorsDetail;
