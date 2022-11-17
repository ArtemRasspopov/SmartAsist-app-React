import styled from "styled-components";

export const Wrapper = styled.div``;

export const Inner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 44px;
  flex-grow: 1;
`;

export const List = styled.ul`

`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 23px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.85);
  padding: 20px 0;
  border-bottom: 1px solid #F0F0F0;
`;

export const UserIcon = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const Text = styled.p``;

export const Count = styled.p`
  margin-left: auto;
`;

export const Info = styled.div`
  margin-left: auto;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.85);
`;


