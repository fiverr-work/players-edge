import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Button = ({ outline, children, ...rest }) => {
  if (outline) return <OutlineButton {...rest}>{children}</OutlineButton>;
  return <ButtonStyle {...rest}>{children}</ButtonStyle>;
};

export default Button;

const Basic = css`
  font-family: "Rubik Bold";
  font-weight: bold;
  font-size: clamp(15px, 3vh, 4vh);
  line-height: 1;
  padding-left: 40px;
  padding-right: 40px;
`;
const ButtonStyle = styled.button`
  ${Basic}
  text-shadow: 0px 0px 18.523px rgba(49, 255, 156, 0.7), 0px 0px 71.7083px rgba(49, 255, 156, 0.5);
  color: rgb(232, 255, 244);
  background: #1ab373;
  box-shadow: -5px 13px 22px rgba(0, 0, 0, 0.25);
  border-radius: 75px;
  padding-top: clamp(16px, 3vh, 3vh);
  padding-bottom: clamp(16px, 3vh, 3vh);
`;

const OutlineButton = styled(Link)`
  ${Basic}
  border: 5px solid #1bb474;
  box-sizing: border-box;
  filter: drop-shadow(-5px 13px 22px rgba(0, 0, 0, 0.25));
  border-radius: 75px;
  text-shadow: 0px 0px 3px rgba(255, 245, 0, 0.86), 0px 0px 72px rgba(255, 245, 7, 0.43);
  color: #fffb8e;
  padding-top: clamp(15px, 3vh, 3vh);
  padding-bottom: clamp(15px, 3vh, 3vh);
`;
