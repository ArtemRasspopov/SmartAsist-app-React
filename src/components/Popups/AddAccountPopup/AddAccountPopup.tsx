import React, { useState } from "react";
import { addNewAccount } from "../../../store/slices/accountsSlice";
import { Label } from "../../AppStyle";
import CardWrapper from "../../Cards/CardWrapper/CardWrapper";
import Button from "../../Shared/Buttons/Button/Button";
import RemoveButton from "../../Shared/Buttons/RemoveButton/RemoveButton";
import Input from "../../Shared/Input/Input";
import {
  ButtonsWrapper,
  Form,
  InputsWrapper,
  Wrapper,
} from "./AddAccountPopupStyle";
import { accountType } from "../../../types/types";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { Alert } from "@mui/material";

interface AddAccountPopupProps {
  closePopup: React.Dispatch<React.SetStateAction<boolean>>;
  accounts: accountType[];
}

const AddAccountPopup: React.FC<AddAccountPopupProps> = ({
  closePopup,
  accounts,
}) => {
  const [titleValue, setTitleValue] = useState<string>("");
  const [countValue, setCountValue] = useState<string>("0");
  const [alertIsOpen, setAlertIsOpen] = useState<boolean>(false);
  const [alertText, setAlertText] = useState<string>("");

  const dispatch = useAppDispatch();

  const InputAccountName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlertIsOpen(false);
    setTitleValue(event.target.value);
  };

  const InputAccountSum = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlertIsOpen(false);
    setCountValue(event.target.value);
  };

  const onClose = () => {
    setAlertIsOpen(false);
    setTitleValue("");
    setCountValue("0");
    closePopup(false);
  };

  const formSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (titleValue && countValue) {
      if (!accounts.some((item) => item.title === titleValue)) {
        const result: accountType = {
          id: titleValue + `${Math.random()}`,
          title: titleValue,
          type: "USD",
          imageSrc: "./images/default-user-icon.png",
          count: +countValue,
        };
        console.log(dispatch(addNewAccount(result)));
        onClose();
      } else {
        setAlertIsOpen(true);
        setAlertText("there is already an account with the same name");
      }
    } else {
      setAlertIsOpen(true);
      setAlertText("Fields cannot be empty");
    }
  };

  return (
    <Wrapper>
      <CardWrapper
        title="Add new account"
        headerButtons={<RemoveButton onClick={onClose} />}
      >
        <Form onSubmit={(event) => formSubmit(event)}>
          <InputsWrapper>
            <Label>
              <span>Account Name :</span>
              <Input
                type="text"
                value={titleValue}
                onChange={(event) => InputAccountName(event)}
              />
            </Label>
            <Label>
              <span>Sum :</span>
              <Input
                type="number"
                value={countValue}
                onChange={(event) => InputAccountSum(event)}
              />
            </Label>
            {alertIsOpen && <Alert severity="error">{alertText}</Alert>}
          </InputsWrapper>
          <ButtonsWrapper>
            <Button bgColor="#64D30D" type={"submit"}>
              Add
            </Button>
          </ButtonsWrapper>
        </Form>
      </CardWrapper>
    </Wrapper>
  );
};

export default AddAccountPopup;
