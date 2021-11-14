import React from "react";
import styled, { css } from "styled-components";

const Button = ({ outline, children, ...rest }) => {
  if (outline) return <OutlineButton {...rest}>{children}</OutlineButton>;
  return <ButtonStyle {...rest}>{children}</ButtonStyle>;
};

export default Button;

const Basic = css`
  font-weight: bold;
  font-size: 36px;
  line-height: 1;
  font-family: "Rubik Bold", sans-serif;
`;
const ButtonStyle = styled.button`
  ${Basic}
  text-shadow: 0px 0px 18.523px rgba(49, 255, 156, 0.7), 0px 0px 71.7083px rgba(49, 255, 156, 0.5);
  color: rgb(180, 255, 219);
  background: #1ab373;
  box-shadow: -5px 13px 22px rgba(0, 0, 0, 0.25);
  border-radius: 75px;
  padding: 27px 40px;

  @media (max-width: 768px) {
    padding: 16px 40px;
    font-size: 24px;
  }
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
  @media (max-width: 768px) {
    padding: 12px 40px;
    font-size: 20px;
  }
`;
