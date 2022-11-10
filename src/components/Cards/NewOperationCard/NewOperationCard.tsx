import React from "react";
import Button from "../../Shared/Buttons/Button/Button";
import DropDownInput from "../../Shared/DropDownInput/DropDownInput";
import Input from "../../Shared/Input/Input";
import CardWrapper from "../CardWrapper/CardWrapper";
import { Buttons, Form, Inner, Label, Wrapper } from "./NewOperationCardStyle";

const NewOperationCard = () => {
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

  const accounts = ["Alfa", "Tincoff", "BelBank"];

  return (
    <Wrapper>
      <CardWrapper title="New operation" headerButtons={buttons}>
        <Inner>
          <Form>
            <Label>
              <span>Operation name :</span>
              <Input
                type={"text"}
                placeholder={"Please enter name"}
                onChange={() => {}}
              />
            </Label>
            <Label>
              <span>Debit account :</span>
              <DropDownInput onChange={(value) => {}} options={accounts} />
            </Label>
            <Label>
              <span>Сategory :</span>
              <DropDownInput onChange={(value) => {}} options={accounts} />
            </Label>
            <Label>
              <span>Sum :</span>
              <Input
                type={"text"}
                placeholder={"Please enter Sum"}
                onChange={() => {}}
              />
            </Label>
            <Label>
              <span>Comment :</span>
              <Input
                type={"text"}
                placeholder={"Please enter Comment"}
                onChange={() => {}}
              />
            </Label>
          </Form>
          <Buttons>
            <Button bgColor="#1890FF">Add New</Button>
            <Button bgColor="#1890FF">Cler all</Button>
          </Buttons>
        </Inner>
      </CardWrapper>
    </Wrapper>
  );
};

export default NewOperationCard;
