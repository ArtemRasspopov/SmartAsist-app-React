import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.03);
  border-radius: 2px;
  padding: 20px 24px 38px;
  width: max-content;
  min-width: 250px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.45);
`;

export const Count = styled.p`
  font-weight: 500;
  font-size: 30px;
  line-height: 40px;
  color: rgba(0, 0, 0, 0.85);
  margin: 10px 0 2px;
`;

export const Info = styled.p`
  display: block;
  position: relative;
  padding-right: 20px;
  

  &::after {
    content: "";
    background-image: url(./images/greenArrow.svg);
    width: 10px;
    height: 6px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`;
