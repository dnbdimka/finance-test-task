import React from "react";
import TickerSimpleItem from "./tickerSimpleItem/TickerSimpleItem";
import { TickersSimpleListStyled } from "./TickersSimpleListStyled";

const TickersSimpleList = ({ tickers, isPriceUp, onAddFollowClick }) => {
  return (
    <TickersSimpleListStyled>
      {tickers.map((ticker) => (
        <TickerSimpleItem
          key={ticker.ticker}
          ticker={ticker}
          isPriceUp={isPriceUp}
          onAddFollowClick={onAddFollowClick}
        />
      ))}
    </TickersSimpleListStyled>
  );
};

export default TickersSimpleList;
