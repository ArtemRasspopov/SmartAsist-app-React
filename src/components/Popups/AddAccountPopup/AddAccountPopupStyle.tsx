import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: max-content;
  width: 100%;

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;  
  flex-grow: 1;
`

export const InputsWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  gap: 25px;
  margin-bottom: auto;
`

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`