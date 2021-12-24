import React from "react";
import { useDispatch } from "react-redux";
import { toggleTickerFollowOperation } from "../../../redux/tickers/tickersOperations";
import { TickerItemStyled } from "./TickerItemStyled";

const TICKERS_USE = {
  AAPL: "Apple",
  GOOGL: "Google",
  MSFT: "Microsoft",
  AMZN: "Amazon",
  FB: "Facebook",
  TSLA: "Tesla",
};

const TickerItem = ({ ticker, isPriceUp }) => {
  const dispatch = useDispatch();

  const onToggleFollowClick = () => {
    dispatch(toggleTickerFollowOperation(ticker.ticker));
  };
  return (
    <TickerItemStyled>
      <h3 className="tickerTitle">{TICKERS_USE[ticker.ticker]}</h3>
      <div className="tickerInfoBox">
        <p className="tickerPrice">{ticker.price} $</p>
        <div className={`tickerInfoChangeBox ${isPriceUp() ? "Up" : "Down"}`}>
          <p className="tickerChangePrice">{ticker.change}$</p>
          <p
            className={`tickerChangePercent ${isPriceUp() ? "up" : "down"}
            `}
          >
            {ticker.change_percent}%
          </p>
        </div>
        <button type="button" onClick={onToggleFollowClick}></button>
      </div>
      {}
    </TickerItemStyled>
  );
};

export default TickerItem;
