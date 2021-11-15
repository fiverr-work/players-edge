import React, { useState } from "react";
import styled from "styled-components";

import { ModalBackground } from "../components/modals/ModalBackground";

import { ReactComponent as CalendarIcon } from "../img/icons/calendar.svg";
import { ReactComponent as ArrowBottomIcon } from "../img/icons/arrow-bottom.svg";
import ArrowsLeft from "../img/icons/arrows-left.svg";
import Illustration from "../img/icons/illustration.svg";
import SidebarBg from "../img/backgrounds/sidebar.svg";

const FirstRound = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <FirstRoundStyle className={isOpen ? "show" : ""}>
        <h2>First Round!</h2>
        <label>
          <CalendarIcon />
          December 25th
        </label>
        <div className="box">
          <div>
            <span>20</span>
            <span>d</span>
          </div>
          <div>
            <span>11</span>
            <span>h</span>
          </div>
          <div>
            <span>19</span>
            <span>m</span>
          </div>
        </div>
        <div className="footer">
          <ArrowBottomIcon />
          <h3>
            550 Early Birds will get 1 ticket for <span>FREE</span>
          </h3>
        </div>
      </FirstRoundStyle>
      <OpenSidebar onClick={() => setIsOpen(true)} className={isOpen ? "hide" : ""}>
        <div>
          <span>First</span>
          <span>Round</span>
        </div>
      </OpenSidebar>
      {isOpen && <ModalBackground onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default FirstRound;

const OpenSidebar = styled.div`
  cursor: pointer;
  position: fixed;
  top: 50%;
  left: 0;
  right: auto;
  transform: translateY(-50%);
  z-index: 7;

  &.hide {
    left: -100%;
  }
  div {
    max-width: 75px;
    min-width: 75px;
    word-break: break-all;
    text-shadow: 0px 0px 8px rgba(49, 255, 156, 0.7), 0px 0px 71.7083px rgba(49, 255, 156, 0.5);
    color: rgb(182, 255, 220);
    text-align: center;
    font-family: "Fira Sans Bold";
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 2px;
    border-radius: 16px;
    padding: 30px;
    position: relative;
    ::before {
      content: url(${SidebarBg});
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
  span {
    display: block;
    position: relative;
    right: 15px;
    :nth-child(1) {
      margin-bottom: 15px;
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

const FirstRoundStyle = styled.div`
  width: 100%;
  max-width: 399px;
  height: 583px;
  display: flex;
  flex-direction: column;
  background: #2b2b2b;
  box-shadow: -5px 13px 22px rgba(0, 0, 0, 0.25);
  border-radius: 75px;
  padding: 40px;
  position: relative;

  h2 {
    font-family: "Fira Sans Bold", sans-serif;
    font-weight: bold;
    font-size: 36px;
    margin-bottom: 37px;
    text-shadow: 0px 0px 18.523px rgba(49, 255, 156, 0.7), 0px 0px 71.7083px rgba(49, 255, 156, 0.5);
    text-align: center;
  }

  label {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 20px;
    font-size: 24px;
    svg {
      margin-right: 10px;
    }
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 26px 0;
    border-radius: 25px;
    margin-bottom: 41px;
    background: rgba(196, 196, 196, 0.01);
    box-shadow: inset 0px 19.8066px 28.4403px -18.283px rgba(255, 255, 255, 0.5),
      inset 0px 3.55503px 5.58648px -2.03145px #ffffff,
      inset 0px -41.6447px 34.5346px -32.5032px rgba(68, 145, 71, 0.3),
      inset 0px 49.7704px 50.7862px -24.3774px rgba(80, 117, 99, 0.7),
      inset 0px 2.03145px 9.14151px #1ab373, inset 0px 0.507862px 20.3145px rgba(49, 255, 156, 0.5);
    backdrop-filter: blur(50.7862px);
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        font-family: "Fira Sans Bold";
        font-weight: bold;
        font-size: 36px;
        text-transform: uppercase;
        :nth-child(1) {
        }
        :nth-child(2) {
          color: rgba(255, 245, 0, 0.86);
        }
      }
    }
  }

  .footer {
    text-align: center;
    h3 {
      font-family: "Fira Sans SemiBold", sans-serif;
      margin: 50px auto 0;
      color: #f4f4f4;
      font-weight: 600;
      font-size: 30px;
      line-height: 119.5%;
      max-width: 210px;
      text-transform: capitalize;
      span {
        color: #a5eb9f;
      }
    }
  }

  ::after,
  ::before {
    position: absolute;
  }
  ::after {
    content: url(${ArrowsLeft});
    bottom: 33px;
    right: 60px;
  }
  ::before {
    content: url(${Illustration});
    bottom: 50px;
    left: 44px;
  }
  @media (max-width: 992px) {
    position: fixed;
    top: 50%;
    left: -100%;
    transform: translate(-50%, -50%);
    z-index: 12;

    width: 85vw;
    max-width: 85vw;
    height: 500px;

    h2 {
      font-size: 24px;
      margin-bottom: 30px;
    }

    label {
      font-size: 16px;
    }
    .box > div span {
      font-size: 24px;
    }
    .footer h3 {
      font-size: 20px;
    }
    &.show {
      transition: left 350ms ease-in;
      left: 50%;
    }
  }
`;
