import React from "react";
import useMobiles from "../hooks/useMobiles";
import { SimpleGrid, Text } from "@chakra-ui/react";
import MobileCard from "./MobileCard";
import MobileCardContainer from "./MobileCardContainer";
import MobileCardSkeleton from "./MobileCardSkeleton";

const MobilesList = () => {
  const { data, isLoading, error } = useMobiles();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  console.log("prin mobiles" + data);
  console.log(data);
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton, index) => (
            <MobileCardContainer key={index}>
              <MobileCardSkeleton />
            </MobileCardContainer>
          ))}
        {data?.map((mobile, index) => (
          <MobileCardContainer key={index}>
            <MobileCard mobile={mobile} />
          </MobileCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MobilesList;
