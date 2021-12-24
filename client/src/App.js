import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";
import Tickers from "./Components/tickers/Tikers";
import { tickersErrorSelector } from "./redux/tickers/tickersSelectors";
import "react-toastify/dist/ReactToastify.css";
import {
  getTickersError,
  getTickersSucces,
} from "./redux/tickers/tickersActions";
import ControlPanel from "./Components/controlPanel/ControlPanel";

const socket = io("http://localhost:4000/");

const App = () => {
  const error = useSelector(tickersErrorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.emit("start");
    socket.on("ticker", (tickers) => {
      dispatch(getTickersSucces(tickers));
    });
    socket.on("connect_error", () =>
      dispatch(getTickersError("No internet connection"))
    );
    toast.error(error);
  }, [dispatch, error]);

  const serverStart = (interval) => {
    socket.emit("start", interval * 1000);
  };

  const serverStop = () => {
    socket.emit("stop");
  };

  return (
    <>
      <ControlPanel serverStart={serverStart} serverStop={serverStop} />
      <Tickers />
      <ToastContainer theme="colored" />
    </>
  );
};

export default App;
