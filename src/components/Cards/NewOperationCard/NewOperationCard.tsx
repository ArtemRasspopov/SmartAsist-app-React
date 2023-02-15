import {
  Alert,
  Collapse,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { addNewIncome } from "../../../store/slices/accountsSlice";
import Button from "../../Shared/Buttons/Button/Button";
// import DropDownInput from "../../Shared/DropDownInput/DropDownInput";
import Input from "../../Shared/Input/Input";
import CardWrapper from "../CardWrapper/CardWrapper";
import { Buttons, Form, Inner, Label, Wrapper } from "./NewOperationCardStyle";

const NewOperationCard = () => {
  const dispatch = useAppDispatch();

  const buttons = [
    <Button key={1} bgColor="#64D30D">
      Income
    </Button>,
    <Button key={2} bgColor="#EC0F0F">
      Spending
    </Button>,
    <Button key={3} bgColor="#1890FF">
      Transfer
    </Button>,
  ];

  const categories = [
    { title: "Food products" },
    { title: "Transport" },
    { title: "Clothing" },
    { title: "Entertainment" },
    { title: "Utilities" },
    { title: "Health" },
    { title: "Education" },
    { title: "Insurance" },
    { title: "Real estate" },
    { title: "Tourism" },
    { title: "Leisure" },
    { title: "Debts" },
  ];
  const accounts = useAppSelector((state) => state.accountsSLice.accounts);

  const [selectedAccount, setSelectedAccount] = useState(accounts[0].title);
  const [selectedCategori, setSelectedCategori] = useState<string>(
    categories[0].title
  );
  const [operationNameValue, setOperationNameValue] = useState<string>("");
  const [summValue, setSummValue] = useState<number>(10);
  const [commentValue, setCommentValue] = useState<string>("");
  const [errorAlertValue, setErrorAlertValue] = useState<string>("");

  const clearStates = () => {
    setSelectedCategori(categories[0].title);
    setOperationNameValue("");
    setSelectedAccount(accounts[0].title);
    setCommentValue("");
    setSummValue(10);
    setCommentValue("");
  };

  const newOperationHandler = () => {
    if (operationNameValue === "") {
      setErrorAlertValue(
        (prev) => (prev = `не заполнено поле "Operation name"`)
      );
    } else {
      dispatch(
        addNewIncome({
          selectedAccount,
          selectedCategori,
          operationNameValue,
          summValue,
          commentValue,
        })
      );
      clearStates();
    }
  };

  const accountsHandler = (event: SelectChangeEvent<string>) => {
    setSelectedAccount((prev) => (prev = event.target.value));
  };

  const categoriesHandler = (event: SelectChangeEvent<string>) => {
    setSelectedCategori((prev) => (prev = event.target.value));
  };

  const operationNameValueHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setErrorAlertValue((prev) => (prev = ""));
    setOperationNameValue((prev) => (prev = event.target.value));
  };

  const summValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      Boolean(Number(event.target.value)) ||
      Number(event.target.value) === 0
    ) {
      setSummValue((prev) => (prev = Number(event.target.value)));
    }
  };

  const commentValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue((prev) => (prev = event.target.value));
  };

  return (
    <>
      <Wrapper>
        <CardWrapper title="New operation" headerButtons={buttons}>
          <Inner>
            <Form>
              <Label>
                <span>Operation name :</span>
                <Input
                  value={operationNameValue}
                  type={"text"}
                  placeholder={"Please enter name"}
                  onChange={(event) => operationNameValueHandler(event)}
                />
              </Label>
              <Label>
                <span>Debit account :</span>
                <FormControl
                  variant="standard"
                  sx={{ m: 1, width: 300, textAlign: "start" }}
                >
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={selectedAccount}
                    onChange={(event) => accountsHandler(event)}
                    label="Age"
                  >
                    {accounts.map((item, index) => (
                      <MenuItem key={index} value={item.title}>
                        {item.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Label>
              <Label>
                <span>Categories :</span>
                <FormControl
                  variant="standard"
                  sx={{ m: 1, width: 300, textAlign: "start" }}
                >
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={selectedCategori}
                    onChange={(event) => categoriesHandler(event)}
                    label="Age"
                  >
                    {categories.map((item, index) => (
                      <MenuItem key={index} value={item.title}>
                        {item.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Label>
              <Label>
                <span>Sum :</span>
                <Input
                  value={summValue.toString()}
                  type={"text"}
                  placeholder={"Please enter Sum"}
                  onChange={(event) => summValueHandler(event)}
                />
              </Label>
              <Label>
                <span>Comment :</span>
                <Input
                  value={commentValue}
                  type={"text"}
                  placeholder={"Please enter Comment"}
                  onChange={(event) => commentValueHandler(event)}
                />
              </Label>
            </Form>
            <Collapse in={Boolean(errorAlertValue)}>
              <Alert severity="error">{errorAlertValue}</Alert>
            </Collapse>
            <Buttons>
              <Button bgColor="#1890FF" onClick={() => newOperationHandler()}>
                Add New
              </Button>
              <Button bgColor="#1890FF" onClick={() => clearStates()}>
                Cler all
              </Button>
            </Buttons>
          </Inner>
        </CardWrapper>
      </Wrapper>
    </>
  );
};

export default NewOperationCard;
