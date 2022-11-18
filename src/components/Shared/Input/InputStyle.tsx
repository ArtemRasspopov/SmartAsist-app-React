import styled from "styled-components";

export const Wrapper = styled.input`
  padding: 5px 12px;
  border-bottom: 1px solid #d9d9d9;
  border-radius: 2px;
  color: #8e8e8e;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.352);
  }
`;
