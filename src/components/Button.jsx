import React from "react";
import styled, { css } from "styled-components";

const Button = ({ outline, children }) => {
  if (outline) return <OutlineButton>{children}</OutlineButton>;
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default Button;

const Basic = css`
  all: unset;
  font-weight: bold;
  font-size: 36px;
  line-height: 1;
  font-family: "Rubik Bold", sans-serif;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  :active {
    transform: scale(0.98);
    transition: transform 0.2s ease-in-out;
  }
`;
const ButtonStyle = styled.button`
  ${Basic}
  text-shadow: 0px 0px 18.523px rgba(49, 255, 156, 0.7), 0px 0px 71.7083px rgba(49, 255, 156, 0.5);
  color: rgb(180, 255, 219);
  background: #1ab373;
  box-shadow: -5px 13px 22px rgba(0, 0, 0, 0.25);
  border-radius: 75px;
  padding: 27px 40px;
`;

const OutlineButton = styled.button`
  ${Basic}
  padding: 15px 40px;
  border: 5px solid #1bb474;
  box-sizing: border-box;
  filter: drop-shadow(-5px 13px 22px rgba(0, 0, 0, 0.25));
  border-radius: 75px;
  text-shadow: 0px 0px 3px rgba(255, 245, 0, 0.86), 0px 0px 72px rgba(255, 245, 7, 0.43);
  color: #fffb8e;
`;
