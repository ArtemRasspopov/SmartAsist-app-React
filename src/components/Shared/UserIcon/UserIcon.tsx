import React from "react";
import { UserImage, UserName, Wrapper } from "./UserIconStyle";

const UserIcon = () => {
  return (
    <Wrapper href="/">
      <UserImage path={'./images/default-user-icon.png'}/>
      <UserName>Serati Ma</UserName>
    </Wrapper>
  );
};

export default UserIcon;
