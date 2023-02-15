import React, { useRef, useState } from "react";
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
  RemoveButtonFake,
} from "./MyAccountsCardStyle";
import { RootState } from "../../../store/store";
import { removeAccount } from "../../../store/slices/accountsSlice";
import {
  Backdrop,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import AddAccountPopup from "../../Popups/AddAccountPopup/AddAccountPopup";

const MyAccountsCard = () => {
  const accounts = useSelector(
    (state: RootState) => state.accountsSLice.accounts
  );
  const accountsSum = useSelector(
    (state: RootState) => state.accountsSLice.sum
  );

  const [addNewPopupIsOpen, setAddNewPopupIsOpen] = useState<boolean>(false);
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);
  const [removedId, setRemovedId] = useState<string>("");

  const dispatch = useDispatch();

  const addAccountHandler = () => {
    setAddNewPopupIsOpen(true);
  };

  const remove = (id: string) => {
    if (dialogIsOpen) {
      dispatch(removeAccount(id));
      setDialogIsOpen(false);
    } else {
      setRemovedId(id);
      setDialogIsOpen(true);
    }
  };

  return (
    <>
      <Wrapper>
        <CardWrapper
          title="My Accounts"
          headerButtons={
            <Button bgColor="#64D30D" onClick={() => addAccountHandler()}>
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
                  {item.id !== "cash332212" ? (
                    <RemoveButton onClick={() => remove(item.id)} />
                  ) : (
                    <RemoveButtonFake />
                  )}
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
          <AddAccountPopup
            closePopup={setAddNewPopupIsOpen}
            accounts={accounts}
          />
        </Backdrop>
      </Wrapper>

      <Dialog
        open={dialogIsOpen}
        onClose={() => setDialogIsOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to delete this account
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogIsOpen(false)}>Disagree</Button>
          <Button bgColor="#64D30D" onClick={() => remove(removedId)}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MyAccountsCard;
