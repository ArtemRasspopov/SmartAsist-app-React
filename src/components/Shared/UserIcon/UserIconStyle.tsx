import styled from "styled-components";

type UserImageType = {
  path: string
}

export const Wrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserImage = styled.div<UserImageType>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #99d3ff;
  background-position: center;
  background-image: url(${(props) => props.path});
  background-size: contain;
  background-position: center;
`;

export const UserName = styled.p`
  color: white;
`
