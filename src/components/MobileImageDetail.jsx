import { Box, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const MobileImageDetail = ({ imgUrl }) => {
  return (
    <Box w="100%" h="100%">
      <Image
        src={imgUrl}
        alt="Mobile Image"
        objectFit="contain"
        w="100%"
        h="100%"
      />
    </Box>
  );
};

MobileImageDetail.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default MobileImageDetail;
