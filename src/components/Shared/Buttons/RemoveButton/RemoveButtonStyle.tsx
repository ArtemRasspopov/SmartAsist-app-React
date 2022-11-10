import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  svg{
    path{
      transition: all 0.5s;
    }
  }

  &:hover {
    svg {
      path {
        stroke: black;
      }
    }
  }
`;
