import styled from "styled-components";

type buttonType = {
  bgColor: string;
};

export const Wrapper = styled.button<buttonType>`
  background-color: ${(prop) => `${prop.bgColor}`};
  color: white;
  padding: 5px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  border-radius: 2px;
`;
