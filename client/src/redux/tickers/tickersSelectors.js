const tickersListSelector = (state) =>
  state.tickers.items.filter(
    (ticker) => !state.tickers.itemsIsFollow.includes(ticker.ticker)
  );
const tickersFollowListSelector = (state) =>
  state.tickers.items.filter((ticker) =>
    state.tickers.itemsIsFollow.includes(ticker.ticker)
  );
const tickersErrorSelector = (state) => state.tickers.error;

export { tickersFollowListSelector, tickersErrorSelector, tickersListSelector };
