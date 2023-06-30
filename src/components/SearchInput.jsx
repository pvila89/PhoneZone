import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import PropTypes from "prop-types";

const SearchInput = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <InputGroup>
      <InputLeftElement>
        <BsSearch />
      </InputLeftElement>
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

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;
