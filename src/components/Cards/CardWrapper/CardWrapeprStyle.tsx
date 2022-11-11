import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #f0f0f0;
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.85);
`;

export const Inner = styled.div`
  min-height: 300px;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;
