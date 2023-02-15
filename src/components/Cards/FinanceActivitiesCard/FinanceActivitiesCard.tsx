import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { removeActivity } from "../../../store/slices/accountsSlice";
import { financeActivitiesType } from "../../../types/types";
import Button from "../../Shared/Buttons/Button/Button";
import RemoveButton from "../../Shared/Buttons/RemoveButton/RemoveButton";
import CardWrapper from "../CardWrapper/CardWrapper";
import {
  Item,
  ItemIcon,
  ItemText,
  Link,
  List,
  MoreButtonWrapper,
  Plug,
  Wrapper,
} from "./FinanceActivitiesCardStyle";

const FinanceActivitiesCard = () => {
  const dispatch = useAppDispatch();
  const activitiesData = useAppSelector(
    (state) => state.accountsSLice.financeActivities
  );
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);
  const [removedId, setRemovedId] = useState<string>("");

  const removeActivityHandler = (id: string) => {
    if (dialogIsOpen) {
      dispatch(removeActivity(id));
      setRemovedId("");
      setDialogIsOpen(false);
    } else {
      setRemovedId(id);
      setDialogIsOpen(true);
    }
  };

  return (
    <>
      <Wrapper>
        <CardWrapper title="Finance activities">
          {activitiesData.length ? (
            <>
              <List>
                {activitiesData &&
                  activitiesData.slice(0, 4).map((item, index) => (
                    <Item key={index}>
                      <Link>
                        <ItemIcon src={item.imageSrc} alt="icon" />
                        <ItemText>
                          {item.text}
                          <span>{item.date}</span>
                        </ItemText>
                        <span>
                          {item.type === "positive" ? "+" : "-"} {item.price} $
                        </span>
                        <RemoveButton
                          onClick={() => removeActivityHandler(item.id)}
                        />
                      </Link>
                    </Item>
                  ))}
              </List>
              <MoreButtonWrapper>
                <Button bgColor="#1890FF">View all</Button>
              </MoreButtonWrapper>
            </>
          ) : (
            <Plug>
              <p>You have no activity</p>
            </Plug>
          )}
        </CardWrapper>
      </Wrapper>

      <Dialog
        open={dialogIsOpen}
        onClose={() => setDialogIsOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Ure you sure you want to delete this entry?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogIsOpen(false)}>Disagree</Button>
          <Button
            bgColor="#64D30D"
            onClick={() => removeActivityHandler(removedId)}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FinanceActivitiesCard;
