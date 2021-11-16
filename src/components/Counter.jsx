import React from "react";
import styled from "styled-components";

const Counter = ({ title, word, number }) => {
  return (
    <CounterStyle data-aos="fade-in">
      <h2>
        {title} <span>{word}</span>
      </h2>
      <div>{number === 0 ? "0000" : number}</div>
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
    font-size: clamp(18px, 3vh, 3vh);
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

    letter-spacing: clamp(30px, 3vh, 3vh);
    font-size: clamp(16px, 4vh, 4vh);
    padding-top: clamp(10px, 1vh, 1vh);
    padding-bottom: clamp(10px, 1vh, 1vh);
    padding-left: clamp(30px, 5vh, 5vh);
    padding-right: 0;

    font-family: "Fira Code", monospace;
    font-weight: normal;
    color: #f4f4f4;
  }
`;
