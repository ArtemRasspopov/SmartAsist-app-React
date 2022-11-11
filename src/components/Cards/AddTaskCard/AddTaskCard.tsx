import React, { useState } from "react";
import { MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Input from "../../Shared/Input/Input";
import CardWrapper from "../CardWrapper/CardWrapper";
import {
  ColorItem,
  ColorList,
  Form,
  Label,
  SubmitButtonWrapper,
  Wrapper,
} from "./AddTaskCardStyle";
import StarButton from "../../Shared/Buttons/StarButton/StarButton";
import Button from "../../Shared/Buttons/Button/Button";

const AddTaskCard = () => {
  const colors = [
    "#FFFFFF",
    "#de2727a8",
    "#61df13b7",
    "#f5dd00ca",
    "#224ce5bd",
  ];

  const options = ["My Todo", "Work", "Other"];

  const [activeColor, setActiveColor] = useState<number>(0);
  const [activeOption, setActiveOption] = useState<string>(options[0]);

  const optionChange = (event: SelectChangeEvent) => {
    setActiveOption(event.target.value);
  };

  return (
    <Wrapper>
      <CardWrapper title="Add new task">
        <Form>
          <Label>
            Color :
            <ColorList>
              {colors.map((color, index) => (
                <ColorItem
                  key={index}
                  bgColor={color}
                  active={activeColor === index}
                  // onClick=(() => setActiveColor(index))
                  onClick={() => setActiveColor(index)}
                ></ColorItem>
              ))}
            </ColorList>
          </Label>
          <Label>
            Date : <span>21.03.2011</span>
          </Label>
          <Label>
            Text : <Input onChange={() => {}} />
          </Label>
          <Label>
            Space :{" "}
            <Select
              id="option-select"
              value={activeOption}
              onChange={optionChange}
            >
              {options.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </Label>
        </Form>
        <SubmitButtonWrapper>
          <StarButton />
          <Button bgColor="#64D30D">Add Task</Button>
        </SubmitButtonWrapper>
      </CardWrapper>
    </Wrapper>
  );
};

export default AddTaskCard;
