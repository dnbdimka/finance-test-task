import styled from "styled-components";

export const ChangeIntervalStyled = styled.div`
  .intervalForm {
    display: flex;
    align-items: center;
  }
  .intevalSelect {
    background-color: transparent;
    border: 2px solid rgba(255, 134, 28, 0.5);
    border-radius: 4px;
    margin-right: 20px;
  }
  .intervalButton {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    padding: 0 20px;
    border: 2px solid rgba(255, 134, 28, 0.5);
    border-radius: 15px;
    text-transform: uppercase;
    color: rgba(255, 134, 28, 0.5);
    font-weight: 700;

    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .intervalButton:hover {
    border-color: rgb(255, 134, 28);
    color: rgb(255, 134, 28);
    box-shadow: 0 7px 14px rgba(255, 134, 28, 0.01),
      0 3px 6px rgba(255, 134, 28, 0.2);
  }
`;
