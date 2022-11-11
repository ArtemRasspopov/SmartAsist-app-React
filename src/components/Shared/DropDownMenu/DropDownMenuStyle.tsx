import styled from "styled-components";

export const Wrapper = styled.button`
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;

  svg{
    circle{
      transition: all 0.5s;
    }
  }

  &:hover{
    svg{
      circle{
        fill: black;
      }
    }
  }
`;
