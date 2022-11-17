import React, { useState } from "react";
import Button from "../../Shared/Buttons/Button/Button";
import RemoveButton from "../../Shared/Buttons/RemoveButton/RemoveButton";
import { List } from "../ActivitiesCard/ActivitiesCardStyle";
import CardWrapper from "../CardWrapper/CardWrapper";
import { useDispatch, useSelector } from "react-redux";
import {
  Item,
  Wrapper,
  UserIcon,
  Text,
  Count,
  Info,
  Inner,
} from "./MyAccountsCardStyle";
import { RootState } from "../../../store/store";
import {
  // addNewAccount,
  removeAccount,
} from "../../../store/slices/accountsSlice";
import { Backdrop } from "@mui/material";
import AddAccountPopup from "../../Popups/AddAccountPopup/AddAccountPopup";

const MyAccountsCard = () => {
  const accounts = useSelector(
    (state: RootState) => state.accountsSLice.accounts
  );
  const accountsSum = useSelector(
    (state: RootState) => state.accountsSLice.sum
  );

  const [addNewPopupIsOpen, setAddNewPopupIsOpen] = useState<boolean>(false);

  const dispatch = useDispatch();

  const addAccount = () => {
    setAddNewPopupIsOpen((prev) => !prev);
  };

  const remove = (title: string) => {
    dispatch(removeAccount(title));
  };

  return (
    <Wrapper>
      <CardWrapper
        title="My Accounts"
        headerButtons={
          <Button bgColor="#64D30D" onClick={addAccount}>
            Add account
          </Button>
        }
      >
        <Inner>
          <List>
            {accounts.map((item, index) => (
              <Item key={index}>
                <UserIcon src={item.imageSrc} alt="user-icon" />
                <Text>{item.title}</Text>
                <Count>{item.count} $</Count>
                <RemoveButton onClick={() => remove(item.title)} />
              </Item>
            ))}
          </List>
          <Info>Amount : {accountsSum} $</Info>
        </Inner>
      </CardWrapper>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={addNewPopupIsOpen}
      >
        <AddAccountPopup closePopup={() => setAddNewPopupIsOpen(false)}/>
      </Backdrop>
    </Wrapper>
  );
};

export default MyAccountsCard;
