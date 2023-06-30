import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        placeholder="Buscar móviles..."
        variant="filled"
        value={searchText}
        onChange={handleSearch}
      />
    </InputGroup>
  );
};

export default SearchInput;
