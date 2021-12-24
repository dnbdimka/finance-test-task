import React, { useState } from "react";
import ChangeInterval from "../changeInterval/ChangeInterval";
import Container from "../container/Container";
import Section from "../section/Section";
import ServerConection from "../serverConnection/ServerConection";
import { ControlPanelStyled } from "./ControlPanelStyled";

const ControlPanel = ({ serverStart, serverStop }) => {
  const [interval, setInterval] = useState(5);
  const [isConnected, setIsConnected] = useState(true);

  const handleSubmitIntervalForm = (interval) => {
    serverStop();
    serverStart(interval);
  };

  const toggleConnection = (isConnected) =>
    isConnected ? serverStop() : serverStart(interval);

  return (
    <Container>
      <Section title="Interval update">
        <ControlPanelStyled>
          <ChangeInterval
            handleSubmitIntervalForm={handleSubmitIntervalForm}
            setInterval={setInterval}
            interval={interval}
          />
          <ServerConection
            toggleConnection={toggleConnection}
            setIsConnected={setIsConnected}
            isConnected={isConnected}
          />
        </ControlPanelStyled>
      </Section>
    </Container>
  );
};

export default ControlPanel;
