import React from "react";
import NegativeChart from "../../SvgIcons/NegativeChart";
import PositiveChart from "../../SvgIcons/PositiveChart";
import CardWrapper from "../CardWrapper/CardWrapper";
import {
  Count,
  Info,
  Item,
  ItemIcon,
  List,
  Title,
  Wrapper,
} from "./ExchangeRatesCardStyle";

const ExchangeRatesCard = () => {
  const ExchangeRatesData = [
    { title: "USDT", count: 3455, progress: true , icon : './images/currencies/usdtIcon.png'},
    { title: "BTC", count: 3455, progress: true , icon : './images/currencies/btcIcon.png'},
    { title: "RUB", count: 3455, progress: false , icon : './images/currencies/rubIcon.png'},
    { title: "BUY", count: 3455, progress: true , icon : './images/currencies/rubIcon.png'},
    { title: "EUR", count: 3455, progress: false , icon : './images/currencies/eurIcon.png'},
    { title: "USD", count: 3455, progress: false , icon : './images/currencies/usdIcon.png'},
  ];

  return (
    <Wrapper>
      <CardWrapper title="Сurrent exchange rates">
        <List>
          {ExchangeRatesData.map((item, index) => (
            <Item key={index}>
              <Title>
                <ItemIcon
                  src={item.icon}
                  alt={"icon"}
                />
                {item.title}
              </Title>
              <Info>
                <Count>$ {item.count}</Count>
                {item.progress ? <PositiveChart /> : <NegativeChart />}
              </Info>
            </Item>
          ))}
        </List>
      </CardWrapper>
    </Wrapper>
  );
};

export default ExchangeRatesCard;
