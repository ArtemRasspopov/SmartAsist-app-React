import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.03);
  border-radius: 2px;
  padding: 20px 24px 10px;
  width: max-content;
  min-width: 278px;
  width: 100%;
  display: flex;
  flex-direction: column;
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

export const ProgressLine = styled.div`
  width: 100%;
  max-width: 300px;
  height: 13px;
  background-color: #bababa6f;
  position: relative;
  margin-top: auto;
  margin-bottom: 12px;
  border-radius: 2px;
  overflow: hidden;

  &::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #13C2C2;
    width: 70%;
  }


`