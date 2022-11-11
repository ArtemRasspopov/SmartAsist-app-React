import styled from "styled-components";

type InProgressTasksCardType = {
  checked: boolean;
};

export const Wrapper = styled.div`
  height: 100%;
  background-color: antiquewhite;
`;

export const List = styled.ul`

`;

export const Item = styled.li`
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 13px;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
`;

export const ItemInfo = styled.div``;

export const ItemText = styled.p<InProgressTasksCardType>`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${(prop) =>
    prop.checked ? "rgba(0, 0, 0, 0.301)" : "rgba(0, 0, 0, 0.85)"};
  margin-bottom: 5px;
  ${(prop) =>
    prop.checked && "text-decoration: line-through rgba(0, 0, 0, 0.311);"}
`;

export const ItemsBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Date = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.45);
`;
