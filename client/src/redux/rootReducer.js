import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { tickerReducer } from "./tickers/tickersReducer";

const tickersConfig = {
  key: "tickers",
  storage: storage,
  whitelist: ["items", "itemsIsFollow"],
};

export const rootReducer = combineReducers({
  tickers: persistReducer(tickersConfig, tickerReducer),
});
