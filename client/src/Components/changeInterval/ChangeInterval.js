import React from "react";
import { ChangeIntervalStyled } from "./ChangeIntervalStyles";

const ChangeInterval = ({
  handleSubmitIntervalForm,
  setInterval,
  interval,
}) => {
  const handleChangeInterval = (e) =>
    setInterval(Number(e.currentTarget.value));

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitIntervalForm(interval);
  };

  return (
    <ChangeIntervalStyled>
      <form onSubmit={handleSubmit} className="intervalForm">
        <div className="intervalBox">
          <select
            className="intevalSelect"
            type="number"
            name="interval"
            onChange={handleChangeInterval}
            value={interval}
          >
            <option value={5}>5 seconds</option>
            <option value={30}>30 seconds</option>
            <option value={1 * 60}>1 minute</option>
            <option value={10 * 60}>10 minutes</option>
            <option value={30 * 60}>30 minutes</option>
            <option value={1 * 60 * 60}>1 hour</option>
            <option value={4 * 60 * 60}>4 hours</option>
            <option value={12 * 60 * 60}>12 hours</option>
            <option value={24 * 60 * 60}>24 hours</option>
          </select>
        </div>
        <button type="submit" className="intervalButton">
          update
        </button>
      </form>
    </ChangeIntervalStyled>
  );
};

export default ChangeInterval;
