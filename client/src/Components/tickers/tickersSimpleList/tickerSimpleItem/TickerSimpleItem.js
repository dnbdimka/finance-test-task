import React from "react";
import { TickerSimpleItemStyled } from "./TickerSimpleItemStyled";
import Button from "../../../button/Button";

const TICKERS_USE = {
  AAPL: "Apple",
  GOOGL: "Google",
  MSFT: "Microsoft",
  AMZN: "Amazon",
  FB: "Facebook",
  TSLA: "Tesla",
};

const TickerSimpleItem = ({ ticker, onAddFollowClick }) => {
  return (
    <TickerSimpleItemStyled>
      <div className="tickerInfoBox">
        <h3 className="tickerTitle">{TICKERS_USE[ticker.ticker]}</h3>
        <p className="tickerPrice">{ticker.price} $</p>
      </div>
      <Button onClick={() => onAddFollowClick(ticker.ticker)} className="add" />
    </TickerSimpleItemStyled>
  );
};

export default TickerSimpleItem;
