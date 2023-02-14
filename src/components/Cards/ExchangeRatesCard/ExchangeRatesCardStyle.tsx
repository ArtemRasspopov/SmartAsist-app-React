import styled from "styled-components";

export const Wrapper = styled.div``;

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:first-child){
    margin-top: 17px;
  }
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Count = styled.p`
  
`;

export const Info = styled.div`
  display: flex;
  gap: 20px;
`;

export const ItemIcon = styled.img`
    width: 25px;
    height: 25px;
`;



