import styled from "styled-components";

type AddTaskProps = {
  bgColor: string;
  active: boolean;
};

export const Wrapper = styled.div`
  #option-select {
    width: 100px;
    padding: 10px 10px 5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.45);
  }
`;

export const Color = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 30px;

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.45);
  }

  input {
    width: 100%;
    max-width: 60%;
  }
`;

export const ColorList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ColorItem = styled.li<AddTaskProps>`
  cursor: pointer;
  background-color: ${(prop) => `${prop.bgColor}`};
  box-shadow: 2px 4px 6px -3px ${(prop) => (prop.active ? `${prop.bgColor}` : "rgba(0, 0, 0, 0.153)")};
  border-radius: 2px;
  width: 25px;
  height: 25px;
  transition: all 0.5s;
  ${(prop) => (prop.active ? `border : 1px solid #303030ae ;` : ``)}
`;
export const SubmitButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-left: auto;
  gap: 20px;
`