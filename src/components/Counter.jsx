import React from "react";
import styled from "styled-components";

const Counter = ({ title, word, number }) => {
  return (
    <CounterStyle>
      <h2>
        {title} <span>{word}</span>
      </h2>
      <div>{number == 0 ? "0000" : number}</div>
    </CounterStyle>
  );
};

export default Counter;

const CounterStyle = styled.div`
  display: inline-block;
  text-align: center;
  h2 {
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 30px;
    text-transform: capitalize;
    color: #ffffff;
    span {
      color: rgba(255, 245, 0, 0.86);
    }
  }
  div {
    text-align: center;
    background: #2b2b2b;
    box-shadow: -5px 13px 22px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    padding: 18px 50px;
    padding-right: 0;
    font-family: "Fira Code", monospace;
    letter-spacing: 50px;
    font-weight: normal;
    font-size: 48px;
    color: #f4f4f4;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 20px;
    }
    div {
      font-size: 24px;
      letter-spacing: 30px;
      padding-left: 30px;
    }
  }
`;
