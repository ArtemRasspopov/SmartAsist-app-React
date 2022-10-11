import styled from "styled-components";

type LogoType = {
  theme: string;
};

export const Inner = styled.a<LogoType>`
  display: block;
  width: max-content;

  svg {
    path {
      transition: fill 0.5s;
    }
    path:nth-child(9),
    path:nth-child(10),
    path:nth-child(11) {
      fill: ${(props) => (props.theme === 'black' ? 'white' : 'black')};
    }
  }
`;
