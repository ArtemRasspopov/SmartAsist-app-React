import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 48px);
`;
export const Inner = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  overflow-y: scroll;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`
