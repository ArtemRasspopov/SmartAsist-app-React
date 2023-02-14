import React from "react";
import { accountType } from "../../../types/types";
import { DataList, Input, Option, Wrapper } from "./DropDownInputStyle";

interface DropDownInputProps {
  options?: accountType[];
  onChange: (value : string) => void;
}

const DropDownInput = ({ options = [], onChange }: DropDownInputProps) => {

  return (
    <Wrapper>
      <Input
        type="text"
        name="product"
        list="DropDownInputList"
        placeholder="input"
        onChange={(e) => onChange(e.target.value)}
      />

      <DataList id="DropDownInputList">
        {options.map((item, index) => <Option value={item.title} key={index}>{item.title}</Option> )}
      </DataList>
    </Wrapper>
  );
};

export default DropDownInput;
