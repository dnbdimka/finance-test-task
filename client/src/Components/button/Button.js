import React from "react";
import sprite from "../../icons/my-icons.svg";
import { ButtonStyled } from "./ButtonStyled";

const Button = ({ onClick, className }) => {
  return (
    <ButtonStyled
      type="button"
      className={`btn ${className}`}
      onClick={onClick}
    >
      <svg width="15" height="15">
        <use xlinkHref={`${sprite}#icon-plus`} />
      </svg>
    </ButtonStyled>
  );
};

export default Button;
