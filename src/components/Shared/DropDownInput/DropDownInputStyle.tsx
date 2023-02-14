import styled from "styled-components";

export const Wrapper = styled.div``;

export const Input = styled.input`
  padding: 5px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  cursor: pointer;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const DataList = styled.datalist``;

export const Option = styled.option`
  cursor: pointer;
`;
