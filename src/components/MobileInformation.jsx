import { Text, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

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

MobileInformation.propTypes = {
  mobile: PropTypes.shape({
    brand: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.number,
    cpu: PropTypes.string,
    ram: PropTypes.string,
    os: PropTypes.string,
    displaySize: PropTypes.string,
    battery: PropTypes.string,
    primaryCamera: PropTypes.string,
    dimentions: PropTypes.string,
    weight: PropTypes.string,
  }).isRequired,
};

export default MobileInformation;
