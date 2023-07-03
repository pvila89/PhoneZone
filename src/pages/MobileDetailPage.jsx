import { GridItem, SimpleGrid, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import MobileImageDetail from "../components/MobileImageDetail";
import MobileInformation from "../components/MobileInformation";
import MobileSelectorsDetail from "../components/MobileSelectorsDetail";
import useAddToCart from "../hooks/useAddToCard";
import useMobile from "../hooks/useMobile";
import { handleAddToCart } from "../services/cartService";
import useMobileStore from "../store";

const MobileDetailPage = () => {
  const { id } = useParams();
  const { data: mobile, isLoading, error } = useMobile(id);
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const addToCartMutation = useAddToCart();
  const setCartItems = useMobileStore((state) => state.setCartItems);

  useEffect(() => {
    if (addToCartMutation.isSuccess) {
      setCartItems(addToCartMutation.data.count);
    }
  }, [addToCartMutation.isSuccess, addToCartMutation.data, setCartItems]);

  if (isLoading) return <Spinner data-testid="loading-spinner" />;

  if (error) throw error;

  console.log(mobile);

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem
        display="flex"
        justifyContent="center"
        alignItems="center"
        maxH="500px"
      >
        <MobileImageDetail imgUrl={mobile.imgUrl} />
      </GridItem>
      <GridItem>
        <MobileInformation mobile={mobile} />
        <MobileSelectorsDetail
          mobile={mobile}
          handleAddToCart={() =>
            handleAddToCart(
              mobile,
              selectedStorage,
              selectedColor,
              addToCartMutation
            )
          }
          setSelectedColor={setSelectedColor}
          setSelectedStorage={setSelectedStorage}
          selectedStorage={selectedStorage}
          selectedColor={selectedColor}
        />
        <BackButton handleAddToCart={handleAddToCart} />
      </GridItem>
    </SimpleGrid>
  );
};

export default MobileDetailPage;
