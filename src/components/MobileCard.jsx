import {
  Badge,
  Box,
  Card,
  CardBody,
  Grid,
  Heading,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const MobileCard = ({ mobile }) => {
  const color = mobile.price !== "" ? "green" : "red";
  const price = mobile.price !== "" ? mobile.price + " €" : "out of stock";

  return (
    <Card>
      <CardBody>
        <Grid templateColumns="1fr auto" gap={4}>
          <Image
            src={mobile.imgUrl}
            alt="Mobile Image"
            gridColumn="1"
            gridRow="1 / span 2"
            minWidth="160px"
          />
          <Box
            display="flex"
            flexDirection="column"
            gridColumn="2"
            gridRow="1 / span 2"
          >
            <Box>
              <Heading fontSize={20}>
                <Link to={"/mobiles/" + mobile.id}>
                  {mobile.brand + " " + mobile.model}
                </Link>
              </Heading>
            </Box>
            <Box display="flex" justifyContent="flex-end" mt="auto">
              <Badge
                fontSize="20px"
                paddingX={2}
                borderRadius="4px"
                colorScheme={color}
              >
                {price}
              </Badge>
            </Box>
          </Box>
        </Grid>
      </CardBody>
    </Card>
  );
};

export default MobileCard;
