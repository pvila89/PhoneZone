import { useState } from "react";
import useMobiles from "../hooks/useMobiles";
import { SimpleGrid, Box } from "@chakra-ui/react";
import MobileCard from "./MobileCard";
import MobileCardContainer from "./MobileCardContainer";
import MobileCardSkeleton from "./MobileCardSkeleton";
import SearchInput from "./SearchInput";
import React from "react";

const MobilesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useMobiles(searchTerm);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <>
      <Box padding="30px">
        <SearchInput onSearch={handleSearch} />
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          paddingTop="20px"
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
      </Box>
    </>
  );
};

export default MobilesList;
