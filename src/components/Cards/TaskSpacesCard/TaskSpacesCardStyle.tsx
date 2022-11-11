import styled from "styled-components";

type TaskSpacesCardType = {
  color: string;
};

export const Wrapper = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.li<TaskSpacesCardType>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px 10px 25px;
  background: rgba(163, 184, 204, 0.15);
  box-shadow: 1px 5px 15px -1px rgba(111, 111, 111, 0.12);
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    top: 0;
    width: 8px;
    background: #a9b0ee;
    background-color: ${(prop) => (prop.color ? `${prop.color}` : "#a9b0ee")};
  }
`;

export const ItemInfo = styled.div``;

export const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.69);
  margin-bottom: 2px;
`;

export const Quantity = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.45);
`;
