import styled from "styled-components";

export const List = styled.ul`
  display: flex;
`;
export const ListItem = styled.li`
  &:not(:first-child) {
    padding-left: 8px;
    position: relative;

    &::before {
      content: "/";
      position: absolute;
      left: -2px;
      color: rgba(0, 0, 0, 0.45);
    }
  }

  &:not(:last-child) {
    padding-right: 8px;
    color: rgba(0, 0, 0, 0.45);
  }

  &:last-child {
    color: rgba(0, 0, 0, 0.85);
  }
`;
