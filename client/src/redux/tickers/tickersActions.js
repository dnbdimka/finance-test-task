import { createAction } from "@reduxjs/toolkit";

const getTickersRequest = createAction("tickers/getTickersRequest");
const getTickersSucces = createAction("tickers/getTickersSucces");
const getTickersError = createAction("tickers/getTickersError");

const addTickerFollow = createAction("tickers/addTickerFollow");
const removeTickerFollow = createAction("tickers/removeTickerFollow");

export {
  getTickersRequest,
  getTickersSucces,
  getTickersError,
  addTickerFollow,
  removeTickerFollow,
};
