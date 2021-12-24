import React from "react";
import { ServerConectionStyled } from "./ServerConectionStyled";

const ServerConection = ({ toggleConnection, setIsConnected, isConnected }) => {
  const onHandleClick = () => {
    setIsConnected((prev) => !prev);
    toggleConnection(isConnected);
  };
  return (
    <ServerConectionStyled
      type="button"
      onClick={onHandleClick}
      className={isConnected ? "connect" : "disconnect"}
    >
      {isConnected ? "stop" : "start"} updating
    </ServerConectionStyled>
  );
};

export default ServerConection;
