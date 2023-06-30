import { BsChevronBarDown } from "react-icons/bs";
import { Menu, MenuButton, MenuList, Button, MenuItem } from "@chakra-ui/react";
import PropTypes from "prop-types";

const StorageSelector = ({ storages, selectedItem, onSelect }) => {
  const selectedValue = storages.length === 1 ? storages[0] : selectedItem;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedValue?.name || "Selecciona almacenamiento"}
      </MenuButton>
      <MenuList>
        {storages.map((storage) => (
          <MenuItem onClick={() => onSelect(storage)} key={storage.code}>
            {storage.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

StorageSelector.propTypes = {
  storages: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedItem: PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  onSelect: PropTypes.func.isRequired,
};

export default StorageSelector;
