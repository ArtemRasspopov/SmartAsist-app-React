import styled from "styled-components";

type SideMenuType = {
  active: boolean;
};

export const MenuList = styled.ul`
  min-width: 208px;
  height: calc(100vh - 48px);
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;
`;

export const MenuItem = styled.li``;

export const MenuButton = styled.button<SideMenuType>`
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 16px;
  width: 100%;
  transition: color 0.3s;
  transition: background-color 0.3s;

  ${(prop) =>
    prop.active &&
    "background-color: #E6F7FF;  border-right: 2px solid #1890ff; color: #1890ff;"}

  &:hover {
    color: #1890ff;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  min-width: 20px;
  justify-content: center;
`
