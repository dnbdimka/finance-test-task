import styled from "styled-components";

export const TickerFollowItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-width: 265px;
  max-width: 400px;
  color: #404040;
  background: #ffffff;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 2px 2px rgb(0 0 0 / 6%),
    1px 1px 2px rgb(0 0 0 / 16%);
  border-radius: 12px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-bottom: 30px;
  }
  &:hover {
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
      1px 4px 6px rgb(0 0 0 / 16%);
  }
  .tickerTopBox {
    display: flex;
    justify-content: space-between;
  }
  .tickerTitle {
    margin-bottom: 30px;
  }
  .tickerInfoBox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
  .tickerPrice {
    font-weight: 700;
    font-size: 27px;
    line-height: 1.24;
    color: #404040;
    margin-right: 10px;
  }
  .tickerInfoChangeBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: -0.009em;
    border-radius: 5px;
    padding: 0 10px;

    &.Up {
      color: #24ca49;
      background-color: #e6f4ea;
      & .tickerChangePrice:before {
        content: "+";
      }
      & .tickerChangePercent:before {
        content: "↑";
        margin-right: 5px;
      }
    }
    &.Down {
      color: #fd4438;
      background-color: #f4e6e6;
      & .tickerChangePrice:before {
        content: "-";
      }
      .tickerChangePercent:before {
        content: "↓";
        margin-right: 5px;
      }
    }
  }
  .tickerBottomBox {
    display: flex;
    justify-content: center;
    & p {
      font-size: 16px;
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
    & span {
      font-size: 20px;
      font-weight: 700;
    }
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% / 3) - 30px);
    margin-left: 30px;
    margin-bottom: 30px;
  }
`;
