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

export const Count = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.45);
  max-width: 550px;
`;

export const ButtonWrapper = styled.div`
  margin-left: auto;
  margin-top: auto;
`;
