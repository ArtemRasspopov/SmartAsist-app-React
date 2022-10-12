import styled from "styled-components";

type GrettingUserType = {
  path: string;
};

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserIcon = styled.div<GrettingUserType>`
  min-width: 72px;
  min-height: 72px;
  background-color: #1890ff;
  border-radius: 50%;
  background-image: url(${(props) => props.path});
  background-size: contain;
  background-position: center;
  margin-right: 24px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.85);
`;

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.45);
`;

export const GrettingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  margin-left: auto;
  gap: 50px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  color: rgba(0, 0, 0, 0.45);
`;

export const StatisticsCount = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.85);
`;
