import styled from "styled-components";

export const ServerConectionStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 0 20px;
  border-radius: 15px;
  text-transform: uppercase;
  font-weight: 700;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &.disconnect {
    border: 2px solid rgba(26, 141, 16, 0.5);
    color: rgba(26, 141, 16, 0.5);
    &:hover {
      border-color: rgb(26, 141, 16);
      color: rgb(26, 141, 16);
      box-shadow: 0 7px 14px rgba(26, 141, 16, 0.01),
        0 3px 6px rgba(26, 141, 16, 0.2);
    }
  }
  &.connect {
    border: 2px solid rgba(141, 16, 16, 0.5);
    color: rgba(141, 16, 16, 0.5);
    &:hover {
      border-color: rgb(141, 16, 16);
      color: rgb(141, 16, 16);
      box-shadow: 0 7px 14px rgba(141, 16, 16, 0.01),
        0 3px 6px rgba(141, 16, 16, 0.2);
    }
  }
`;
