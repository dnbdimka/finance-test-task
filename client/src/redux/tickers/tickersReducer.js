import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addTickerFollow,
  getTickersError,
  getTickersSucces,
  removeTickerFollow,
} from "./tickersActions";

const tickersListReducer = createReducer([], {
  [getTickersSucces]: (_, { payload }) => payload,
});
const tickersListFollowReducer = createReducer([], {
  [addTickerFollow]: (state, { payload }) => [...state, payload],
  [removeTickerFollow]: (state, { payload }) =>
    state.filter((ticker) => ticker !== payload),
});

const tickersErrorReducer = createReducer(null, {
  [getTickersError]: (_, { payload }) => payload,
  [getTickersSucces]: () => null,
});

export const tickerReducer = combineReducers({
  items: tickersListReducer,
  itemsIsFollow: tickersListFollowReducer,
  error: tickersErrorReducer,
});
