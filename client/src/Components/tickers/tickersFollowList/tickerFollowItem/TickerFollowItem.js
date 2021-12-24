import React from "react";
import Button from "../../../button/Button";
import { TickerFollowItemStyled } from "./TickerFollowItemStyled";

const TICKERS_USE = {
  AAPL: "Apple",
  GOOGL: "Google",
  MSFT: "Microsoft",
  AMZN: "Amazon",
  FB: "Facebook",
  TSLA: "Tesla",
};

const TickerFollowItem = ({ ticker, isPriceUp, onRemoveFollowClick }) => {
  return (
    <TickerFollowItemStyled>
      <div className="tickerTopBox">
        <h3 className="tickerTitle">{TICKERS_USE[ticker.ticker]}</h3>
        <Button
          onClick={() => onRemoveFollowClick(ticker.ticker)}
          className="remove"
        />
      </div>
      <div className="tickerInfoBox">
        <p className="tickerPrice">{ticker.price} $</p>
        <div className={`tickerInfoChangeBox ${isPriceUp() ? "Up" : "Down"}`}>
          <p className="tickerChangePrice">{ticker.change}$</p>
          <p
            className={`tickerChangePercent ${isPriceUp() ? "Up" : "Down"}
            `}
          >
            {ticker.change_percent}%
          </p>
        </div>
      </div>
      <div className="tickerBottomBox">
        <p>
          Dividend: <span>{ticker.dividend}</span>
        </p>
        <p>
          Yield: <span>{ticker.yield}</span>
        </p>
      </div>
    </TickerFollowItemStyled>
  );
};

export default TickerFollowItem;
