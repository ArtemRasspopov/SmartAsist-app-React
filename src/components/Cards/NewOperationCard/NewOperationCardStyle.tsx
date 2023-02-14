import styled from "styled-components";

export const Wrapper = styled.div`
  
`;

export const Inner = styled.div`
  padding: 20px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: right;
  color: rgba(0, 0, 0, 0.85);
  display: flex;
  gap: 18px;

  span{
    width: 120px;
    text-align: left;
  }

  input{
    min-width: 300px;
  }
`;

export const Buttons = styled.div`
  display: grid;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  grid-template-columns: 3fr 1fr;
  margin-top: 20px;
  gap: 20px;
`
