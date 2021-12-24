import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  // ADD
  &.add {
    border: 2px solid rgba(255, 134, 28, 0.5);
  }

  &:hover.add {
    border-color: rgb(255, 134, 28);
    box-shadow: 0 7px 14px rgba(255, 134, 28, 0.01),
      0 3px 6px rgba(255, 134, 28, 0.2);

    & svg {
      fill: rgb(255, 134, 28);
    }
  }
  &.add svg {
    fill: rgba(255, 134, 28, 0.5);
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  // REMOVE
  &.remove {
    border: 2px solid rgba(255, 28, 28, 0.5);
  }

  &:hover.remove {
    border-color: rgba(255, 28, 28, 1);
    box-shadow: 0 7px 14px rgba(255, 28, 28, 0.01),
      0 3px 6px rgba(255, 28, 28, 0.2);

    & svg {
      fill: rgba(255, 28, 28, 1);
    }
  }
  &.remove svg {
    transform: rotate(45deg);
    fill: rgba(255, 28, 28, 0.5);
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
