import styled from "styled-components";

export const TickerSimpleItemStyled = styled.li`
  display: flex;
  min-width: 150px;
  justify-content: space-between;
  align-items: center;
  padding: 6px 15px;
  background: #ffffff;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 2px 2px rgb(0 0 0 / 6%),
    1px 1px 2px rgb(0 0 0 / 16%);
  border-radius: 4px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 10px;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
      1px 4px 6px rgb(0 0 0 / 16%);
  }

  .tickerTitle {
    font-size: 14px;
    color: #404040;
    margin-bottom: 5px;
  }

  .tickerPrice {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.24;
    white-space: nowrap;
    color: #404040;
    margin-right: 10px;
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% / 6) - 10px);
  }
`;
