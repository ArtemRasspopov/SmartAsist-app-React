import styled from "styled-components";

export const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 48px);
  overflow-y: scroll;
`;

export const Inner = styled.div`
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 14px;

`;

export const FirstLine = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: 1fr 1fr 2fr;
`;

export const LineTwo = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: 3fr 2fr;
`
