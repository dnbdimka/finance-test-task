// import {
//   getTickersError,
//   getTickersRequest,
//   getTickersSucces,
// } from "./tickersActions";

// const socket = io("http://localhost:4000/");

// const getTickersOperation = (tickers) => (dispatch) => {
//   dispatch(getTickersRequest());

//   socket.emit("start");
//   socket.on("ticker", (tickers) => dispatch(getTickersSucces(tickers)));
//   socket.on("connect_error", () =>
//     dispatch(getTickersError("No internet connection"))
//   );
// };

// export { getTickersOperation, socket };
