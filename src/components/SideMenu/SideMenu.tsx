import React, { useState } from "react";
import HomeIcon from "../SvgIcons/HomeIcon";
import SettingsIcon from "../SvgIcons/SettingsIcon";
import TodoIcon from "../SvgIcons/TodoIcon";
import WalletIcon from "../SvgIcons/WalletIcon";
import { IconWrapper, MenuButton, MenuItem, MenuList } from "./SideMenuStyle";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const menuItems = [
    { title: "Home", icon: <HomeIcon />, link: "/" },
    { title: "Finance", icon: <WalletIcon />, link: "/finance" },
    { title: "Tasks", icon: <TodoIcon />, link: "/tasks" },
    { title: "Settings", icon: <SettingsIcon />, link: "/not-found" },
  ];

  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const navigate = useNavigate()

  const ButtonOnClick = (index: number, link: string) => {
    setActiveMenuItem(index);
    navigate(link)
  };

  return (
    <MenuList>
      {menuItems.map((menuItem, index) => (
        <MenuItem key={menuItem.title}>
          <MenuButton
            active={index === activeMenuItem}
            onClick={() => ButtonOnClick(index, menuItem.link)}
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
