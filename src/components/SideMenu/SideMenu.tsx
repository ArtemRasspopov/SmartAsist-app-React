import React, { useState } from "react";
import HomeIcon from "../SvgIcons/HomeIcon";
import SettingsIcon from "../SvgIcons/SettingsIcon";
import TodoIcon from "../SvgIcons/TodoIcon";
import WalletIcon from "../SvgIcons/WalletIcon";
import { IconWrapper, MenuButton, MenuItem, MenuList } from "./SideMenuStyle";

const SideMenu = () => {
  const menuItems = [
    { title: "Home", icon: <HomeIcon /> },
    { title: "Finance", icon: <WalletIcon /> },
    { title: "ToDo", icon: <TodoIcon /> },
    { title: "Settings", icon: <SettingsIcon /> },
  ];

  const [activeMenuItem, setActiveMenuItem] = useState(0);

  const ButtonOnClick = (index: number) => {
    setActiveMenuItem(index);
  };

  return (
    <MenuList>
      {menuItems.map((menuItem, index) => (
        <MenuItem key={menuItem.title}>
          <MenuButton
            active={index === activeMenuItem}
            onClick={() => ButtonOnClick(index)}
          >
            <IconWrapper>{menuItem.icon}</IconWrapper>
            {menuItem.title}
          </MenuButton>
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default SideMenu;
