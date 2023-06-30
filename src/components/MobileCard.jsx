import {
  Badge,
  Box,
  Card,
  CardBody,
  Grid,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

MobileCard.propTypes = {
  mobile: PropTypes.shape({
    price: PropTypes.string,
    id: PropTypes.string,
    brand: PropTypes.string,
    model: PropTypes.string,
    imgUrl: PropTypes.string,
  }).isRequired,
};

export default MobileCard;
