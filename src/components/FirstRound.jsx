import React from "react";
import styled from "styled-components";

const FirstRound = () => {
  return <FirstRoundStyle>FirstRound</FirstRoundStyle>;
};

export default FirstRound;

const FirstRoundStyle = styled.div`
  width: 100%;
  max-width: 399px;
  height: 583px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2b2b2b;
  box-shadow: -5px 13px 22px rgba(0, 0, 0, 0.25);
  border-radius: 75px;

  @media (max-width: 992px) {
    display: none;
    position: fixed;
    left: 0;
    z-index: 5;
  }
`;
