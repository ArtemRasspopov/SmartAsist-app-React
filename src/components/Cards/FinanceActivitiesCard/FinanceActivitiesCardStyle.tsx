import styled from "styled-components";

export const Wrapper = styled.div``;

export const List = styled.ul``;

export const Item = styled.li`
  padding: 12px 0;
  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
  &:first-child {
    padding-top: 0;
  }
`;

export const Link = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ItemIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const ItemText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3px;
  margin-right: auto;

  span {
    display: block;
    max-width: max-content;
    color: rgba(0, 0, 0, 0.45);
  }
`;

export const MoreButtonWrapper = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;

  button{
    width: 100%;
  }
`

