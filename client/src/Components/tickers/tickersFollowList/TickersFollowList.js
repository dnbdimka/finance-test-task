import React from "react";
import TickerFollowItem from "./tickerFollowItem/TickerFollowItem";
import { TickersFollowListStyled } from "./TickersFollowListStyled";

const TickersFollowList = ({ tickers, isPriceUp, onRemoveFollowClick }) => {
  return (
    <TickersFollowListStyled>
      {tickers.map((ticker) => (
        <TickerFollowItem
          key={ticker.ticker}
          ticker={ticker}
          isPriceUp={isPriceUp}
          onRemoveFollowClick={onRemoveFollowClick}
        />
      ))}
    </TickersFollowListStyled>
  );
};

export default TickersFollowList;
