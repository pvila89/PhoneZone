import { BsChevronBarDown } from "react-icons/bs";
import { Menu, MenuButton, MenuList, Button, MenuItem } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ColorSelector = ({ colors, selectedItem, onSelect }) => {
  const selectedValue = colors.length === 1 ? colors[0] : selectedItem;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedValue?.name || "Selecciona color"}
      </MenuButton>
      <MenuList>
        {colors.map((color) => (
          <MenuItem onClick={() => onSelect(color)} key={color.code}>
            {color.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

ColorSelector.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedItem: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
  }),
  onSelect: PropTypes.func.isRequired,
};

export default ColorSelector;
