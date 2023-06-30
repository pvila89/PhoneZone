import React from "react";
import { BsChevronBarDown } from "react-icons/bs";
import { Menu, MenuButton, MenuList, Button, MenuItem } from "@chakra-ui/react";

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

export default ColorSelector;
