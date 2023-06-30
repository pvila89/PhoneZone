import React from "react";
import { Box, Image } from "@chakra-ui/react";

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

export default MobileImageDetail;
