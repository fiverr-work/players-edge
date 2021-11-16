import React from "react";
import styled from "styled-components";

import { ReactComponent as TicketIcon } from "../img/icons/ticket.svg";
import PolygonIcon from "../img/icons/polygon.png";
import { ReactComponent as BorderIcon } from "../img/icons/border.svg";
import { ReactComponent as LoadingIcon } from "../img/icons/loading.svg";

const Tickets = ({ className }) => {
  const [loading, setLoading] = React.useState(false);
  const number = 0;
  function handleTicket() {
    setLoading(!loading);
  }
  return (
    <TicketsStyle className={className}>
      <h3>
        <TicketIcon /> Tickets you own : <span>{number}</span>
      </h3>
      <button onClick={handleTicket}>
        <Icon>
          <BorderIcon />
          <img src={PolygonIcon} alt="" />
        </Icon>
        <span>
          Buy Ticket for <b>1 MATIC</b>
        </span>
      </button>
      <div className={loading ? "loading show" : "loading"}>
        <LoadingIcon />
      </div>
    </TicketsStyle>
  );
};

export default Tickets;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  min-width: 45px;
  height: 45px;
  background: rgba(196, 196, 196, 0.01);
  box-shadow: inset 0px 30.0211px 43.1072px -27.7118px rgba(255, 255, 255, 0.274),
    inset -1px 1px 7px -3.07909px #ffffff55,
    inset 0px -246px 52.3445px -49.2654px rgba(180, 75, 206, 0.3),
    inset 0px 40px 61px -25px #9000ff60, inset 0px 3.07909px 13.8559px rgba(144, 60, 255, 0.329),
    inset 0px 0.769772px 30.7909px rgba(227, 222, 255, 0.2);
  border-radius: 50px;
  position: relative;
  /* border: 1px solid red; */
  svg:first-child {
    position: absolute;
    top: -15px;
    left: -8px;
    width: calc(100% + 15px);
    height: calc(100% + 15px);
  }
  img {
    width: 40px;
    height: 40px;
    min-height: 40px;
  }

  @media (max-width: 768px) {
    width: 40px;
    min-width: 40px;
    height: 40px;
    svg:first-child {
      top: -11px;
      left: -6px;
      width: calc(100% + 12px);
      height: calc(100% + 10px);
    }
    img {
      width: 30px;
      height: 30px;
    }
  }
`;
const TicketsStyle = styled.div`
  display: inline-block;
  h3 {
    font-weight: 500;
    font-family: "Fira Sans Medium";
    font-size: clamp(16px, 2.5vh, 3vh);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    svg {
      margin-right: 10px;
    }
    span {
      color: rgba(255, 245, 0, 0.86);
      display: inline-block;
      margin-left: 5px;
    }
    @media (max-width: 768px) {
      svg {
        width: 35px;
      }
      font-size: 20px;
    }
  }
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #2b2b2b;
    box-shadow: -5px 13px 22px rgba(0, 0, 0, 0.25);
    border-radius: 75px;
    padding: 16px 40px;
    color: #fff;
    flex-wrap: wrap;
    span {
      display: inline-block;
      margin-left: 20px;
      font-family: "Fira Sans Medium";
      font-weight: 500;
      font-size: clamp(16px, 2.5vh, 3vh);
      b {
        font-family: "Fira Sans ExtraBold";
        font-weight: 800;
      }
      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
  .loading {
    text-align: center;
    margin-top: clamp(15px, 2.5vh, 3vh);
    display: none;

    &.show {
      display: block;
    }

    svg {
      width: 60px;
      height: 60px;
      animation: loading 1s infinite linear;
    }
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
